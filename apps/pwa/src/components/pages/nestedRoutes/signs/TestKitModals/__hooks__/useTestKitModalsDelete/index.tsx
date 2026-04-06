import { CalendarWidgetEnums, InfoCalendarResponseTypes } from '@repo/core/components/calendar';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { KitTestModuleTypeEnums } from '@repo/core/providers/WidgetActionsProvider';

const useTestKitModalsDelete = () => {
  const { getQuery, updateQuery } = useCustomReactQuery();

  const deleteHandler = (v: { moduleType: KitTestModuleTypeEnums; index: number; createTime: string }) => {
    const data = getQuery<InfoCalendarResponseTypes>({ queryKey: ['signsInfoCalendar'] });

    if (data) {
      const date = v.createTime.slice(0, 10);
      const items = data.days[date].items;
      const item = items.find((item) => item.type === CalendarWidgetEnums.Sign);

      if (item) {
        if (v.moduleType === KitTestModuleTypeEnums.Ovulation) {
          item.data.ovulationResult = null;
        }

        if (v.moduleType === KitTestModuleTypeEnums.BabyCheck) {
          item.data.babyChecks = item.data.babyChecks.filter((_, index) => index !== v.index);
        }

        updateQuery({ queryKey: ['signsInfoCalendar'], payload: data });
      }
    }
  };

  return { deleteHandler };
};

export default useTestKitModalsDelete;
