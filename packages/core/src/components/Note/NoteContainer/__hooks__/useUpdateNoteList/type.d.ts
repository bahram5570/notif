import { NoteValueType } from '../useSubmit/type';

export type UseUpdateNoteListPropsType = Pick<
  NoteValueType,
  'dateTime' | 'noteId' | 'reminder' | 'text' | 'title'
> & {};
