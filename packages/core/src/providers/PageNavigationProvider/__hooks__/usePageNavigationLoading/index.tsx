import { useEffect, useState } from 'react';

import { useCustomRouter } from '../../../../hooks/useCustomRouter';
import { useQueryParamsHandler } from '../../../../hooks/useQueryParamsHandler';
import { PAGE_NAVIGATION_LOADING_RESET_TIME } from '../../constants';
import { LoadingStatesTypes, NavigationTypeTypes, PageNavigationHandlerTypes } from '../../types';

const usePageNavigationLoading = () => {
  const { push, back } = useCustomRouter();
  const { searchParams, pathname } = useQueryParamsHandler();
  const [pageLoading, setPageLoading] = useState<NavigationTypeTypes>(undefined);
  const [navigationLoadingId, setNavigationLoadingId] = useState<LoadingStatesTypes>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (navigationLoadingId || pageLoading) {
      timer = setTimeout(() => {
        setPageLoading(undefined);
        setNavigationLoadingId(false);
      }, PAGE_NAVIGATION_LOADING_RESET_TIME * 1000);
    }

    return () => clearTimeout(timer);
  }, [navigationLoadingId, pageLoading]);

  useEffect(() => {
    const body = document.body;

    if (navigationLoadingId || pageLoading) {
      body.style.pointerEvents = 'none';
    } else {
      body.style.pointerEvents = 'auto';
    }

    return () => {
      body.style.pointerEvents = 'auto';
    };
  }, [navigationLoadingId, pageLoading]);

  useEffect(() => {
    // # Disables loadings on changing of page or query param
    setPageLoading(undefined);
    setNavigationLoadingId(false);

    return () => {
      setPageLoading(undefined);
      setNavigationLoadingId(false);
    };
  }, [pathname, searchParams]);

  const pageNavigationHandler: PageNavigationHandlerTypes = ({ navigationType, linkTo, id }) => {
    if (linkTo) {
      if (linkTo === -1) {
        back();
      } else {
        push(linkTo);
      }
    }

    if (navigationType) {
      setPageLoading(navigationType);
    } else {
      setNavigationLoadingId(id);
    }
  };

  return { navigationLoadingId, pageLoading, pageNavigationHandler };
};

export default usePageNavigationLoading;
