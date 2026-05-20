import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { MODALS } from '@constants/modals.constants';
import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { AiChatModalNameEnums } from '../enum';
import CommentChatModal from './CommentChatModal';
import DeleteChatModal from './DeleteChatModal';
import SuggestionTopicChatModal from './SuggestionTopicChatModal';

const MoreActionMenuModals = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const route = useCustomRouter();

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
      className={`${aiChatModalQueryName === AiChatModalNameEnums.DeleteAiChat && 'glass-card !bg-white/80  !rounded-[32px]'}`}
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
