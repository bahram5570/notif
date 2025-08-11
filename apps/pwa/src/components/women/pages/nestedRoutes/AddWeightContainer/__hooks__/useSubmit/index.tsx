import useApi from '@hooks/useApi';
import useSignDateState from '@hooks/useSignDateState';
import { useRouter } from 'next/navigation';

const useSubmit = () => {
  const router = useRouter();
  const { calendarInitailSelectedDate } = useSignDateState();

  const successHandler = () => {
    router.back();
  };
  const { callApi, isLoading } = useApi({ api: 'info/woman/weight', method: 'POST', onSuccess: successHandler });

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
