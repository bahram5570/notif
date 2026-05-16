import { CustomImage_NEW } from '../ui/CustomImage_NEW';
import { CustomTypography } from '../ui/CustomTypography';
import { BiorhythmItemsTypes } from './types';

export const BiorhythmItems = ({ items }: BiorhythmItemsTypes) => {
  return (
    <>
      {items.map((item, index) => {
        return (
          <div className="rounded-2xl p-3 bg-impo_Neutral_Surface" key={index}>
            <div className="flex flex-col gap-2 items-end">
              <div className="flex gap-2 items-center">
                <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
                  {item.title}
                </CustomTypography>

                <CustomImage_NEW src={item.icon} width={40} height={40} />
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
