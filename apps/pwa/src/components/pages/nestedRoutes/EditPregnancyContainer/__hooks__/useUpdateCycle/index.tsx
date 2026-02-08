import { toGregorianData } from '@repo/core/utils/dates';

import useUpdateCycleCard from '@hooks/__cycle__/useUpdateCycleCard';
import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';
import { useCulture } from '@repo/core/hooks/useCulture';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';
import { useRouter } from 'next/navigation';

import { SubmitHandlerTypes } from './types';

const useUpdateCycle = () => {
  const router = useRouter();
  const { culture } = useCulture();
  const { cycleCardStatusHandler } = useUpdateCycleCard();
  const { updateProfileDateByDellay } = useGetProfileData();

  const successHandler = () => {
    updateProfileDateByDellay();
    router.push('/protected/cycle');
    cycleCardStatusHandler('refetch');
  };

  const { callApi, isLoading } = usePwaApi({
    method: 'PUT',
    onSuccess: successHandler,
    api: 'info/pregnancy/edit',
  });

  const submitHandler: SubmitHandlerTypes = (v) => {
    let pregnancyDate = v.pregnancyDate;

    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        pregnancyDate = toGregorianData(v.pregnancyDate);
        break;
      case CalendarTypeEnum.Gregorian:
        pregnancyDate = v.pregnancyDate;
        break;
      default:
        pregnancyDate = toGregorianData(v.pregnancyDate);
        break;
    }

    callApi({ pregnancyDate, isDelivery: v.isDelivery });
  };

  return { submitHandler, isLoading };
};

export default useUpdateCycle;
