import { useEffect, useState } from 'react';

import { CalendarWidgetEnums, InfoCalendarResponseTypes } from '@repo/core/components/calendar';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { KitTestModuleTypeEnums } from '@repo/core/providers/WidgetActionsProvider';

import { KitTestHistoryTypes, UseGetDataProps } from './types';

const useGetData = ({ gregorianDate, moduleType }: UseGetDataProps) => {
  const { getQuery } = useCustomReactQuery();
  const [kitTestHistory, setKitTestHistory] = useState<KitTestHistoryTypes>(null);

  useEffect(() => {
    const data = getQuery<InfoCalendarResponseTypes>({ queryKey: ['infoCalendar'] });

    const item = data?.days?.[gregorianDate].items.find((i) => i.type === CalendarWidgetEnums.Sign)?.data;

    if (item) {
      if (moduleType === KitTestModuleTypeEnums.Ovulation) {
        setKitTestHistory({
          data: item.ovulationResult,
          title: 'تست تخمک‌گذاری امروز',
          moduleType: KitTestModuleTypeEnums.Ovulation,
        });
      }

      if (moduleType === KitTestModuleTypeEnums.BabyCheck) {
        setKitTestHistory({
          data: item.babyChecks,
          title: 'تست‌های انجام شده در این چرخه',
          moduleType: KitTestModuleTypeEnums.BabyCheck,
        });
      }
    }
  }, []);

  return { kitTestHistory };
};

export default useGetData;
