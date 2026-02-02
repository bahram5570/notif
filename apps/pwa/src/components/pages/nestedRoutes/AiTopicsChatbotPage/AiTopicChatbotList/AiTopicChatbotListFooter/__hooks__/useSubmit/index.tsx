import { setSessionStoragePromptText } from '@utils/aiChatbot';

import { SubmitHandlerType } from '@components/pages/nestedRoutes/AiChatbotPage/__hooks__/useSubmit/type';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

const useSubmit = () => {
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();
  const isLoading = pageNavigationLoading === 'aiChatbotLink';

  const submitHandler: SubmitHandlerType = ({ prompt }) => {
    pageNavigationHandler({
      showProgressBar: false,
      id: 'aiChatbotLink',
      linkTo: '/protected/aiChatbot',
    });
    setSessionStoragePromptText(prompt);
  };

  return { submitHandler, isLoading };
};

export default useSubmit;
