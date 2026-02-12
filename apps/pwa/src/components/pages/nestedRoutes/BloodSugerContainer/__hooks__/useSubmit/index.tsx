import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useSignDateState } from '@repo/core/hooks/useSignDateState';
import { useRouter } from 'next/navigation';

import { InputValueType } from '../../type';

const useSubmit = () => {
  const router = useRouter();
  const { calendarInitailSelectedDate } = useSignDateState();

  const successHandler = () => {
    router.back();
  };

  const { callApi, isLoading } = usePwaApi({
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
