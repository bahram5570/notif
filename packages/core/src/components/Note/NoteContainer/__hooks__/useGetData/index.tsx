import { useEffect, useState } from 'react';

import { currentDate } from '@repo/core/utils/dates';

import { useCulture } from '@repo/core/hooks/useCulture';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useSignDateState } from '@repo/core/hooks/useSignDateState';
import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';
import moment from 'moment-jalaali';

import { INITAIL_NOTE_VALUE } from '../../constants';
import { OnchangeHandlerType } from '../../type';
import { ItemType, ResponsePropsType } from './type';

const { gDate } = currentDate();

export const useGetData = () => {
  const { culture } = useCulture();
  const [noteValue, setNoteValue] = useState<ItemType>(INITAIL_NOTE_VALUE);
  const { getQueryParams } = useQueryParamsHandler();
  const { calendarInitailSelectedDate } = useSignDateState();

  const noteId = getQueryParams('noteId');

  const getDisplayDate = (date: string): string => {
    let currentDate = '';
    const gregorianMoment = moment(date, 'YYYY-MM-DD');

    if (culture.calendarType === CalendarTypeEnum.Gregorian) {
      const gregorianDate = gregorianMoment.format('YYYY-MM-DD');
      currentDate = gregorianDate;
    }
    if (culture.calendarType === CalendarTypeEnum.Jalali) {
      const jalaaliMoment = gregorianMoment.format('jYYYY/jMM/jDD');
      currentDate = jalaaliMoment;
    }

    return currentDate;
  };

  const successHandler = (v: ResponsePropsType) => {
    const noteList = v.items;
    const hasNoteListData = noteList.length > 0;
    if (hasNoteListData) {
      const findCurrentNote = noteList.find((note) => note.noteId === noteId);

      if (findCurrentNote) {
        const noteValue = {
          ...findCurrentNote,
          time: getDisplayDate(findCurrentNote.time),
        };
        setNoteValue(noteValue);
      }
    }
  };

  const { isLoading } = usePwaApi<ResponsePropsType>({
    api: 'date/note',
    method: 'GET',
    queryKey: ['currentNote'],
    onSuccess: successHandler,
  });

  const onChangeHandler: OnchangeHandlerType = (v, name) => {
    if (name) {
      setNoteValue({ ...noteValue, [name]: v });
    }
  };

  useEffect(() => {
    const selectedDate = calendarInitailSelectedDate;

    setNoteValue({ ...noteValue, time: selectedDate ? getDisplayDate(selectedDate) : getDisplayDate(gDate) });
  }, []);

  return { noteValue, isLoading, onChangeHandler };
};
