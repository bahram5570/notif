import useApi from '@hooks/useApi';

import { RequestPartnerResponseType } from './type';

const useGetRequestData = () => {
  const {
    data,
    isLoading,
    callApi: getData,
  } = useApi<RequestPartnerResponseType>({ method: 'GET', queryKey: ['partnerRequest'], api: 'partner/requests' });

  return { data, isLoading, getData };
};

export default useGetRequestData;
