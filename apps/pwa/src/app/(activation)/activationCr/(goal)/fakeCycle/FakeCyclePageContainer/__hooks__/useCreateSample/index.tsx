import { currentDate, toGregorianData } from '@repo/core/utils/dates';

import { SAMPLE_CYCLE_STORAGE_NAME } from '@providers/__activation__/ActivationCrProvider/__constants__/activationCrContants';
import { useCulture } from '@repo/core/hooks/useCulture';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';

import { CreateSampleResponse, UseCreateSampleProps } from './types';

const { gDate } = currentDate();

const useCreateSample = ({ payload }: UseCreateSampleProps) => {
  const { culture } = useCulture();

  const onSuccessHandler = (v: CreateSampleResponse) => {
    sessionStorage.setItem(SAMPLE_CYCLE_STORAGE_NAME, JSON.stringify(v));
  };

  const {
    isLoading: createCycleLoading,
    error: createCycleError,
    callApi,
    data,
  } = usePwaApi<CreateSampleResponse>({
    method: 'POST',
    api: 'widgets/sample',
    onSuccess: onSuccessHandler,
  });

  const callCreateSampleApi = () => {
    let pregnancyDate = payload.pregnancyDate.trim();

    if (culture.calendarType === CalendarTypeEnum.Gregorian) {
      pregnancyDate = pregnancyDate || gDate;
    }

    if (culture.calendarType === CalendarTypeEnum.Jalali) {
      pregnancyDate = pregnancyDate === '' ? gDate : toGregorianData(pregnancyDate);
    }

    const samplePaylod = {
      pregnancyDate,
      status: payload.status,
      periodStatus: payload.periodStatus,
      isDelivery: payload.isDeliveryDate,
      startPeriodDate: payload.startPeriodDate,
      totalCycleLength: payload.totalCycleLength,
    };

    callApi(samplePaylod);
  };

  const createCycleSuccess = !createCycleLoading && !createCycleError && typeof data !== 'undefined';

  return { createCycleLoading, callCreateSampleApi, createCycleError, createCycleSuccess };
};

export default useCreateSample;
