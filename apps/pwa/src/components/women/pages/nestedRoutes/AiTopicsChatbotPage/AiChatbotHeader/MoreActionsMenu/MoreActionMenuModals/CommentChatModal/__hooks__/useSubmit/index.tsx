import useApi from '@hooks/useApi';
import { useToast } from '@providers/ToastProvider/CustomToastProvider';
import { useRouter } from 'next/navigation';

import { UseSubmitPropsType } from './type';

const useSubmit = ({ categoryIdData, itemIdData }: UseSubmitPropsType) => {
  const { showToast } = useToast();
  const route = useRouter();

  const successHandler = () => {
    route.back();
    showToast({
      message: 'نظرت با موفقیت ثبت شد ✅',
      description: 'بازخوردت برامون خیلی مهمه و در آینده حتما بهبودش میدیم',
      duration: 4000,
    });
  };

  const { callApi, isLoading } = useApi({ api: 'feature/ai/opiniononchat', method: 'POST', onSuccess: successHandler });

  const submitHandler = ({ text, chatId }: { text: string; chatId: string | undefined }) => {
    const payload = {
      text,
      chatId,
      promptCategory: categoryIdData,
      promptId: itemIdData,
    };
    callApi(payload);
  };

  return { submitHandler, isLoading };
};

export default useSubmit;
