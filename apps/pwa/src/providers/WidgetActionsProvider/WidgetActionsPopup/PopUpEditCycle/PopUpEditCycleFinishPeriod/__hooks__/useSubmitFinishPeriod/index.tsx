import { useMemo } from 'react';

import { toGregorianData } from '@repo/core/utils/dates';

import useCulture from '@hooks/useCulture';
import { CalendarTypeEnum } from '@repo/core/constants/date.constants';
import { useCustomToast } from '@repo/core/hooks/useCustomToast';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useRouter } from 'next/navigation';

import { SuccessHandlerTypes } from './types';

const useSubmitFinishPeriod = (endTime: string) => {
  const router = useRouter();
  const { culture } = useCulture();
  const toast = useCustomToast();

  const updatedEndTime = useMemo(() => {
    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        return toGregorianData(endTime);
      case CalendarTypeEnum.Gregorian:
        return endTime;
      default:
        return toGregorianData(endTime);
    }
  }, [culture.calendarType, endTime]);

  const successHandler: SuccessHandlerTypes = (v) => {
    if (v.valid) {
      router.back();
    } else {
      toast.notifyToastHandler({ message: v.message });
    }
  };

  const { callApi, isLoading } = usePwaApi({
    method: 'GET',
    fetchOnMount: false,
    queryKey: ['endTime'],
    onSuccess: successHandler,
    api: `info/edit/endperiod/${updatedEndTime}`,
  });

  return { callApi, isLoading };
};

export default useSubmitFinishPeriod;
