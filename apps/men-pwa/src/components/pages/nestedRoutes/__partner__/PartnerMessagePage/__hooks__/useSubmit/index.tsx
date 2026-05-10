import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

const useSubmit = () => {
  const { refetchQuery } = useCustomReactQuery();

  const successHandler = () => {
    refetchQuery({ queryKey: ['messagePartner'] });
  };

  const { callApi, isLoading } = usePwaApi({
    method: 'PUT',
    onSuccess: successHandler,
    api: 'message',
  });

  const submitHandler = (text: string) => {
    if (text.trim() === '') return;

    const payload = {
      title: '',
      text,
    };
    callApi(payload);
  };

  return { submitHandler, isLoading };
};

export default useSubmit;
