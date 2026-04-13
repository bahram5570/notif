import { ItemType } from '../__hooks__/useGetData/type';
import { OnchangeHandlerType } from '../type';

export type InputType = {
  label: string;
  name: keyof ItemType;
};

export type FormDataType = {
  textareaInput: InputType[];
};

export type NoteInputGeneratorPropsType = {
  onChangeHandler: OnchangeHandlerType;
  noteValue: ItemType;
};
