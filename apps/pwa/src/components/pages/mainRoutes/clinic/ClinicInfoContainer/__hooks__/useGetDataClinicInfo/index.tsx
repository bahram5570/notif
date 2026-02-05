import { useEffect } from 'react';

import useApi from '@hooks/useApi';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { useRouter } from 'next/navigation';

import { ClinicInfoResponseTypes } from './types';

const useGetDataClinicInfo = (clinicInfo: string) => {
  const { newQuery, getQuery } = useCustomReactQuery(['clinicInfo']);
  const router = useRouter();

  const successHandler = (v: ClinicInfoResponseTypes) => {
    newQuery({ queryKey: ['clinicInfo'], payload: v });
  };

  const errorHandler = () => {
    router.replace('/not-found');
  };

  const { callApi, isLoading } = useApi<ClinicInfoResponseTypes>({
    onSuccess: successHandler,
    onError: errorHandler,
    api: 'advice/ticketInfo',
    method: 'POST',
  });

  useEffect(() => {
    const clinicInfoParam = clinicInfo.split('-');
    const isCompletePayment = clinicInfoParam[1] === 'completePayment';
    const id = clinicInfoParam[0];
    let payload = {};

    if (isCompletePayment) {
      payload = { id: id };
    } else {
      payload = { type: Number(id) };
    }

    callApi(payload);
  }, []);

  const data = getQuery<ClinicInfoResponseTypes>({ queryKey: ['clinicInfo'] });

  return { isLoading, data };
};

export default useGetDataClinicInfo;
