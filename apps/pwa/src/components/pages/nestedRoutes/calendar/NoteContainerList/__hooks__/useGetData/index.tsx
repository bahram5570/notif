import { useState } from 'react';

import { NoteType } from '@repo/core/components/calendar';
import { currentDate, toJalaliData } from '@repo/core/utils/dates';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useSignDateState } from '@repo/core/hooks/useSignDateState';
import moment from 'moment-jalaali';

import { ResponsePropsType } from './type';

const { gDate } = currentDate();

const useGetData = () => {
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

export default useGetData;
