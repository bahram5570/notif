import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import BiorhythmContainer from './BiorhythmContainer';
import { BiorhythmPropsType } from './type';

const Biorhythm = ({ bioRhythemWidget }: BiorhythmPropsType) => {
  return (
    <div className="w-full h-fit rounded-2xl p-4 bg-impo_Neutral_Background">
      <div className="flex justify-between items-center border-b-[1px] border-impo_Neutral_Surface pb-2 mb-2">
        <div className="flex flex-col justify-end items-end w-full">
          <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
            {bioRhythemWidget.data.title}
          </CustomTypography>
        </div>
      </div>

      <div className="flex gap-2 justify-center items-center">
        {bioRhythemWidget.data.items.map((bio, index) => {
          return <BiorhythmContainer {...bio} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Biorhythm;
