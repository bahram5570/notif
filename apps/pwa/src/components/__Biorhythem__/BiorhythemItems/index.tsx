import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import { BiorhythmItemsPropsType } from './type';

const BiorhythemItems = ({ items }: BiorhythmItemsPropsType) => {
  return (
    <>
      {items.map((item, index) => {
        const iconUrl = item.icon;
        return (
          <div className="rounded-2xl p-3 bg-impo_Neutral_Surface" key={index}>
            <div className="flex flex-col gap-2 items-end">
              <div className="flex gap-2 items-center">
                <Dark_Typography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
                  {item.title}
                </Dark_Typography>

                <CustomImage src={iconUrl} className="w-10 h-10" />
              </div>
              <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
                {item.description}
              </Dark_Typography>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BiorhythemItems;
