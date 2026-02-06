import { useEffect } from 'react';

import { APP_VERSION } from '@constants/app.constants';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { TicketcategoryResponseType } from './type';

const useGetDataCategory = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const ticketId = getQueryParams('id');
  const idList = ticketId?.split('-');
  const categoryId = idList ? idList[idList?.length - 1] : '';

  const {
    isLoading: dataLoading,
    callApi: getData,
    data,
  } = usePwaApi<TicketcategoryResponseType>({
    method: 'GET',
    fetchOnMount: false,
    queryKey: ['ticketCategory'],
    api: categoryId ? `support/category/${categoryId}` : 'support/category',
  });

  const getDataHandler = () => {
    const payload = {
      type: 0,
      ModelPhone: '',
      packageName: '',
      version: APP_VERSION || '',
    };

    getData(payload);
  };

  useEffect(() => {
    getDataHandler();
  }, [categoryId]);

  return { dataLoading, data, getDataHandler };
};

export default useGetDataCategory;
