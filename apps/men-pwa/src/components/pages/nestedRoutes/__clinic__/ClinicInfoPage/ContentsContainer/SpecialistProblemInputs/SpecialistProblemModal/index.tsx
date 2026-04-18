import { FileInputManager } from '@repo/core/components/FileInputManager';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { SpecialistProblemModalPropsTypes } from './type';

const SpecialistProblemModal = ({ fileDataHandler, uploadImageLoading }: SpecialistProblemModalPropsTypes) => {
  return (
    <CustomModal isSlidingMode>
      <div className=" flex flex-col gap-3">
        <FileInputManager ShowFileInput fileDataHandler={fileDataHandler} uploadImageLoading={uploadImageLoading} />
      </div>
    </CustomModal>
  );
};

export default SpecialistProblemModal;
