import { useEffect, useState } from 'react';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import useNameSelectorData from '../../../../__hooks__/useNameSelectorData';
import { FavoriteResponseTypes } from './types';

const useNameSelectorFetchFavorites = () => {
  const [api, setApi] = useState('');
  const { data, setData, favoriteFilters, setFavoriteFilters } = useNameSelectorData();

  const successHandler = (v: FavoriteResponseTypes) => {
    setData((state) => ({ ...state, favorites: v.items }));
  };

  const errorHandler = () => {
    setApi('');
  };

  const { callApi, isLoading } = usePwaApi({
    api,
    method: 'GET',
    queryKey: [api],
    fetchOnMount: false,
    onError: errorHandler,
    onSuccess: successHandler,
  });

  const paginationHandler = () => {
    if (favoriteFilters.isFetched) {
      return;
    }

    if (data?.favorites) {
      setFavoriteFilters((state) => ({ ...state, isFetched: true }));

      const GET_ALL_ITEMS_PAGE_SIZE = 1000;
      const FAVORITES_PAGE_NO = 0;

      if (data.favorites.length >= data.favoritesTotalCount) {
        return;
      }

      const result = `feature/babyname/favorites?pageSize=${GET_ALL_ITEMS_PAGE_SIZE}&pageNo=${FAVORITES_PAGE_NO}`;
      setApi(result);
    }
  };

  useEffect(() => {
    if (api) {
      callApi();
    }
  }, [api]);

  return { paginationHandler, isLoading };
};

export default useNameSelectorFetchFavorites;
