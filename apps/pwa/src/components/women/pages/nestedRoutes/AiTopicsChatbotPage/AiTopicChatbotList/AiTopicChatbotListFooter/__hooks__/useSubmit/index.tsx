import { PROMPT_TEXT } from '@constants/ai.constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import { useRouter } from 'next/navigation';

const useSubmit = () => {
  const route = useRouter();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();
  const isLoading = pageNavigationLoading === 'aiChatbotLink';

  const submitHandler = (prompt: string) => {
    route.push(`/protected/aiChatbot`);

    pageNavigationHandler({
      showProgressBar: false,
      id: 'aiChatbotLink',
      linkTo: '/protected/aiChatbot',
    });
    sessionStorage.setItem(PROMPT_TEXT, prompt);
  };

  return { submitHandler, isLoading };
};

export default useSubmit;
