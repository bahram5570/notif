import { currentDate } from '@utils/dates';

import useSignInteractiveBanner from '@hooks/__sign__/useSignInteractiveBanner';
import useApi from '@hooks/useApi';
import { useRouter } from 'next/navigation';

import { ResponseType, useSignSelectedProps } from './types';

const { gDate } = currentDate();

const useSignSelected = ({ selectedDate, singSelectedList }: useSignSelectedProps) => {
  const { interactiveBannerActionHandler } = useSignInteractiveBanner();

  const successHandler = (v: ResponseType) => {
    interactiveBannerActionHandler(v.action);
  };

  const { callApi, isLoading } = useApi<ResponseType>({
    method: 'PUT',
    api: 'info/woman/sign/add',
    onSuccess: (v) => successHandler(v),
  });

  const addSingHandler = () => {
    const payload = { date: selectedDate || gDate, items: singSelectedList };
    callApi(payload);
  };

  return { addSingHandler, isLoading };
};

export default useSignSelected;
