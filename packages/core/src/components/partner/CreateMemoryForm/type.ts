import { OnchangeHandlerTypeHasName } from '../../ui/CustomTextareaInput';

export type InputValueType = {
  text: string;
  title: string;
  time: string;
  fileName: string;
};

export type CreateMemoryFormPropsType = {
  inputValue: InputValueType;
  onChangeHandler: OnchangeHandlerTypeHasName;
};

export type UploadInputPropsType = {
  onChangeHandler: OnchangeHandlerTypeHasName;
  uploadImageLoading: boolean;
  fileName: string;
};
