import useApi from '@hooks/useApi';
import useCustomToast from '@hooks/useCustomToast';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

const useSubmit = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { onToast } = useCustomToast();
  const route = useRouter();

  const itemIdData = getQueryParams('itemId');
  const categoryIdData = getQueryParams('categoryId');

  const successHandler = () => {
    route.back();
    onToast({ message: 'پیشنهادت برامون ارزشمنده و در آینده حتما به موضوعات پیشنهادی اضافه میشه', type: 'success' });
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
