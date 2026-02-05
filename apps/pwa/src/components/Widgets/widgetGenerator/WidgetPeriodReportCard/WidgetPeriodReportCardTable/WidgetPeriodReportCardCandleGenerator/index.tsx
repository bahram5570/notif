import { useMemo } from 'react';

import { percentFinder } from '../__utils__';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { toJalaliData } from '@repo/core/utils/dates';

import useCulture from '@hooks/useCulture';
import { CalendarTypeEnum } from '@repo/core/constants/date.constants';

import { WidgetPeriodReportCardCandleGeneratorProps } from './types';

const WidgetPeriodReportCardCandleGenerator = ({
  periodLength,
  cycleLength,
  start,
  min,
  max,
  isPdfDownloading,
}: WidgetPeriodReportCardCandleGeneratorProps) => {
  const { culture } = useCulture();

  const dateScript = useMemo(() => {
    let separatedDate: string[] = [];

    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        separatedDate = toJalaliData(start).split('/');
        break;
      case CalendarTypeEnum.Gregorian:
        separatedDate = start.slice(0, 10).split('-');
        break;
      default:
        separatedDate = toJalaliData(start).split('/');
        break;
    }

    return `${Number(separatedDate[1])}/${Number(separatedDate[2])}`;
  }, [culture.calendarType, start]);

  return (
    <div className="relative w-4 h-full flex items-end justify-center pointer-events-none z-0">
      <div
        className={`absolute left-0 right-0 bottom-0 rounded-3xl flex justify-center dark:bg-impo_Neutral_Surface bg-impo_Surface_OutlineVariant ${isPdfDownloading && '!bg-impo_Surface_OutlineVariant'}`}
        style={{ height: percentFinder({ min, max, value: cycleLength }) }}
      >
        <CustomTypography
          fontSize="Lable_SmallProminet"
          className="-translate-y-4 scale-90 text-impo_Surface_InverseSurface"
        >
          {cycleLength.toString()}
        </CustomTypography>
      </div>

      <div
        className="absolute left-0 right-0 bottom-0 p-[2px]"
        style={{
          height: percentFinder({ min, max, value: periodLength }),
        }}
      >
        <div className="h-full w-full flex items-end justify-center rounded-3xl bg-impo_Primary_Primary">
          {periodLength >= 5 && (
            <CustomTypography fontSize="Lable_Small" className="scale-90 text-impo_Primary_OnPrimary">
              {periodLength.toString()}
            </CustomTypography>
          )}
        </div>
      </div>

      <CustomTypography fontSize="Body_Small" className="translate-y-7 text-impo_Surface_Outline">
        {dateScript}
      </CustomTypography>
    </div>
  );
};

export default WidgetPeriodReportCardCandleGenerator;
