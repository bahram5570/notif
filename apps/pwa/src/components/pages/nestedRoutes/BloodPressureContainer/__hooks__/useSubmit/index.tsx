import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useSignDateState } from '@repo/core/hooks/useSignDateState';

import { InputValueType } from '../../type';

const useSubmit = () => {
  const router = useCustomRouter();
  const { calendarInitailSelectedDate } = useSignDateState();

  const successHandler = () => {
    router.back();
  };

  const { callApi, isLoading } = usePwaApi({
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
