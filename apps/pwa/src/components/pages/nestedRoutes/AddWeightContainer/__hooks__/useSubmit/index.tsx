import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useSignDateState } from '@repo/core/hooks/useSignDateState';
import { useRouter } from 'next/navigation';

const useSubmit = () => {
  const router = useRouter();
  const { calendarInitailSelectedDate } = useSignDateState();

  const successHandler = () => {
    router.back();
  };
  const { callApi, isLoading } = usePwaApi({ api: 'info/woman/weight', method: 'POST', onSuccess: successHandler });

  const submitHandler = (weight: number) => {
    const selectedDate = calendarInitailSelectedDate;
    const payload = {
      weight,
      date: selectedDate,
    };

    callApi(payload);
  };
  return { submitHandler, isLoading };
};

export default useSubmit;
