type OnchangeHandlerType = (v: string, name: string) => void;

export type TextareaInputPropsType = {
  value: string;
  onChangeHandler: OnchangeHandlerType;
  placeholder: string;
  rows: number;
  name: string;
};

export type InputValueType = {
  text: string;
  title: string;
  time: string;
  fileName: string;
};

export type CreateMemoryFormPropsType = {
  inputValue: InputValueType;
  onChangeHandler: OnchangeHandlerType;
  isMan?: boolean;
};

export type UploadInputPropsType = Pick<CreateMemoryFormPropsType, 'isMan'> & {
  onChangeHandler: OnchangeHandlerType;
  uploadImageLoading: boolean;
  fileName: string;
};
