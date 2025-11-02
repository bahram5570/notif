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
      id: 'SelectedDayNote',
      linkTo: '/protected/aiChatbot',
    });
    sessionStorage.setItem('prompt', prompt);
  };

  return { submitHandler, isLoading };
};

export default useSubmit;
