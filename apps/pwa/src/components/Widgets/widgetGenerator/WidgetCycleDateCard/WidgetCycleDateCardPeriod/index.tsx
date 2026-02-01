import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

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
      <CustomTypography fontSize="Lable_Medium" className="text-impo_White">
        {startPeriodLable}
      </CustomTypography>
      <CustomTypography fontSize="Lable_Medium" className="text-impo_White">
        {endPeriodLabel}
      </CustomTypography>
    </div>
  );
};

export default WidgetCycleDateCardPeriod;
