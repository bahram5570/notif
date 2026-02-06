import { useEffect, useState } from 'react';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { ClinicInfoResponseTypes } from '../../../ClinicInfoContainer/__hooks__/useGetDataClinicInfo/types';
import { CommentsResponseTypes, UseGetDataProps } from './types';

const useGetData = ({ clinicInfo, drId }: UseGetDataProps) => {
  const [data, setData] = useState<undefined | ClinicInfoResponseTypes>(undefined);
  const { getQuery } = useCustomReactQuery();

  const { callApi, isLoading: doctorLoading } = usePwaApi<ClinicInfoResponseTypes>({
    method: 'POST',
    api: 'advice/ticketInfo',
    onSuccess: (v) => setData(v),
  });

  useEffect(() => {
    const initialData = getQuery<ClinicInfoResponseTypes>({ queryKey: ['clinicInfo'] });

    if (initialData) {
      setData(initialData);
    } else {
      callApi({ id: clinicInfo });
    }
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
