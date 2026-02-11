import NeedToInvestigateIcon from '@assets/shared/icons/needToInvestigate.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import WidgetPeriodCycleHistoryDays from './WidgetPeriodCycleHistoryDays';
import { WidgetPeriodCycleHistoryItemsProps } from './types';

const WidgetPeriodCycleHistoryItems = ({ items, isPdfDownloading }: WidgetPeriodCycleHistoryItemsProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      {items.map((item, index) => {
        const isLastChild = items.length - 1 === index;

        return (
          <div
            className={`w-full flex flex-col items-center gap-3 py-4 border-y-[1px] border-t-transparent ${isLastChild ? 'border-b-impo_Transparent' : `border-b-impo_Neutral_Surface ${isPdfDownloading && 'dark:!border-b-impo_Neutral_Surface !border-b-impo_Neutral_OnSurface'}`} `}
            key={index}
          >
            <div className="flex items-center gap-1 ml-auto">
              {!item.normal && <NeedToInvestigateIcon className="w-5 h-auto" />}
              <CustomTypography
                fontSize="Lable_SmallProminet"
                className={`text-impo_Neutral_OnBackground ${isPdfDownloading && '!text-impo_Black'}`}
              >
                {item.title}
              </CustomTypography>
            </div>

            <WidgetPeriodCycleHistoryDays
              cycleLength={item.cycleLength}
              ovulationDay={item.ovulationDay}
              periodLength={item.periodLength}
              isPdfDownloading={isPdfDownloading}
            />

            <div className="flex items-center gap-1 ml-auto">
              <CustomTypography
                fontSize="Body_Small"
                className={`text-impo_Surface_InverseSurface ${isPdfDownloading && 'text-impo_Grey_900'}`}
              >{` - طول دوره: ${item.cycleLength} روز`}</CustomTypography>

              <CustomTypography
                fontSize="Body_Small"
                className={`text-impo_Surface_InverseSurface ${isPdfDownloading && 'text-impo_Grey_900'}`}
              >{`طول پریود: ${item.periodLength} روز`}</CustomTypography>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WidgetPeriodCycleHistoryItems;
