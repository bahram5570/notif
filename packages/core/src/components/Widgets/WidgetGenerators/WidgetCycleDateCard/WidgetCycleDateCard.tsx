import { WidgetCardContainer } from '../../WidgetCardContainer';
import WidgetCycleDateCardFertility from './WidgetCycleDateCardFertility';
import WidgetCycleDateCardLabels from './WidgetCycleDateCardLabels';
import WidgetCycleDateCardLatePeriod from './WidgetCycleDateCardLatePeriod';
import WidgetCycleDateCardPeriod from './WidgetCycleDateCardPeriod';
import WidgetCycleDateCardPms from './WidgetCycleDateCardPms';
import WidgetCycleDateCardToday from './WidgetCycleDateCardToday';
import { WidgetCycleDateCardProps } from './types';

export const WidgetCycleDateCard = ({ data }: WidgetCycleDateCardProps) => {
  const percentRatio = 100 / data.cycleLength;

  return (
    <WidgetCardContainer title={data.title}>
      <>
        <WidgetCycleDateCardToday
          currentDayLabel={data.currentDayLabel}
          isInLatePeriod={data.isInLatePeriod}
          currentDay={data.currentDay}
          percentRatio={percentRatio}
        />

        <div className="w-full h-[28px] p-[2px] rounded-full bg-impo_Neutral_Surface ">
          <div className="relative w-full h-full flex items-center" style={{ direction: 'rtl' }}>
            <WidgetCycleDateCardPeriod
              startPeriodLable={data.startPeriodLable}
              endPeriodLabel={data.endPeriodLabel}
              percentRatio={percentRatio}
              periodEnd={data.periodEnd}
            />

            <WidgetCycleDateCardFertility
              startFertility={data.startFertility}
              fertilityStart={data.fertilityStart}
              ovulationLabel={data.ovulationLabel}
              endFertility={data.endFertility}
              fertilityEnd={data.fertilityEnd}
              hasFertility={data.hasFertility}
              ovulationDay={data.ovulationDay}
              hasOvulation={data.hasOvulation}
              percentRatio={percentRatio}
            />

            <WidgetCycleDateCardPms
              isInLatePeriod={data.isInLatePeriod}
              startPmsLabel={data.startPmsLabel}
              endPmsLabel={data.endPmsLabel}
              currentDay={data.currentDay}
              percentRatio={percentRatio}
              pmsStart={data.pmsStart}
              pmsEnd={data.pmsEnd}
              hasPms={data.hasPms}
            />

            {data.isInLatePeriod && <WidgetCycleDateCardLatePeriod />}
          </div>
        </div>

        <WidgetCycleDateCardLabels startLabel={data.startLabel} endLabel={data.endLabel} />
      </>
    </WidgetCardContainer>
  );
};
