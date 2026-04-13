export type NoteValueType = {
  noteId?: string;
  // reminder: boolean;
  title: string;
  text: string;
  dateTime: string;
};

export type OnchangeHandlerType = (v: string, name?: string) => void;
