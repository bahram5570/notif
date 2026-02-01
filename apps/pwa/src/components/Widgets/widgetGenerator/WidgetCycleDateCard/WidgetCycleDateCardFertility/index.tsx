import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { WidgetCycleDateCardFertilityProps } from './types';

const WidgetCycleDateCardFertility = (props: WidgetCycleDateCardFertilityProps) => {
  if (!props.hasFertility) {
    return <></>;
  }

  return (
    <div
      className="absolute top-0 bottom-0 flex items-center justify-between h-full px-2 rounded-full bg-impo_Cycle_Ovulation_Eyebrow"
      style={{
        right: `${props.fertilityStart * props.percentRatio}%`,
        width: `${(props.fertilityEnd - props.fertilityStart) * props.percentRatio}%`,
      }}
    >
      <CustomTypography fontSize="Lable_Medium" className="text-impo_White">
        {props.startFertility}
      </CustomTypography>

      {props.hasOvulation && (
        <div
          className="absolute top-[2px] max-w-[20px] max-h-[20px] min-w-[20px] min-h-[20px] flex items-center justify-center border-[1px] rounded-full  border-white/40"
          style={{
            // borderColor: `${colors.Neutral_Background}99`,
            right: `${props.ovulationDay * props.percentRatio}%`,
          }}
        >
          <CustomTypography fontSize="Lable_Medium" className="text-impo_White !h-[19px] overflow-hidden">
            {props.ovulationLabel}
          </CustomTypography>
        </div>
      )}

      <CustomTypography fontSize="Lable_Medium" className="text-impo_White">
        {props.endFertility}
      </CustomTypography>
    </div>
  );
};

export default WidgetCycleDateCardFertility;
