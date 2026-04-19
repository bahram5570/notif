import { useEffect, useState } from 'react';

import { ClinicInfoResponseTypes, CommentsResponseTypes } from '@repo/core/components/clinic';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { UseGetDataProps } from './types';

const useGetData = ({ clinicInfo, drId }: UseGetDataProps) => {
  const [data, setData] = useState<undefined | ClinicInfoResponseTypes>(undefined);

  const { callApi, isLoading: doctorLoading } = usePwaApi<ClinicInfoResponseTypes>({
    method: 'POST',
    api: 'advice/ticketInfo',
    onSuccess: (v) => setData(v),
  });

  useEffect(() => {
    callApi({ type: clinicInfo });
  }, []);

  const doctorData = data?.info.dr.find((item) => item.id === drId);

  const { isLoading: commentsLoading, data: commentsData } = usePwaApi<CommentsResponseTypes>({
    api: `advice/drComments/${drId}/0`,
    queryKey: ['comments'],
    method: 'GET',
  });

  const isLoading = doctorLoading || commentsLoading;

  return { isLoading, doctorData, commentsData: commentsData?.comment.list };
};

export default useGetData;
