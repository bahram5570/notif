export type UploadItem = {
  url: string;
  loading: boolean;
  error: boolean;
};

export type OptionsTypes = {
  api: string;
  onError?: () => void;
  method?: 'POST' | 'PUT';
  onSuccess?: (v: string) => void;
};

export type FileDataHandlerTypes = (args: { e: React.ChangeEvent<HTMLInputElement>; file?: File }) => void;

export type FileResponseTypes = { name: string };

export type FileUploadImageFileTypes = null | { image: string; imageType: string };
