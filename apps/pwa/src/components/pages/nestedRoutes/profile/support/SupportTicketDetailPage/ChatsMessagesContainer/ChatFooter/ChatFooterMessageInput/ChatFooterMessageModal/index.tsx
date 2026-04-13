import { FileInputManager } from '@repo/core/components/FileInputManager';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import useFileValue from '../__hooks__/useFileValue';

const ChatFooterMessageModal = () => {
  const { fileDataHandler, uploadImageLoading } = useFileValue();

  return (
    <CustomModal isSlidingMode>
      <div className=" flex flex-col gap-3">
        <FileInputManager ShowFileInput fileDataHandler={fileDataHandler} uploadImageLoading={uploadImageLoading} />
      </div>
    </CustomModal>
  );
};

export default ChatFooterMessageModal;
