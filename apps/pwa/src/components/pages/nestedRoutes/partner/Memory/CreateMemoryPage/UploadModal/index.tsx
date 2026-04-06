import { FileInputManager } from '@repo/core/components/FileInputManager';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { UploadModalPropsType } from './type';

const UploadModal = ({ fileDataHandler, uploadImageLoading }: UploadModalPropsType) => {
  return (
    <CustomModal isSlidingMode>
      <div className=" flex flex-col gap-3">
        <FileInputManager ShowFileInput fileDataHandler={fileDataHandler} uploadImageLoading={uploadImageLoading} />
      </div>
    </CustomModal>
  );
};

export default UploadModal;
