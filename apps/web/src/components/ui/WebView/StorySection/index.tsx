'use client';

import { useState } from 'react';

import CustomSlider from '@repo/components/ui/CustomSlider';

import CustomTypography from '@components/ui/CustomTypography';
import useOperatingSystem from '@hooks/useOperatingSystem';
import { COLORS_LIST } from '@theme/colors';

import StoryItem from './StoryItem';
import StoryPreview from './StoryPreview';
import { IsOpenHandlerPropsType, StorySectionPropsType } from './type';

const StorySection = ({ title, storyList }: StorySectionPropsType) => {
  const { operatingSystem } = useOperatingSystem();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandler: IsOpenHandlerPropsType = (b, id) => {
    setIsOpen(b);
    setCurrentIndex(0);
  };

  const isWindows = operatingSystem === 'windows';

  return (
    <>
      <div className="flex flex-col  gap-3">
        <CustomTypography fontSize="Title_Small" color="Neutral_OnBackground">
          {title}
        </CustomTypography>
        <div className=" rounded-xl py-3 px-4" style={{ backgroundColor: COLORS_LIST.Neutral_Background }}>
          <CustomSlider gap={10} isWindows={isWindows} className=" justify-end">
            {storyList.map((story, index) => {
              return <StoryItem {...story} isOpenHandler={isOpenHandler} key={index} />;
            })}
          </CustomSlider>
        </div>
      </div>

      <StoryPreview storyList={storyList} isOpen={isOpen} isOpenHandler={isOpenHandler} />
    </>
  );
};

export default StorySection;
