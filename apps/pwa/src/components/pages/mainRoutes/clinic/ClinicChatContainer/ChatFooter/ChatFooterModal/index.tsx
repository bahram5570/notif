import { FileInputManager } from '@repo/core/components/FileInputManager';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import useFileValue from '../ChatFooterMessageInput/__hooks__/useFileValue';
import { ChatFooterModalProps } from './type';

const ChatFooterModal = ({ ticketId }: ChatFooterModalProps) => {
  const { fileDataHandler, uploadImageLoading } = useFileValue(ticketId);

  return (
    <CustomModal isSlidingMode>
      <div className=" flex flex-col gap-3">
        <FileInputManager ShowFileInput fileDataHandler={fileDataHandler} uploadImageLoading={uploadImageLoading} />
      </div>
    </CustomModal>
  );
};

export default ChatFooterModal;
