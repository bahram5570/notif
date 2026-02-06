import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRouter } from 'next/navigation';

import { NewExperienceResponseType, UseSubmitProps } from './types';

const useSubmit = ({ image, text, topicId, onSuccessNewHandler }: UseSubmitProps) => {
  const router = useRouter();
  let toastMessage = '';

  const successHandler = ({ toast, valid }: NewExperienceResponseType) => {
    router.back();
    if (valid) {
      setTimeout(() => {
        router.back();
        onSuccessNewHandler();
      }, 0);
    } else {
      toastMessage = toast;
    }
  };

  const { isLoading: isSubmitLoading, callApi } = usePwaApi<NewExperienceResponseType>({
    api: 'shareeexperience/v3/experience',
    onSuccess: (v) => successHandler(v),
    method: 'POST',
  });

  const submitHandler = () => {
    callApi({ image, text, topicId });
  };

  return { submitHandler, isSubmitLoading, toastMessage };
};

export default useSubmit;
