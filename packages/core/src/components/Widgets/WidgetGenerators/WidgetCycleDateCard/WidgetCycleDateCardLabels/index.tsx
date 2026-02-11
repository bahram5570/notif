import { CustomTypography } from '../../../../ui/CustomTypography';
import { WidgetCycleDateCardLabelsProps } from './types';

const WidgetCycleDateCardLabels = ({ startLabel, endLabel }: WidgetCycleDateCardLabelsProps) => {
  return (
    <div className="w-full flex justify-between pt-3">
      <CustomTypography fontSize="Lable_Small" className="text-impo_Neutral_OnBackground">
        {endLabel}
      </CustomTypography>

      <CustomTypography fontSize="Lable_Small" className="text-impo_Neutral_OnBackground">
        {startLabel}
      </CustomTypography>
    </div>
  );
};

export default WidgetCycleDateCardLabels;
