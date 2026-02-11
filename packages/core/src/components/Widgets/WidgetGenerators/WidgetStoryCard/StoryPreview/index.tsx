import 'swiper/css/effect-flip';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useAnalytics } from '../../../../../hooks/useAnalytics';
import { CustomModal } from '../../../../ui/CustomModal';
import StoryPreviewListGenerator from './StoryPreviewListGenerator';
import useCurrentStory from './__hooks__/useListStory';
import useStoryUpdate from './__hooks__/useStoryUpdate';
import { StoryPreviewPorps } from './types';

const StoryPreview = ({ list, saveHandler }: StoryPreviewPorps) => {
  const { callEvent } = useAnalytics();
  const { swiperRef, isOpen, storyIndex, storyIndexHandler, navigateStoryHandler } = useCurrentStory(list);

  const { viewStoryHandler, isBookmarkedHandler } = useStoryUpdate({ isOpen, list });

  const saveStoryHandler = (storyId: string) => {
    callEvent('StoryBookMarked');
    isBookmarkedHandler(storyId);

    if (saveHandler) {
      saveHandler(storyId);
    }
  };

  return (
    <>
      <CustomModal isOpen={isOpen} isFullScreen={true} className="!p-0">
        <>
          {isOpen && (
            <Swiper
              dir="rtl"
              className="w-full h-full"
              initialSlide={storyIndex}
              onSwiper={(s) => (swiperRef.current = s)}
              onSlideChange={(s) => storyIndexHandler(s.activeIndex)}
            >
              {list.map((item, index) => (
                <SwiperSlide key={index}>
                  <StoryPreviewListGenerator
                    storyItems={item}
                    viewStoryHandler={viewStoryHandler}
                    isBookmarkedHandler={saveStoryHandler}
                    isCurrentStorySlide={storyIndex === index}
                    navigateStoryHandler={navigateStoryHandler}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </>
      </CustomModal>
    </>
  );
};

export default StoryPreview;
