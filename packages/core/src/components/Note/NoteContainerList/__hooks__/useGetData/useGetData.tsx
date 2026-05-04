import { useState } from 'react';

import { currentDate, toJalaliData } from '../../../../../utils/dates';

import moment from 'moment-jalaali';

import { usePwaApi } from '../../../../../hooks/usePwaApi';
import { useSignDateState } from '../../../../../hooks/useSignDateState';
import { NoteType } from '../../../../calendar';
import { ResponsePropsType } from './type';

const { gDate } = currentDate();

export const useGetData = () => {
  const [currentNoteList, setCurrentNoteList] = useState<NoteType[]>();
  const { calendarInitailSelectedDate } = useSignDateState();
  const selectedDate = calendarInitailSelectedDate;

  const currentDate = selectedDate ? moment(selectedDate, 'YYYY-MM-DD').format('YYYY-MM-DD HH:mm') : gDate;

  const successHandler = (v: ResponsePropsType) => {
    const noteList = v.items;
    const hasNoteListData = noteList.length > 0;

    if (hasNoteListData) {
      const findCurrentNote = noteList.filter((note) => note.time === currentDate);
      const noteListValue = findCurrentNote.map((note) => ({
        ...note,
        dateTime: toJalaliData(note.time),
        files: note.fileName,
      }));
      setCurrentNoteList(noteListValue);
    }
  };

  const { isLoading } = usePwaApi<ResponsePropsType>({
    api: 'date/note',
    method: 'GET',
    queryKey: ['NoteList'],
    onSuccess: successHandler,
  });

  return { isLoading, currentNoteList };
};
