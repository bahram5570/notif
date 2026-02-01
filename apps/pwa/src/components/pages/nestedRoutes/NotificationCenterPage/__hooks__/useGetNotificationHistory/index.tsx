import { useEffect, useState } from 'react';

import { PAGE_SIZE } from '@components/infiniteScrollContainer/constatns';
import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { NotificationHistoryResponseType, QueryNotificationHistoryTypes } from './type';

const useGetNotificationHistory = () => {
  const [pageNo, setPageNo] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const { newQuery, updateQuery, getQuery } = useCustomReactQuery(['notificationhistory']);
  const notificationhistoryData = getQuery<QueryNotificationHistoryTypes>({ queryKey: ['notificationhistory'] });

  const successHandler = (v: NotificationHistoryResponseType) => {
    setTotalCount(v.totalCount);

    if (notificationhistoryData) {
      const list = { items: [...notificationhistoryData.items, ...v.items] };
      updateQuery({ queryKey: ['notificationhistory'], payload: list });
    } else {
      newQuery({ payload: { items: v.items }, queryKey: ['notificationhistory'] });
    }
  };

  const { isLoading, callApi } = useApi<NotificationHistoryResponseType>({
    api: `notificationhistory?pageNo=${pageNo}&pageSize=${PAGE_SIZE}`,
    method: 'GET',
    fetchOnMount: false,
    queryKey: ['notificationhistory' + pageNo],
    onSuccess: successHandler,
  });

  useEffect(() => {
    if (!isLoading) {
      callApi();
    }
  }, [pageNo, isLoading]);

  const updatePageNo = () => {
    setPageNo((prev) => prev + 1);
  };

  return { notificationhistoryData, isLoading, updatePageNo, pageNo, totalCount };
};

export default useGetNotificationHistory;
