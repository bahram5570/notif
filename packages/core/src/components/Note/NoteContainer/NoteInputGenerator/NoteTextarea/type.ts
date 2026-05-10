import { OnchangeHandlerType } from '../../type';
import { InputType } from '../type';

export type NoteTextareaPropsType = InputType & {
  value: string | undefined;
  onchangeHandler: OnchangeHandlerType;
};
