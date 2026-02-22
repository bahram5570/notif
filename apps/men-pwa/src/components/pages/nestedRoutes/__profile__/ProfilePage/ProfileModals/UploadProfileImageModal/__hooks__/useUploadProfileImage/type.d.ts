export type OptionsTypes = {
  onSuccess?: (v: string) => void;
  onError?: () => void;
  api?: 'profile/image' | 'pair/cover';
  method?: 'POST' | 'PUT';
};

export type FileDataHandlerTypes = (args: { e: React.ChangeEvent<HTMLInputElement>; file?: File }) => void;

export type FileResponseTypes = { fileName: string };
