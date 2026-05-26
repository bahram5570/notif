import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { SubmitHandlerPropsType, UseSubmitPropsType } from './type';

const useSubmit = ({ id, btn }: UseSubmitPropsType) => {
  const router = useCustomRouter();

  const successHandler = () => {
    if (btn.nextStep === 1) {
      return router.replace(`/protected/challenge/${id}`);
    }
    router.back();
  };

  const { callApi, isLoading } = usePwaApi({
    api: `challenge/form/${id}`,
    method: 'POST',
    onSuccess: successHandler,
  });

  const submitHandler = ({ questionText, text }: SubmitHandlerPropsType) => {
    const payload = {
      questionText,
      text,
    };
    callApi(payload);
  };
  return { submitHandler, submitLoading: isLoading };
};

export default useSubmit;
