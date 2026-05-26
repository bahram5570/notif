import { useEffect } from 'react';

import { ClinicInfoResponseTypes } from '@repo/core/components/clinic';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { SELECTED_DOCTOR } from '../../../ClinicDoctorInfoContainer/constants';

const useGetDataClinicInfo = (clinicInfo: string) => {
  const { newQuery, getQuery } = useCustomReactQuery(['clinicInfo']);
  const { getQueryParams } = useQueryParamsHandler();
  const router = useCustomRouter();

  const successHandler = (v: ClinicInfoResponseTypes) => {
    newQuery({ queryKey: ['clinicInfo'], payload: v });
  };

  const errorHandler = () => {
    router.replace('/not-found');
  };

  const { callApi, isLoading } = usePwaApi<ClinicInfoResponseTypes>({
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
      const doctorId = getQueryParams(SELECTED_DOCTOR);

      payload = { type: Number(id), ...(doctorId ? { drId: doctorId } : {}) };
    }

    callApi(payload);
  }, []);

  const data = getQuery<ClinicInfoResponseTypes>({ queryKey: ['clinicInfo'] });

  return { isLoading, data };
};

export default useGetDataClinicInfo;
