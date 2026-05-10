import { useState } from 'react';

import { toGregorianData } from '../../../../../utils/dates';

import { useRouter } from 'next/navigation';

import { APP_VERSION } from '../../../../../constants/app.constants';
import { useCulture } from '../../../../../hooks/useCulture';
import { usePwaApi } from '../../../../../hooks/usePwaApi';
import { CalendarTypeEnum } from '../../../../../providers/CultureProvider';
import { ItemType } from '../useGetData/type';
import useUpdateNoteList from '../useUpdateNoteList';
import { NoteValueType, UseSubmitPropsType } from './type';

export const useSubmit = ({ noteId }: UseSubmitPropsType) => {
  const router = useRouter();
  const { culture } = useCulture();
  const { updateNoteList } = useUpdateNoteList();
  const [noteValue, setNotValue] = useState<NoteValueType>();

  const isEditMode = noteId ? true : false;

  const successHandler = () => {
    if (noteValue) {
      updateNoteList({ ...noteValue });
    }

    if (isEditMode) {
      router.push('/protected/calendar');
    } else {
      router.back();
    }
  };

  const method = isEditMode ? 'POST' : 'PUT';

  const { callApi, isLoading } = usePwaApi({
    api: `date/note?AppVersion=${APP_VERSION || ''}`,
    method: method,
    onSuccess: successHandler,
  });

  const submitHandler = ({ time, text, title, noteId }: ItemType) => {
    const payload = {
      dateTime: culture.calendarType === CalendarTypeEnum.Jalali ? toGregorianData(time) : time,
      ...(noteId ? { noteId } : {}),
      reminder: false,
      text,
      title,
    };
    setNotValue(payload);
    callApi(payload);
  };
  return { submitHandler, isLoading };
};
