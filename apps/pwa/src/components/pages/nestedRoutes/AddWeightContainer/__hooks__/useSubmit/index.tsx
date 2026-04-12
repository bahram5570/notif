import { CalendarSignsType, CalendarWidgetEnums, InfoCalendarResponseTypes } from '@repo/core/components/calendar';
import { currentDate } from '@repo/core/utils/dates';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useSignDateState } from '@repo/core/hooks/useSignDateState';
import { useRouter } from 'next/navigation';

const { gDate } = currentDate();
const useSubmit = (weight: number) => {
  const router = useRouter();
  const { calendarInitailSelectedDate } = useSignDateState();
  const { getQuery, updateQuery } = useCustomReactQuery();

  const successHandler = () => {
    const data = getQuery<InfoCalendarResponseTypes>({ queryKey: ['infoCalendar'] });
    const currentDate = data?.days[calendarInitailSelectedDate || gDate];

    if (currentDate) {
      const signList = currentDate.items.find((i) => i.type === CalendarWidgetEnums.Sign);
      if (signList) {
        signList.data.weight = weight;
      } else {
        const signItem: CalendarSignsType = {
          type: CalendarWidgetEnums.Sign,
          data: {
            babyChecks: [],
            bloodPressures: [],
            bloodSugers: [],
            currentWeight: -1,
            ovulationResult: null,
            signs: [],
            weight: null,
          },
        };
        currentDate.items.push(signItem);
      }
    }
    updateQuery({ queryKey: ['infoCalendar'], payload: { ...data } });
    router.back();
  };
  const { callApi, isLoading } = usePwaApi({ api: 'info/woman/weight', method: 'POST', onSuccess: successHandler });

  const submitHandler = () => {
    const selectedDate = calendarInitailSelectedDate;
    const payload = {
      weight,
      date: selectedDate,
    };

    callApi(payload);
  };
  return { submitHandler, isLoading };
};

export default useSubmit;
