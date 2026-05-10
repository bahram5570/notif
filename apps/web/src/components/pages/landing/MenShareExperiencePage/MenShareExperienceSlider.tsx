'use client';

import { CustomSlider } from '@repo/core/components/ui/CustomSlider';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';

import { MENEXPERIENCE_IMAGES } from './constants';

const MenShareExperienceSlider = () => {
  return (
    <CustomSlider gap={16} className="!flex-row px-3 lg:px-0 md:px-0">
      {MENEXPERIENCE_IMAGES.map((item, index) => {
        return (
          <div
            className="relative min-w-[280px] lg:h-[428px] h-[345px] w-full  bg-impo_Neutral_Surface rounded-2xl"
            key={index}
          >
            <CustomImage
              src={item.image}
              alt={`Experience ${index + 1}`}
              className="w-full h-auto  "
              width={0}
              height={0}
              sizes="100vw"
            />
            <div
              className="px-4 absolute -bottom-4 left-0 right-0 flex flex-col justify-center lg:h-[207px] h-[167px] items-right gap-1 w-full
               bg-[linear-gradient(180deg,#F9F9F920_0%,#F9F9F9_49.76%)] dark:bg-[linear-gradient(180deg,rgba(42,42,42,0)_0%,rgba(42,42,42,0.3)_30%,rgba(42,42,42,0.7)_60%,#2a2a2a_100%)]"
              style={{
                borderRadius: '0px 0px 16px 16px',
              }}
            >
              <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
                {item.title}
              </CustomTypography>
              <CustomTypography fontSize="Body_Small" className="text-impo_Surface_OnSurfaceVariant text-right ">
                {item.description}
              </CustomTypography>
            </div>
          </div>
        );
      })}
    </CustomSlider>
  );
};

export default MenShareExperienceSlider;
