import BiorhythemItems from '@components/__Biorhythem__/BiorhythemItems';
import Dark_Typography from '@components/ui/Dark_Typography';

import { BiorhythmPropsType } from './type';

const WidgetsBiorhythm = ({ data }: BiorhythmPropsType) => {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-xl  items-end">
      <div className="flex justify-between items-end ">
        <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          {data.title}
        </Dark_Typography>
      </div>
      <div className="rounded-2xl p-4 flex flex-col gap-3 bg-impo_Neutral_Background">
        <BiorhythemItems {...data} />
      </div>
    </div>
  );
};

export default WidgetsBiorhythm;
