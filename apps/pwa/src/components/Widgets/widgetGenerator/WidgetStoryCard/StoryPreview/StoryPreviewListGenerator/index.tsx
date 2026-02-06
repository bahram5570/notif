import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { colorFormatConverter } from '@repo/core/utils/scripts';
import Image from 'next/image';

import { WidgetStoryTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';
import { useWidgetActions } from '@repo/core/hooks/useWidgetActions';

import { STORY_MOOD_TRACKER_NAME } from '../../constants';
import { ViewStoryHandlerTypes } from '../__hooks__/useStoryUpdate/useIsView/types';
import ProgressBars from './ProgressBars';
import SaveStory from './SaveStory';
import SlidesNavigation from './SlidesNavigation';
import StoriesLoading from './StoriesLoading';
import StoryMoodTracker from './StoryMoodTracker';
import useStorySlides from './__hooks__/useStorySlides';
import { StoryPreviewListGeneratorProps } from './types';

const StoryPreviewListGenerator = ({
  navigateStoryHandler,
  isBookmarkedHandler,
  isCurrentStorySlide,
  viewStoryHandler,
  storyItems,
}: StoryPreviewListGeneratorProps) => {
  const isMoodTracker = storyItems.id === STORY_MOOD_TRACKER_NAME;

  const handleViewStory: ViewStoryHandlerTypes = (slideId) => {
    if (isMoodTracker) {
      return;
    }

    viewStoryHandler(slideId);
  };

  const { actionHandler } = useWidgetActions();
  const storySlideProps = useStorySlides({ stories: storyItems.stories, handleViewStory, navigateStoryHandler });

  return (
    <div className="relative w-full h-full flex flex-col">
      <ProgressBars
        stories={storyItems.stories}
        viewStoryHandler={handleViewStory}
        isLoading={storySlideProps.isLoading}
        isCurrentStorySlide={isCurrentStorySlide}
        currentSlideIndex={storySlideProps.currentSlideIndex}
        slideIndexHandler={storySlideProps.slideIndexHandler}
      />

      {isMoodTracker && storyItems.events[0].type === WidgetStoryTypeEnum.MoodTracker && (
        <StoryMoodTracker moodTrackerData={storyItems.events[0]} />
      )}

      {!isMoodTracker && (
        <>
          {storySlideProps.isLoading && <StoriesLoading />}

          <SlidesNavigation slideIndexHandler={storySlideProps.slideIndexHandler} />

          {storySlideProps.image !== null && (
            <div className="absolute top-0 left-0 right-0 aspect-[9_/_16] pointer-events-none select-none">
              <Image
                fill={true}
                className="w-full h-auto"
                src={storySlideProps.image}
                alt={storySlideProps.image}
                sizes="(max-width: 480px) 100vw, 480px"
                onLoad={storySlideProps.isLoadingHandler}
                key={storySlideProps.image + storySlideProps.currentSlideIndex}
              />
            </div>
          )}

          {storySlideProps.video !== null && (
            <div className="absolute top-0 left-0 right-0 aspect-[9_/_16] pointer-events-none select-none">
              <video
                autoPlay={true}
                controls={false}
                playsInline={true}
                className="w-full h-auto"
                webkit-playsinline="true"
                onCanPlayThrough={storySlideProps.isLoadingHandler}
                key={storySlideProps.video + storySlideProps.currentSlideIndex}
              >
                <source src={storySlideProps.video} />
              </video>
            </div>
          )}

          {storySlideProps.ctaButton !== null && (
            <div className="mt-auto p-4 pb-16 z-20">
              <CustomButton
                onClick={() => actionHandler(storySlideProps.ctaButton!.action)}
                style={{
                  backgroundColor: colorFormatConverter(storySlideProps.ctaButton.backgroundColor),
                  color: colorFormatConverter(storySlideProps.ctaButton.foregroundColor),
                  borderColor: colorFormatConverter(storySlideProps.ctaButton.backgroundColor),
                }}
                fontSize="Lable_Large"
              >
                {storySlideProps.ctaButton.text}
              </CustomButton>
            </div>
          )}

          <SaveStory isBookmarked={storyItems.isBookmarked} selectHandler={() => isBookmarkedHandler(storyItems.id)} />
        </>
      )}
    </div>
  );
};

export default StoryPreviewListGenerator;
