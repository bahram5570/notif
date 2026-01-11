'use client';

import { useState } from 'react';

import CustomSlider from '@repo/components/ui/CustomSlider';

import CustomTypography from '@components/ui/CustomTypography';
import useOperatingSystem from '@hooks/useOperatingSystem';

import StoryItem from './StoryItem';
import StoryPreview from './StoryPreview';
import { IsOpenHandlerPropsType, StorySectionPropsType } from './type';

const StorySection = ({ title, storyList }: StorySectionPropsType) => {
  const { operatingSystem } = useOperatingSystem();
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | undefined>(undefined);

  const isOpenHandler: IsOpenHandlerPropsType = (b) => {
    setIsOpen(b);
  };

  const currentIndexHandler = (index: number) => {
    setCurrentIndex(index);
  };

  const isWindows = operatingSystem === 'windows';

  return (
    <>
      <div className="flex flex-col  gap-3">
        <CustomTypography fontSize="Title_Small" className="text-impo_Black">
          {title}
        </CustomTypography>
        {/* <div className=" rounded-xl py-3 px-4 bg-impo_Neutral_Background">
          <CustomSlider gap={10} isWindows={isWindows} className=" justify-end">
            {storyList.map((story, index) => {
              return (
                <StoryItem
                  {...story}
                  index={index}
                  isOpenHandler={isOpenHandler}
                  key={index}
                  currentIndexHandler={currentIndexHandler}
                />
              );
            })}
          </CustomSlider>
        </div> */}
      </div>

      <StoryPreview storyList={storyList} isOpen={isOpen} isOpenHandler={isOpenHandler} currentIndex={currentIndex} />
    </>
  );
};

export default StorySection;
