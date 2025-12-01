import { SubmitHandlerType } from '@components/women/pages/nestedRoutes/AiChatbotPage/__hooks__/useSubmit/type';
import { PROMPT_TEXT } from '@constants/ai.constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

const useSubmit = () => {
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();
  const isLoading = pageNavigationLoading === 'aiChatbotLink';

  const submitHandler: SubmitHandlerType = ({ prompt }) => {
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
