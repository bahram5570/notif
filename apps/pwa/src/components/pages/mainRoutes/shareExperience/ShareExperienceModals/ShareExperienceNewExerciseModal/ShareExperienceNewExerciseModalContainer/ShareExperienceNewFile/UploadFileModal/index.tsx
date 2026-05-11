import { FileInputManager } from '@repo/core/components/FileInputManager';
import { SHARE_EXPERIENCE_UPLOAD_FILE_MODAL_QUERY_NAME } from '@repo/core/components/ShareExperience';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import { UploadFileModalPropsType } from './type';

const UploadFileModal = ({ fileDataHandler, uploadImageLoading }: UploadFileModalPropsType) => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useShareExperienceHandlers();
  const isOpen = getQueryParams(SHARE_EXPERIENCE_UPLOAD_FILE_MODAL_QUERY_NAME) !== null;

  const zIndex = getZIndex(SHARE_EXPERIENCE_UPLOAD_FILE_MODAL_QUERY_NAME);

  return (
    <CustomModal isSlidingMode={true} isOpen={isOpen} zIndex={zIndex}>
      <>
        {isOpen && (
          <div className="flex flex-col">
            <FileInputManager
              ShowFileInput={false}
              fileDataHandler={fileDataHandler}
              uploadImageLoading={uploadImageLoading}
            />
          </div>
        )}
      </>
    </CustomModal>
  );
};

export default UploadFileModal;
