import useApi from '@hooks/useApi';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { useToast } from '@providers/ToastProvider/CustomToastProvider';
import { useRouter } from 'next/navigation';

const useSubmit = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { showToast } = useToast();
  const route = useRouter();

  const itemIdData = getQueryParams('promptItemId');
  const categoryIdData = getQueryParams('promptCategoryId');

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
