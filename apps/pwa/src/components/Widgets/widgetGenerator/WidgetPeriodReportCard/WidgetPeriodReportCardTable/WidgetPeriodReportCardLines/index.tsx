import { useEffect, useState } from 'react';

import { percentFinder } from '../__utils__';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { WidgetPeriodReportCardLinesProps } from './types';

const WidgetPeriodReportCardLines = ({
  rangeExtraSpace,
  numbersWidth,
  rangesHeigth,
  periodLength,
  cycleLength,
  min,
  max,
  isPdfDownloading,
}: WidgetPeriodReportCardLinesProps) => {
  const [rangeList, setRangeList] = useState<number[]>([]);

  useEffect(() => {
    const step = 10;
    const list: number[] = [];

    for (let i = min; i < max; i = i + step) {
      list.push(i);
    }

    list.push(max);
    setRangeList(list);
  }, []);

  return (
    <>
      {/* // # Range numbers */}
      <div
        className="relative pointer-events-none"
        style={{ height: rangesHeigth, width: numbersWidth, marginTop: rangeExtraSpace }}
      >
        {rangeList.map((range) => {
          const plus = range === max ? '+' : '';
          const result = `${range.toString()}${plus}`;

          return (
            <CustomTypography
              key={range}
              style={{ bottom: percentFinder({ min, max, value: range }) }}
              fontSize="Body_Small"
              className={`absolute right-0 w-full translate-y-1/2 text-impo_Surface_Outline text-center ${isPdfDownloading && 'dark:!text-impo_Surface_OutlineVariant'}`}
            >
              {result}
            </CustomTypography>
          );
        })}
      </div>

      {/* // # 'cycleLength' dashed line */}
      <div
        className="absolute right-0 flex items-end overflow-hidden pointer-events-none z-10"
        style={{ height: rangesHeigth, left: numbersWidth, top: rangeExtraSpace }}
      >
        <div
          className="w-full h-1 border-t-2 border-dashed scale-x-[3] border-impo_Pink_200"
          style={{ height: percentFinder({ min, max, value: cycleLength }) }}
        />
      </div>

      {/* // # 'periodLength' dashed line */}
      <div
        className="absolute right-0 flex items-end overflow-hidden pointer-events-none z-10"
        style={{ height: rangesHeigth, left: numbersWidth, top: rangeExtraSpace }}
      >
        <div
          className="w-full h-1 border-t-2 border-dashed scale-x-[3] border-impo_Pink_400"
          style={{ height: percentFinder({ min, max, value: periodLength }) }}
        />
      </div>

      {/* // # X axis */}
      <div
        style={{ top: rangesHeigth + rangeExtraSpace, left: numbersWidth }}
        className={`absolute right-0 h-[1px] pointer-events-none bg-impo_Surface_SurfaceVariant ${isPdfDownloading && 'dark:!bg-impo_Grey_50'}`}
      />

      {/* // # Y axis */}
      <div
        style={{
          height: rangesHeigth + rangeExtraSpace,
          top: `-${rangeExtraSpace - rangeExtraSpace}px`,
          left: numbersWidth,
        }}
        className={`absolute w-[1px] pointer-events-none  bg-impo_Surface_SurfaceVariant ${isPdfDownloading && 'dark:!bg-impo_Grey_50'}`}
      />

      {/* // # X axis script */}
      <div
        className={`absolute left-0 flex flex-col items-center pt-2 pointer-events-none z-20 bg-impo_Neutral_Background ${isPdfDownloading && '!bg-impo_White'}`}
        style={{ top: rangesHeigth + rangeExtraSpace + 1 }}
      >
        <CustomTypography
          fontSize="Lable_Small"
          className={`text-impo_Neutral_OnSurface ${isPdfDownloading && '!text-impo_Black'}`}
        >
          تاریخ
        </CustomTypography>
        <CustomTypography
          fontSize="Lable_Small"
          className={`text-impo_Neutral_OnSurface ${isPdfDownloading && '!text-impo_Black'}`}
        >
          شروع دوره
        </CustomTypography>
      </div>
    </>
  );
};

export default WidgetPeriodReportCardLines;
