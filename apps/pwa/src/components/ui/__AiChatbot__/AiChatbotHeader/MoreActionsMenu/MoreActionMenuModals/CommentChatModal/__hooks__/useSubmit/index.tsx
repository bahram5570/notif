import useAichatbotHistoryManager from '@hooks/__aichatbot__/useAichatbotHistoryManager';
import useApi from '@hooks/useApi';
import { useToast } from '@providers/ToastProvider/CustomToastProvider';
import { useRouter } from 'next/navigation';

const useSubmit = () => {
  const { itemIdData, categoryIdData, chatData } = useAichatbotHistoryManager();
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
