import { SHARE_EXPERIENCE_UPLOAD_FILE_MODAL_QUERY_NAME } from '@repo/core/components/ShareExperience';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { useOverlayIndex } from '@repo/core/hooks/useOverlayIndex';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import UploadFileModalContainer from './UploadFileModalContain';
import { UploadFileModalPropsType } from './type';

const UploadFileModal = ({ fileDataHandler, uploadImageLoading }: UploadFileModalPropsType) => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useOverlayIndex();
  const isOpen = getQueryParams(SHARE_EXPERIENCE_UPLOAD_FILE_MODAL_QUERY_NAME) !== null;

  const zIndex = getZIndex(SHARE_EXPERIENCE_UPLOAD_FILE_MODAL_QUERY_NAME);

  return (
    <CustomModal isSlidingMode={true} isOpen={isOpen} zIndex={zIndex}>
      <>
        {isOpen && (
          <UploadFileModalContainer fileDataHandler={fileDataHandler} uploadImageLoading={uploadImageLoading} />
        )}
      </>
    </CustomModal>
  );
};

export default UploadFileModal;
