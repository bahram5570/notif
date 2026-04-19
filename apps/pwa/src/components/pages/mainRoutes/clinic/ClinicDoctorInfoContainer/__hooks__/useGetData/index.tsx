import { useEffect, useRef, useState } from 'react';

import { ClinicInfoResponseTypes } from '@repo/core/components/clinic';
import { isDevelopeMode } from '@repo/core/utils/system';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { CommentsResponseTypes, UseGetDataProps } from './types';

const useGetData = ({ clinicInfo, drId, isRedirected }: UseGetDataProps) => {
  const [data, setData] = useState<undefined | ClinicInfoResponseTypes>(undefined);
  const isFirstTime = useRef(isDevelopeMode());

  const { callApi, isLoading: doctorLoading } = usePwaApi<ClinicInfoResponseTypes>({
    method: 'POST',
    api: 'advice/ticketInfo',
    onSuccess: (v) => setData(v),
  });

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    const payload = isRedirected ? { type: clinicInfo, redirectFrom: 'clinicWidget' } : { type: clinicInfo };
    callApi(payload);
  }, []);

  const commentsApi = isRedirected
    ? `advice/drComments/${drId}/0?redirectFrom=clinicWidget`
    : `advice/drComments/${drId}/0`;

  const { isLoading: commentsLoading, data: commentsData } = usePwaApi<CommentsResponseTypes>({
    method: 'GET',
    api: commentsApi,
    queryKey: ['comments'],
  });

  const isLoading = doctorLoading || commentsLoading;
  const doctorData = data?.info.dr.find((item) => item.id === drId);

  return { isLoading, doctorData, commentsData: commentsData?.comment.list };
};

export default useGetData;
