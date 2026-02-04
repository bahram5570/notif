import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

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
                <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
                  {item.title}
                </CustomTypography>

                <CustomImage src={iconUrl} className="w-10 h-10" />
              </div>
              <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
                {item.description}
              </CustomTypography>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BiorhythemItems;
