'use client';

import CustomSlider from '@repo/components/ui/CustomSlider';

import CustomTypography from '@components/ui/CustomTypography';
import useOperatingSystem from '@hooks/useOperatingSystem';
import { COLORS_LIST } from '@theme/colors';

import StoryItem from './StoryItem';
import { StorySectionPropsType } from './type';

const StorySection = ({ title }: StorySectionPropsType) => {
  const { operatingSystem } = useOperatingSystem();

  const isWindows = operatingSystem === 'windows';
  return (
    <div className="flex flex-col  gap-3">
      <CustomTypography fontSize="Title_Small" color="Neutral_OnBackground">
        {title}
      </CustomTypography>
      <div className=" rounded-xl py-3 px-4" style={{ backgroundColor: COLORS_LIST.Neutral_Background }}>
        <CustomSlider gap={10} isWindows={isWindows} className=" justify-end">
          <StoryItem imageUrl="/assets/images/webView/sympathy/4.webp" title="همدلی ایمپو چیه؟" />
          <StoryItem imageUrl="/assets/images/webView/sympathy/5.webp" title="چطور وصل بشیم؟" />
        </CustomSlider>
      </div>
    </div>
  );
};

export default StorySection;
