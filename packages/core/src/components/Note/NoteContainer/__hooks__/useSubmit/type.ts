export type UseSubmitPropsType = {
  noteId: string | undefined;
};

export type NoteValueType = {
  dateTime: string;
  noteId?: string;
  reminder: boolean;
  text: string;
  title: string;
};
