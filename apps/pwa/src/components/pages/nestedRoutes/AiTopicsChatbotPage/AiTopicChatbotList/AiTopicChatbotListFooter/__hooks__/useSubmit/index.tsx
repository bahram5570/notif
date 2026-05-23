import { setSessionStoragePromptText } from '@utils/aiChatbot';

import { SubmitHandlerType } from '@components/pages/nestedRoutes/AiChatbotPage/__hooks__/useSubmit/type';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

const useSubmit = () => {
  const { pageNavigationHandler, navigationLoadingId } = usePageNavigationLoading();
  const isLoading = navigationLoadingId === 'aiChatbotLink';

  const submitHandler: SubmitHandlerType = ({ prompt }) => {
    pageNavigationHandler({
      id: 'aiChatbotLink',
      linkTo: '/protected/aiChatbot',
    });
    setSessionStoragePromptText(prompt);
  };

  return { submitHandler, isLoading };
};

export default useSubmit;
