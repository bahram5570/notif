import { useEffect, useRef, useState } from 'react';

import { usePathname } from 'next/navigation';

import { useCustomRouter } from '../../../../hooks/useCustomRouter';
import { useQueryParamsHandler } from '../../../../hooks/useQueryParamsHandler';
import { PAGE_NAVIGATION_LOADING_RESET_TIME } from '../../constants';
import { LoadingStatesTypes, PageNavigationHandlerTypes } from '../../types';

const usePageNavigationLoading = () => {
  const path = usePathname() || '';
  const timer = useRef<NodeJS.Timeout>();
  const { push, back } = useCustomRouter();
  const { searchParams } = useQueryParamsHandler();
  const [progressBarLoading, setPogressBarLoading] = useState<LoadingStatesTypes>(false);
  const [pageNavigationLoading, setPageNavigationLoading] = useState<LoadingStatesTypes>(false);

  useEffect(() => {
    if (pageNavigationLoading || progressBarLoading) {
      timer.current = setTimeout(() => {
        setPogressBarLoading(false);
        setPageNavigationLoading(false);
      }, PAGE_NAVIGATION_LOADING_RESET_TIME * 1000);
    }

    return () => clearTimeout(timer.current);
  }, [pageNavigationLoading, progressBarLoading]);

  useEffect(() => {
    const body = document.body;

    if (pageNavigationLoading || progressBarLoading) {
      body.style.pointerEvents = 'none';
    } else {
      body.style.pointerEvents = 'auto';
    }

    return () => {
      body.style.pointerEvents = 'auto';
    };
  }, [pageNavigationLoading, progressBarLoading]);

  useEffect(() => {
    // # Disables loadings on changing of page or query param
    setPogressBarLoading(false);
    setPageNavigationLoading(false);

    return () => {
      setPogressBarLoading(false);
      setPageNavigationLoading(false);
    };
  }, [path, searchParams]);

  const pageNavigationHandler: PageNavigationHandlerTypes = ({ showProgressBar, linkTo, id }) => {
    if (linkTo) {
      if (linkTo === -1) {
        back();
      } else {
        push(linkTo);
      }
    }

    if (showProgressBar) {
      setPogressBarLoading(id);
    } else {
      setPageNavigationLoading(id);
    }
  };

  return { pageNavigationLoading, pageNavigationHandler, progressBarLoading };
};

export default usePageNavigationLoading;
