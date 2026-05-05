export type OptionsTypes = {
  onSuccess?: (v: string) => void;
  onError?: () => void;
  api?: 'profile/image' | 'pair/cover' | 'file/private/' | 'doctor/file' | 'manshareeexperience/v3/file';
  method?: 'POST' | 'PUT';
};

export type FileDataHandlerTypes = (args: { e: React.ChangeEvent<HTMLInputElement>; file?: File }) => void;

export type FileResponseTypes = string | { fileName: string } | { name: string; valid: boolean };
export type FileUploadImageFileTypes = null | { image: string; imageType: string };
