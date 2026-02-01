import ArrowIcon from '@assets/icons/filledArrow.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { WidgetCycleDateCardTodayProps } from './types';

const WidgetCycleDateCardToday = ({
  currentDay,
  currentDayLabel,
  percentRatio,
  isInLatePeriod,
}: WidgetCycleDateCardTodayProps) => {
  const currentDayPosition = currentDay * percentRatio;
  const textWidth = isInLatePeriod ? 96 : 'fit-content';

  return (
    <div className="relative h-[40px] w-[calc(100%_-_4px)] mx-auto">
      <div
        style={{ right: `${currentDayPosition > 100 ? 100 : currentDayPosition}%` }}
        className="absolute bottom-1 flex flex-col items-center translate-x-1/2"
      >
        <CustomTypography
          fontSize="Lable_SmallProminet"
          className="text-impo_Surface_InverseSurface"
          style={{ width: textWidth }}
        >
          {currentDayLabel}
        </CustomTypography>

        <ArrowIcon className="w-3 pt-[6px] fill-impo_Surface_InverseSurface" />
      </div>
    </div>
  );
};

export default WidgetCycleDateCardToday;
