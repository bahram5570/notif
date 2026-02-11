import BiorhythmItems from '../../../BiorhythmItems/BiorhythmItems';
import { CustomTypography } from '../../../ui/CustomTypography';
import { BiorhythmPropsType } from './types';

export const WidgetsBiorhythm = ({ data }: BiorhythmPropsType) => {
  return (
    <div className="flex flex-col gap-4 py-4 rounded-xl  items-end">
      <div className="flex justify-between items-end ">
        <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          {data.title}
        </CustomTypography>
      </div>
      
      <div className="rounded-2xl p-4 flex flex-col gap-3 bg-impo_Neutral_Background">
        <BiorhythmItems {...data} />
      </div>
    </div>
  );
};
