import { toGregorianData } from '@repo/core/utils/dates';

import { APP_VERSION } from '@constants/app.constants';
import useCulture from '@hooks/useCulture';
import { CalendarTypeEnum } from '@repo/core/constants/date.constants';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRouter } from 'next/navigation';

import { ItemType } from '../useGetData/type';
import { UseSubmitPropsType } from './type';

const useSubmit = ({ noteId }: UseSubmitPropsType) => {
  const router = useRouter();
  const { culture } = useCulture();

  const isEditMode = noteId ? true : false;

  const successHandler = () => {
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

    callApi(payload);
  };
  return { submitHandler, isLoading };
};

export default useSubmit;
