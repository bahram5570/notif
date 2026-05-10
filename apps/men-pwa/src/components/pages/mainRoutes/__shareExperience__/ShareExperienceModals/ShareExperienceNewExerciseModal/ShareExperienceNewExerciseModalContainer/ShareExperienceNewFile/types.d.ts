import { FileUploadImageFileTypes } from '@hooks/useFileUpload/types';

export interface ShareExperienceNewFileProps {
  imageFile: FileUploadImageFileTypes;
  removeFileHandler: () => void;
  uploadImageLoading: boolean;
  onChangeBtnTop?: () => void;
}
