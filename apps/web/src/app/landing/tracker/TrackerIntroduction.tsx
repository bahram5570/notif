'use client';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';
import { useSystem } from '@repo/core/hooks/useSystem';

import { TRACKER_INTRODUCTION_LIST } from './constants';

const TrackerIntroduction = () => {
  const { breakPoint } = useSystem();

  return (
    <div className="w-full md:w-11/12 xl:w-8/12 2xl:w-7/12 px-4 md:px-0 mx-auto grid md:grid-cols-2 gap-7 md:gap-14 py-20">
      {TRACKER_INTRODUCTION_LIST.map((item, index) => (
        <div className="w-full flex items-start gap-4" key={index}>
          <div className="relative w-[72px] h-[72px] md:w-[100px] md:h-[100px] min-w-[72px] min-h-[72px] md:min-w-[100px] md:min-h-[100px] rounded-full">
            <CustomImage src={item.image} alt="" fill={true} className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col gap-1">
            <CustomTypography
              fontSize={`${breakPoint.laptop ? 'Lable_Large' : 'Title_Medium'}`}
              className="text-impo_Neutral_OnBackground"
            >
              {item.title}
            </CustomTypography>

            <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
              {item.description}
            </CustomTypography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackerIntroduction;
