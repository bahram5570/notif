import Dark_Typography from '@components/ui/Dark_Typography';

import { WidgetCycleDateCardPeriodProps } from './types';

const WidgetCycleDateCardPeriod = ({
  startPeriodLable,
  endPeriodLabel,
  percentRatio,
  periodEnd,
}: WidgetCycleDateCardPeriodProps) => {
  return (
    <div
      className="absolute top-0 bottom-0 flex items-center justify-between h-full px-2 rounded-full bg-impo_Pink_500"
      style={{
        width: `${percentRatio * periodEnd}%`,
        right: '0%',
      }}
    >
      <Dark_Typography fontSize="Lable_Medium" className="text-impo_White">
        {startPeriodLable}
      </Dark_Typography>
      <Dark_Typography fontSize="Lable_Medium" className="text-impo_White">
        {endPeriodLabel}
      </Dark_Typography>
    </div>
  );
};

export default WidgetCycleDateCardPeriod;
