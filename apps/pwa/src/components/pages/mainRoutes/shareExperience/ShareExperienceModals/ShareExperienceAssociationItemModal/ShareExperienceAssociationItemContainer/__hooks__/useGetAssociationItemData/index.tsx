import { useEffect } from 'react';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { useGetAssociationItemDataPropsType } from './type';

const useGetAssociationItemData = ({ AssociationId }: useGetAssociationItemDataPropsType) => {
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

  return { isLoading };
};

export default useGetAssociationItemData;
