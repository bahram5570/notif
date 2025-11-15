import { useEffect } from 'react';

import CustomModal from '@components/ui/CustomModal';
import { WEB_VIEW_MAX_WIDTH } from '@constants/app.constants';
import { Swiper, SwiperSlide } from 'swiper/react';

import StoryPreviewListGenerator from './StoryPreviewListGenerator';
import useCurrentStory from './__hooks__/useListStory';
import { StoryPreviewPorps } from './types';

const StoryPreview = ({ storyList, isOpen, isOpenHandler }: StoryPreviewPorps) => {
  const { swiperRef, storyIndex, storyIndexHandler, navigateStoryHandler } = useCurrentStory({
    list: storyList,
    isOpenHandler,
  });

  const onCloseHandler = () => {
    isOpenHandler(false);
  };

  useEffect(() => {
    if (isOpen) {
      window.parent.postMessage({ type: 'dialog-open' }, '*');
    } else {
      window.parent.postMessage({ type: 'dialog-close' }, '*');
    }
  }, [isOpen]);

  return (
    <>
      <CustomModal isOpen={isOpen} onClose={onCloseHandler}>
        <>
          {isOpen && (
            <div className="relative w-[100vw] h-[100dvh] " style={{ maxWidth: WEB_VIEW_MAX_WIDTH }}>
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
