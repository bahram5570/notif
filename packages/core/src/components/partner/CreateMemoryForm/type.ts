import { OnchangeHandlerType } from '../../ui/CustomTextareaInput/type';

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
