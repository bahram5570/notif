import CustomModal from '@components/ui/CustomModal';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import { useRouter } from 'next/navigation';

import { AiChatModalNameEnums } from '../enum';
import CommentChatModal from './CommentChatModal';
import DeleteChatModal from './DeleteChatModal';
import SuggestionTopicChatModal from './SuggestionTopicChatModal';

const MoreActionMenuModals = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const route = useRouter();

  const hasModal = getQueryParams(MODALS.MODALS_AI_CHAT) !== null;
  const aiChatModalQueryName = getQueryParams(MODALS.MODALS_AI_CHAT) as AiChatModalNameEnums;

  const isOpen = hasModal;

  const onCloseModal = () => {
    route.back();
  };

  return (
    <CustomModal
      isOpen={isOpen}
      isSlidingMode={aiChatModalQueryName !== AiChatModalNameEnums.DeleteAiChat}
      className={`${aiChatModalQueryName === AiChatModalNameEnums.DeleteAiChat && 'glass-card !bg-white/80 dark:!bg-white/20 !rounded-[32px]'}`}
    >
      <>
        {aiChatModalQueryName === AiChatModalNameEnums.DeleteAiChat && <DeleteChatModal onCloseModal={onCloseModal} />}
      </>
      <>
        {aiChatModalQueryName === AiChatModalNameEnums.CommentAiChat && (
          <CommentChatModal onCloseModal={onCloseModal} />
        )}
      </>
      <>
        {aiChatModalQueryName === AiChatModalNameEnums.SuggestionTopicChat && (
          <SuggestionTopicChatModal onCloseModal={onCloseModal} />
        )}
      </>
    </CustomModal>
  );
};

export default MoreActionMenuModals;
