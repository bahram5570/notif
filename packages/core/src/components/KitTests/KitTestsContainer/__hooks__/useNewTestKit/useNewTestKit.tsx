import { useState } from 'react';

import { currentDate } from '../../../../../utils/dates';

import { useCustomReactQuery } from '../../../../../hooks/useCustomReactQuery';
import { useCustomToast } from '../../../../../hooks/useCustomToast';
import { usePwaApi } from '../../../../../hooks/usePwaApi';
import { KitTestModuleTypeEnums } from '../../../../../providers/WidgetActionsProvider';
import { NewTestResponseTypes, UseNewTestKitProps } from './types';

export const useNewTestKit = ({ moduleType, gregorianDate, onSuccess }: UseNewTestKitProps) => {
  const toast = useCustomToast();
  const { refetchQuery } = useCustomReactQuery();
  const [resetKey, setResetKey] = useState(Math.random());

  const successHandler = (v: NewTestResponseTypes) => {
    if (v.valid) {
      setResetKey(Math.random());
      refetchQuery({ queryKey: ['signsInfoCalendar'] });

      if (onSuccess) {
        onSuccess();
      }
    } else {
      if (moduleType === KitTestModuleTypeEnums.Ovulation) {
        toast.notifyToastHandler({ message: 'فقط یک بار در روز امکان ثبت تست تخمک‌گذاری وجود داره!' });
      }
    }
  };

  let api = '';
  switch (moduleType) {
    case KitTestModuleTypeEnums.Ovulation:
      api = 'info/woman/ovulation';
      break;
    case KitTestModuleTypeEnums.BabyCheck:
      api = 'info/woman/babycheck/add';
      break;
  }

  const { callApi, isLoading } = usePwaApi({ api, method: 'POST', onSuccess: successHandler });

  const submitHandler = (v: any) => {
    const { time } = currentDate();
    callApi({ ...v, date: `${gregorianDate} ${time}` });
  };

  return { submitHandler, isLoading, resetKey };
};
