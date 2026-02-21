import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { ValuesBigScreenTypes } from './types';

const ValuesBigScreen = ({ list }: ValuesBigScreenTypes) => {
  return (
    <div className="w-full grid grid-cols-[repeat(2,minmax(0,260px))] lg:grid-cols-[repeat(3,minmax(0,260px))] gap-x-16 gap-y-9 py-6 justify-center bg-impo_Neutral_Surface">
      {list.map((item, index) => (
        <div className="w-full flex items-start gap-2" key={index}>
          <div className="w-14 h-14 min-w-14 min-h-14">
            <div className="rounded-full bg-impo_Neutral_Background p-3">
              <item.Icon className="w-full h-full fill-impo_Primary_Primary stroke-impo_Primary_Primary" />
            </div>
          </div>

          <div>
            <CustomTypography fontSize="Title_Small" className="pb-1 !text-impo_Neutral_OnBackground">
              {item.title}
            </CustomTypography>

            <CustomTypography fontSize="Body_Small" className="!text-impo_Neutral_OnBackground">
              {item.description}
            </CustomTypography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ValuesBigScreen;
