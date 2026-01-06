import NeedToInvestigateIcon from '@assets/icons/needToInvestigate.svg';

import Dark_Typography from '@components/ui/Dark_Typography';

import WidgetPeriodCycleHistoryDays from './WidgetPeriodCycleHistoryDays';
import { WidgetPeriodCycleHistoryItemsProps } from './types';

const WidgetPeriodCycleHistoryItems = ({ items, isPdfDownloading }: WidgetPeriodCycleHistoryItemsProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      {items.map((item, index) => {
        const isLastChild = items.length - 1 === index;

        return (
          <div
            className={`w-full flex flex-col items-center gap-3 py-4 border-y-[1px] border-t-transparent ${isLastChild ? 'border-b-impo_Transparent' : 'border-b-impo_Neutral_Surface'}`}
            key={index}
          >
            <div className="flex items-center gap-1 ml-auto">
              {!item.normal && <NeedToInvestigateIcon className="w-5 h-auto" />}
              <Dark_Typography fontSize="Lable_SmallProminet" className="text-impo_Neutral_OnBackground">
                {item.title}
              </Dark_Typography>
            </div>

            <WidgetPeriodCycleHistoryDays
              cycleLength={item.cycleLength}
              ovulationDay={item.ovulationDay}
              periodLength={item.periodLength}
              isPdfDownloading={isPdfDownloading}
            />

            <div className="flex items-center gap-1 ml-auto">
              <Dark_Typography
                fontSize="Body_Small"
                className="text-impo_Surface_InverseSurface"
              >{` - طول دوره: ${item.cycleLength} روز`}</Dark_Typography>

              <Dark_Typography
                fontSize="Body_Small"
                className="text-impo_Surface_InverseSurface"
              >{`طول پریود: ${item.periodLength} روز`}</Dark_Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WidgetPeriodCycleHistoryItems;
