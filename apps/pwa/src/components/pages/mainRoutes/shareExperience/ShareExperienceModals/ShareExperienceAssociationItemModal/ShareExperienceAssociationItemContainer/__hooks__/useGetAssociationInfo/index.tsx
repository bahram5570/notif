import { useEffect } from 'react';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { AssociationInfoResponseType, UseGetAssociationInfoPropsType } from './type';

const useGetAssociationInfo = ({ associationId }: UseGetAssociationInfoPropsType) => {
  const { newQuery, getQuery } = useCustomReactQuery(['associationInfoData']);

  const successHandler = (v: AssociationInfoResponseType) => {
    newQuery({ payload: v, queryKey: ['associationInfoData'] });
  };

  const associationInfoData = getQuery<AssociationInfoResponseType>({ queryKey: ['associationInfoData'] });

  const { isLoading, callApi } = usePwaApi<AssociationInfoResponseType>({
    api: `shareeexperience/v3/association/${associationId}`,
    method: 'GET',
    queryKey: ['associationInfo'],
    fetchOnMount: false,
    onSuccess: successHandler,
  });

  useEffect(() => {
    if (associationId) {
      callApi();
    }
  }, [associationId]);

  return { isLoading, associationInfoData };
};

export default useGetAssociationInfo;
