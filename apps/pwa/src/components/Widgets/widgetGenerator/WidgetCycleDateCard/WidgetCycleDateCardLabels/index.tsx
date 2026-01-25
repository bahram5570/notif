import Dark_Typography from '@components/ui/Dark_Typography';

import { WidgetCycleDateCardLabelsProps } from './types';

const WidgetCycleDateCardLabels = ({ startLabel, endLabel }: WidgetCycleDateCardLabelsProps) => {
  return (
    <div className="w-full flex justify-between pt-3">
      <Dark_Typography fontSize="Lable_Small" className="text-impo_Neutral_OnBackground">
        {endLabel}
      </Dark_Typography>

      <Dark_Typography fontSize="Lable_Small" className="text-impo_Neutral_OnBackground">
        {startLabel}
      </Dark_Typography>
    </div>
  );
};

export default WidgetCycleDateCardLabels;
