import { currentDate } from '@utils/dates';

import useApi from '@hooks/useApi';
import useWidgetActions from '@hooks/useWidgetActions';
import { useRouter } from 'next/navigation';

import { ResponseType, useSignSelectedProps } from './types';

const { gDate } = currentDate();

const useSignSelected = ({ selectedDate, singSelectedList }: useSignSelectedProps) => {
  const { actionHandler } = useWidgetActions();
  const route = useRouter();

  const successHandler = (v: ResponseType) => {
    // route.back();
    actionHandler(v.action);
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
