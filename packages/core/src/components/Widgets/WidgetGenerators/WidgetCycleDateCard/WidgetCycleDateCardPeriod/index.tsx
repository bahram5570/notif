import { CustomTypography } from '../../../../ui/CustomTypography';
import { WidgetCycleDateCardPeriodProps } from './types';

const WidgetCycleDateCardPeriod = ({
  startPeriodLable,
  endPeriodLabel,
  percentRatio,
  periodEnd,
}: WidgetCycleDateCardPeriodProps) => {
  return (
    <div
      style={{ width: `${percentRatio * periodEnd}%`, right: '0%' }}
      className="absolute top-0 bottom-0 flex items-center justify-between h-full px-2 rounded-full bg-impo_Pink_500"
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
