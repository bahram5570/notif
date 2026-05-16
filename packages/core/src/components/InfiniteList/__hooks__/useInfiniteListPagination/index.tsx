import { useEffect } from 'react';

import { UseInfiniteListPaginationTypes } from './types';
import useIsInitialRendered from './useIsInitialRendered';
import useLockRenderingRef from './useLockRenderingRef';

const useInfiniteListPagination = ({ pagination, parentRef }: UseInfiniteListPaginationTypes) => {
  const isInitialRendered = useIsInitialRendered();
  const lockRenderingRef = useLockRenderingRef(pagination?.isLoading);

  useEffect(() => {
    const el = parentRef.current;
    if (!el) {
      return;
    }

    const handleScroll = () => {
      const pageNo = pagination?.pageNo;
      const pageSize = pagination?.pageSize;
      const totalCount = pagination?.totalCount;
      const callPagination = pagination?.callPagination;

      const reachEndOfPage = el.scrollTop + el.clientHeight >= el.scrollHeight - 50;
      const hasPageCalculation = pageNo !== undefined && pageSize !== undefined && totalCount !== undefined;

      if (!reachEndOfPage || !isInitialRendered || !callPagination || lockRenderingRef.current) {
        return;
      }

      if (hasPageCalculation) {
        const hasNextPage = (pageNo + 1) * pageSize < totalCount;

        if (hasNextPage) {
          lockRenderingRef.current = true;
          pagination.callPagination();
        }
      } else {
        lockRenderingRef.current = true;
        pagination.callPagination();
      }
    };

    el.addEventListener('scroll', handleScroll);

    return () => {
      el.removeEventListener('scroll', handleScroll);
    };
  }, [isInitialRendered, pagination]);
};

export default useInfiniteListPagination;
