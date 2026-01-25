import useSignDateState from '@hooks/__sign__/useSignDateState';
import useApi from '@hooks/useApi';
import { useRouter } from 'next/navigation';

import { InputValueType } from '../../type';

const useSubmit = () => {
  const router = useRouter();
  const { calendarInitailSelectedDate } = useSignDateState();

  const successHandler = () => {
    router.back();
  };

  const { callApi, isLoading } = useApi({
    api: 'info/woman/bloodsuger/add',
    method: 'POST',
    onSuccess: successHandler,
  });

  const submitHandler = ({ condition, value }: InputValueType) => {
    const selectedDate = calendarInitailSelectedDate;

    const payload = {
      condition,
      value,
      date: selectedDate,
    };
    callApi(payload);
  };
  return { isLoading, submitHandler };
};

export default useSubmit;
