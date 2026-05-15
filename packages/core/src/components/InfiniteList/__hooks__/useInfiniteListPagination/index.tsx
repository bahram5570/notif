import { useEffect, useRef, useState } from 'react';

import { INFINITE_LIST_DELAY_LOADING } from '../../constants';
import { UseInfiniteListPaginationTypes } from './types';

const useInfiniteListPagination = ({ pagination, parentRef }: UseInfiniteListPaginationTypes) => {
  const lockRenderingRef = useRef(false);
  const [isInitialRendered, setIsInitialRendered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialRendered(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!pagination?.isLoading && lockRenderingRef.current) {
      const timer = setTimeout(() => {
        lockRenderingRef.current = false;
      }, INFINITE_LIST_DELAY_LOADING);

      return () => clearTimeout(timer);
    }
  }, [pagination?.isLoading]);

  useEffect(() => {
    const el = parentRef.current;
    if (!el) {
      return;
    }

    const handleScroll = () => {
      const reachEndOfPage = el.scrollTop + el.clientHeight >= el.scrollHeight - 50;

      if (!reachEndOfPage || !isInitialRendered || !pagination?.callPagination || lockRenderingRef.current) {
        return;
      }

      lockRenderingRef.current = true;
      pagination.callPagination();
    };

    el.addEventListener('scroll', handleScroll);

    return () => {
      el.removeEventListener('scroll', handleScroll);
    };
  }, [isInitialRendered, pagination]);
};

export default useInfiniteListPagination;
