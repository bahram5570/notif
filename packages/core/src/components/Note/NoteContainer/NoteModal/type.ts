import { NoteInputGeneratorPropsType } from '../NoteInputGenerator/type';

export type NoteModalPropsType = Pick<NoteInputGeneratorPropsType, 'onChangeHandler'> & {
  time: string;
};

export type CalendarModalPropsType = Pick<NoteModalPropsType, 'onChangeHandler'> & {
  dateTime: string;
};
