import { useEffect } from 'react';

import CustomModal from '@components/ui/CustomModal';
import { WEB_VIEW_MAX_WIDTH } from '@constants/app.constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { COLORS_LIST } from '@theme/colors';
import { Swiper, SwiperSlide } from 'swiper/react';

import StoryPreviewListGenerator from './StoryPreviewListGenerator';
import useCurrentStory from './__hooks__/useListStory';
import { SHOW_STORY_PREVIEW } from './constants';
import { StoryPreviewPorps } from './types';

const StoryPreview = ({ storyList, isOpen, isOpenHandler, currentIndex }: StoryPreviewPorps) => {
  const { newQueryParamsHandler, removeQueryParamsHandler } = useQueryParamsHandler();
  const { swiperRef, storyIndex, storyIndexHandler, navigateStoryHandler } = useCurrentStory({
    list: storyList,
    isOpenHandler,
    currentIndex,
  });

  const onCloseHandler = () => {
    isOpenHandler(false);
  };

  useEffect(() => {
    if (isOpen) {
      newQueryParamsHandler({ [SHOW_STORY_PREVIEW]: 'true' });
      window.parent.postMessage({ type: 'dialog-open' }, '*');
    } else {
      window.parent.postMessage({ type: 'dialog-close' }, '*');
      removeQueryParamsHandler(SHOW_STORY_PREVIEW);
    }
  }, [isOpen]);

  return (
    <>
      <CustomModal isOpen={isOpen} onClose={onCloseHandler}>
        <>
          {isOpen && (
            <div
              className="relative w-[100vw] h-[100dvh]  "
              style={{ maxWidth: WEB_VIEW_MAX_WIDTH, backgroundColor: COLORS_LIST.Neutral_OnBackground }}
            >
              <Swiper
                dir="rtl"
                className="w-full h-full"
                initialSlide={storyIndex}
                onSwiper={(s) => (swiperRef.current = s)}
                onSlideChange={(s) => storyIndexHandler(s.activeIndex)}
              >
                {storyList.map((item, index) => (
                  <SwiperSlide key={index}>
                    <StoryPreviewListGenerator
                      storyItems={item.stories}
                      isCurrentStorySlide={storyIndex === index}
                      navigateStoryHandler={navigateStoryHandler}
                      isOpenHandler={isOpenHandler}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </>
      </CustomModal>
    </>
  );
};

export default StoryPreview;
