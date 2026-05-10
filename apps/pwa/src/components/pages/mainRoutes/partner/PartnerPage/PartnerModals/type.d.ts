import { FileDataHandlerTypes } from '@repo/core/hooks/useFileUpload';

export type ModalPropsType = {
  onCloseModal: () => void;
};

export type InputsPropsType = {
  fileDataHandler: FileDataHandlerTypes;
  deleteHandler: () => void;
  canDeleteImage: string | null;
  uploadImageLoading: boolean;
};
