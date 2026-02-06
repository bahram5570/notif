import { currentDate } from '@repo/core/utils/dates';

import useSignInteractiveBanner from '@hooks/__sign__/useSignInteractiveBanner';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRouter } from 'next/navigation';

import { ResponseType, useSignSelectedProps } from './types';

const { gDate } = currentDate();

const useSignSelected = ({ selectedDate, singSelectedList }: useSignSelectedProps) => {
  const { interactiveBannerActionHandler } = useSignInteractiveBanner();

  const successHandler = (v: ResponseType) => {
    interactiveBannerActionHandler(v.action);
  };

  const { callApi, isLoading } = usePwaApi<ResponseType>({
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
