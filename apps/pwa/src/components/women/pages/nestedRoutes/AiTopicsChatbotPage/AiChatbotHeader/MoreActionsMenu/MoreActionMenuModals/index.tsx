import CustomModal from '@components/ui/CustomModal';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';

import { AiChatModalNameEnums } from '../enum';
import CommentChatModal from './CommentChatModal';
import DeleteChatModal from './DeleteChatModal';
import SuggestionTopicChatModal from './SuggestionTopicChatModal';
import { AI_ChAT_MODAL_QUERY_NAME } from './costants';

const MoreActionMenuModals = () => {
  const { getQueryParams } = useQueryParamsHandler();

  const hasModal = getQueryParams(MODALS.MODALS_AI_CHAT) !== null;
  const aiChatModalQueryName = getQueryParams(AI_ChAT_MODAL_QUERY_NAME) as AiChatModalNameEnums;

  const isOpen = hasModal;

  return (
    <CustomModal isOpen={isOpen}>
      <>{aiChatModalQueryName === AiChatModalNameEnums.DeleteAiChat && <DeleteChatModal />}</>
      <>{aiChatModalQueryName === AiChatModalNameEnums.CommentAiChat && <CommentChatModal />}</>
      <>{aiChatModalQueryName === AiChatModalNameEnums.SuggestionTopicChat && <SuggestionTopicChatModal />}</>
    </CustomModal>
  );
};

export default MoreActionMenuModals;
