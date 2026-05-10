import { UploadItemType } from '../../type';

export type OptionsTypes = {
  api: string;
  onError?: () => void;
  method?: 'POST' | 'PUT';
  onSuccess?: (v: string) => void;
};

export type FileDataHandlerTypes = (args: { file: File }) => void;

export type FileResponseTypes = { valid: boolean; name: string };

export type FileUploadImageFileTypes = null | { image: string; imageType: string };

export type UseFileUploadPropsType = {
  filesHandler: (v: UploadItemType[]) => void;
};
