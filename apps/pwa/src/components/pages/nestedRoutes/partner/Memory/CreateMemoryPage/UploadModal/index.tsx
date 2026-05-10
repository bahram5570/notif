import { FileInputManager } from '@repo/core/components/FileInputManager';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { UploadModalPropsType } from './type';

const UploadModal = ({ fileDataHandler, uploadImageLoading }: UploadModalPropsType) => {
  return (
    <CustomModal isSlidingMode>
      <div className=" flex flex-col gap-3">
        <FileInputManager
          fileDataHandler={fileDataHandler}
          uploadImageLoading={uploadImageLoading}
          ShowFileInput={false}
        />
      </div>
    </CustomModal>
  );
};

export default UploadModal;
