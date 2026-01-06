import { useEffect, useState } from 'react';

import CustomSlider from '@components/ui/CustomSlider';

import { WidgetPeriodCycleHistoryDaysProps } from './types';

const WidgetPeriodCycleHistoryDays = ({
  isPdfDownloading,
  periodLength,
  ovulationDay,
  cycleLength,
}: WidgetPeriodCycleHistoryDaysProps) => {
  const [daysList, setDaysList] = useState<string[]>([]);

  useEffect(() => {
    const list: string[] = [];

    for (let i = 1; i <= cycleLength; i++) {
      let color = '';

      if (i === ovulationDay) {
        color = 'bg-impo_Calendar_Fertility_Ovulation';
      } else if (i <= periodLength) {
        color = 'bg-impo_Primary_Primary';
      } else {
        color = 'bg-impo_Neutral_Surface';
      }

      list.push(color);
    }

    setDaysList(list);
  }, []);

  return (
    <CustomSlider gap={isPdfDownloading ? 8 : 4} sidePadding={16} className="min-w-[calc(100%_+_32px)] !pb-0">
      {daysList.map((backgroundColor, index) => (
        <div className={`w-[6px] min-w-[6px] h-[16px] rounded ${backgroundColor}`} key={index} />
      ))}
    </CustomSlider>
  );
};

export default WidgetPeriodCycleHistoryDays;
