import { usePwaApi } from '../../../../../hooks/usePwaApi';
import { RequestPartnerResponseType } from './type';

const useGetRequestData = () => {
  const {
    data,
    isLoading,
    callApi: getData,
  } = usePwaApi<RequestPartnerResponseType>({ method: 'GET', queryKey: ['partnerRequest'], api: 'partner/requests' });

  return { data, isLoading, getData };
};

export default useGetRequestData;
