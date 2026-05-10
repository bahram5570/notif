import { FileInputManager } from '../../../FileInputManager';
import { CustomModal } from '../../../ui/CustomModal';
import { UploadModalPropsType } from './type';

export const UploadModal = ({ fileDataHandler, uploadImageLoading }: UploadModalPropsType) => {
  return (
    <CustomModal isSlidingMode>
      <div className=" flex flex-col gap-3">
        <FileInputManager
          ShowFileInput={false}
          fileDataHandler={fileDataHandler}
          uploadImageLoading={uploadImageLoading}
        />
      </div>
    </CustomModal>
  );
};
