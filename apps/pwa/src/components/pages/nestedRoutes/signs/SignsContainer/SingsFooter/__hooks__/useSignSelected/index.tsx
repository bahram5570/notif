import { CalendarSignsType, CalendarWidgetEnums, InfoCalendarResponseTypes } from '@repo/core/components/calendar';
import { currentDate } from '@repo/core/utils/dates';

import useSignInteractiveBanner from '@hooks/__sign__/useSignInteractiveBanner';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { ResponseType, useSignSelectedProps } from './types';

const { gDate } = currentDate();

const useSignSelected = ({ selectedDate, singSelectedList }: useSignSelectedProps) => {
  const { interactiveBannerActionHandler } = useSignInteractiveBanner();
  const { getQuery, updateQuery } = useCustomReactQuery();

  const successHandler = (v: ResponseType) => {
    const data = getQuery<InfoCalendarResponseTypes>({ queryKey: ['infoCalendar'] });
    const currentDate = data?.days[selectedDate || gDate];

    if (currentDate) {
      const signList = currentDate.items.find((i) => i.type === CalendarWidgetEnums.Sign);
      if (signList) {
        signList.data.signs = singSelectedList;
      } else {
        const signItem: CalendarSignsType = {
          type: CalendarWidgetEnums.Sign,
          data: {
            babyChecks: [],
            bloodPressures: [],
            bloodSugers: [],
            currentWeight: -1,
            ovulationResult: null,
            signs: singSelectedList,
            weight: null,
          },
        };
        currentDate.items.push(signItem);
      }
    }
    updateQuery({ queryKey: ['infoCalendar'], payload: { ...data } });
    interactiveBannerActionHandler(v.action);
  };

  const { callApi, isLoading } = usePwaApi<ResponseType>({
    method: 'PUT',
    api: 'info/woman/sign/add',
    onSuccess: (v) => successHandler(v),
  });

  const addSingHandler = () => {
    const payload = { date: selectedDate || gDate, items: singSelectedList };
    callApi(payload);
  };

  return { addSingHandler, isLoading };
};

export default useSignSelected;
