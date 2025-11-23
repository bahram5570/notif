import { currentDate } from '@utils/dates';

import useApi from '@hooks/useApi';

import { useSignSelectedProps } from './types';

const { gDate } = currentDate();

const useSignSelected = ({ selectedDate, singSelectedList }: useSignSelectedProps) => {
  const { callApi, isLoading } = useApi({ method: 'PUT', api: 'info/woman/sign/add' });

  const addSingHandler = () => {
    const payload = { date: selectedDate || gDate, items: singSelectedList };
    callApi(payload);
  };

  return { addSingHandler, isLoading };
};

export default useSignSelected;
