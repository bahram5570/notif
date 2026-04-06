import { NoteType } from '../../../calendar/type';
import { CalendarInitialSelectedDateType } from '../../types';

export type SelectedDayNoteListPropsList = {
  noteList: NoteType[];
  date: CalendarInitialSelectedDateType;
};

export type CreateNewNoteBtnPropsType = Pick<SelectedDayNoteListPropsList, 'date'>;
