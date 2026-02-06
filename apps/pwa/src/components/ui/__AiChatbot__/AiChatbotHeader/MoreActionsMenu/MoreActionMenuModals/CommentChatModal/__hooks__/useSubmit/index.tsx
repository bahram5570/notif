import useAichatbotHistoryManager from '@hooks/__aichatbot__/useAichatbotHistoryManager';
import { useCustomToast } from '@repo/core/hooks/useCustomToast';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRouter } from 'next/navigation';

const useSubmit = () => {
  const { itemIdData, categoryIdData, chatData } = useAichatbotHistoryManager();
  const toast = useCustomToast();
  const route = useRouter();

  const successHandler = () => {
    route.back();
    toast.feedbackToastHandler({
      message: 'نظرت با موفقیت ثبت شد ✅',
      description: 'بازخوردت برامون خیلی مهمه و در آینده حتما بهبودش میدیم',
      duration: 4000,
    });
  };

  const { callApi, isLoading } = usePwaApi({
    api: 'feature/ai/opiniononchat',
    method: 'POST',
    onSuccess: successHandler,
  });

  const submitHandler = ({ text }: { text: string }) => {
    const payload = {
      text,
      chatId: chatData?.chatId,
      promptCategory: categoryIdData,
      promptId: itemIdData,
    };
    callApi(payload);
  };

  return { submitHandler, isLoading };
};

export default useSubmit;
