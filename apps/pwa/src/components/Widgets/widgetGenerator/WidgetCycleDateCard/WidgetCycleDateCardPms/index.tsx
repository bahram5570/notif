import Dark_Typography from '@components/ui/Dark_Typography';

import { WidgetCycleDateCardPmsProps } from './types';

const WidgetCycleDateCardPms = (props: WidgetCycleDateCardPmsProps) => {
  const right = props.isInLatePeriod ? props.pmsStart * props.percentRatio - 4 : props.pmsStart * props.percentRatio;

  if (!props.hasPms) {
    return <></>;
  }

  return (
    <div
      className="absolute top-0 bottom-0 flex items-center justify-between h-full px-2 rounded-full bg-impo_Cycle_Pms_Eyebrow"
      style={{
        right: `${right}%`,

        width: `${(props.pmsEnd - props.pmsStart) * props.percentRatio}%`,
      }}
    >
      <Dark_Typography fontSize="Lable_Medium" className="text-impo_White">
        {props.startPmsLabel}
      </Dark_Typography>
      <Dark_Typography fontSize="Lable_Medium" className="text-impo_White">
        {props.endPmsLabel}
      </Dark_Typography>
    </div>
  );
};

export default WidgetCycleDateCardPms;
