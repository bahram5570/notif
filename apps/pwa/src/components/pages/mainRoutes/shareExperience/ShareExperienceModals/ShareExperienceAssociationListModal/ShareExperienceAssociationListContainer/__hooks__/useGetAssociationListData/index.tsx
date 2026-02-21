import { useEffect, useState } from 'react';

import { PAGE_SIZE } from '@components/infiniteScrollContainer/constatns';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { AssociationListResponseType } from './type';

const useGetAssociationListData = () => {
  const [pageNo, setPageNo] = useState(0);
  const { newQuery, updateQuery, getQuery, removeQuery } = useCustomReactQuery(['associationListData']);

  const associationListData = getQuery<AssociationListResponseType>({ queryKey: ['associationListData'] });

  const successHandler = (v: AssociationListResponseType) => {
    if (associationListData) {
      const list = { ...associationListData, items: [...associationListData.items, ...v.items] };
      updateQuery({ queryKey: ['associationListData'], payload: list });
    } else {
      newQuery({ payload: v, queryKey: ['associationListData'] });
    }
  };

  const { isLoading, callApi } = usePwaApi<AssociationListResponseType>({
    api: `shareeexperience/v3/association/list?pageNo=${pageNo}&pageSize=${PAGE_SIZE}`,
    method: 'GET',
    queryKey: ['associationList'],
    onSuccess: successHandler,
    fetchOnMount: false,
  });

  useEffect(() => {
    if (!isLoading) {
      if (pageNo === 0) {
        removeQuery({ queryKey: ['associationListData'] });
      }
      callApi();
    }
  }, [pageNo]);

  const updatePageNo = () => {
    setPageNo((prev) => prev + 1);
  };

  const firstLoading = isLoading && pageNo === 0;

  return { isLoading, associationListData, pageNo, updatePageNo, firstLoading };
};

export default useGetAssociationListData;
