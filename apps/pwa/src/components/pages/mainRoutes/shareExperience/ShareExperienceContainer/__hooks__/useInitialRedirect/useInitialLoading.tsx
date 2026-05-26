import { useEffect, useState } from 'react';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

const useInitialLoading = () => {
  const [initialLoading, setInitialLoading] = useState(false);

  const initialLoadingHandler = () => {
    setInitialLoading(true);
  };

  const { searchParams } = useQueryParamsHandler();
  const params = new URLSearchParams(searchParams);
  const queriesCount = Array.from(params).length;

  useEffect(() => {
    if (initialLoading && queriesCount === 0) {
      setInitialLoading(false);
    }
  }, [queriesCount, initialLoading]);

  return { initialLoading, initialLoadingHandler };
};

export default useInitialLoading;
