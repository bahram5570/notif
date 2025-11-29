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
    api: 'info/woman/bloodpressure/add',
    method: 'POST',
    onSuccess: successHandler,
  });

  const submitHandler = ({ high, low }: InputValueType) => {
    const selectedDate = calendarInitailSelectedDate;
    const payload = {
      high,
      low,
      date: selectedDate,
    };
    callApi(payload);
  };
  return { isLoading, submitHandler };
};

export default useSubmit;
