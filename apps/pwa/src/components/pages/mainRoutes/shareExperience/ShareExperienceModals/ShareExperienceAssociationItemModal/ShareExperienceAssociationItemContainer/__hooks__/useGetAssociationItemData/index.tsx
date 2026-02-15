import { useEffect, useState } from 'react';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { useGetAssociationItemDataPropsType } from './type';

const useGetAssociationItemData = ({ AssociationId }: useGetAssociationItemDataPropsType) => {
  const [pageNo, setPageNo] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const successHandler = () => {};

  const { isLoading, callApi } = usePwaApi({
    api: `/`,
    method: 'GET',
    queryKey: [`association${AssociationId}`],
    fetchOnMount: false,
  });

  //   useEffect(() => {
  //     if (AssociationId) {
  //       callApi();
  //     }
  //   }, [AssociationId]);

  useEffect(() => {
    if (pageNo > 0 && !isLoading) {
      callApi();
    }
  }, [pageNo, isLoading]);

  const updatePageNo = () => {
    setPageNo((prev) => prev + 1);
  };
  return { isLoading, pageNo, totalCount, updatePageNo };
};

export default useGetAssociationItemData;
