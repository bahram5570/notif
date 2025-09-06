import { colorFormatConverter } from '@utils/scripts';
import Image from 'next/image';

import Button from '@components/ui/Button';
import useWidgetActions from '@hooks/useWidgetActions';
import { WidgetStoryTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';

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
  const isMoodTracker = storyItems.id === 'MoodTracker';

  const handleViewStory: ViewStoryHandlerTypes = (slideId) => {
    if (isMoodTracker) {
      //
    } else {
      viewStoryHandler(slideId);
    }
  };

  const { actionHandler } = useWidgetActions();
  const storySlideProps = useStorySlides({ stories: storyItems.stories, handleViewStory, navigateStoryHandler });

  // if (isMoodTracker) {
  //   const vvvv = storyItems.stories[0].events[0]
  //   if (vvvv.type === WidgetStoryTypeEnum.MoodTracker) {
  //     vvvv.items
  //   }
  //   console.log(vvvv.type);
  // }

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

      {isMoodTracker && <StoryMoodTracker moodTrackerData={storyItems.stories[0].events[0]} />}

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
            <div className="mt-auto p-4 pb-8 z-20">
              <Button
                size="medium"
                variant="fill"
                color="FREE-STYLES"
                onClick={() => actionHandler(storySlideProps.ctaButton!.action)}
                buttonColor={colorFormatConverter(storySlideProps.ctaButton.backgroundColor)}
                contentsColor={colorFormatConverter(storySlideProps.ctaButton.foregroundColor)}
              >
                {storySlideProps.ctaButton.text}
              </Button>
            </div>
          )}

          <SaveStory isBookmarked={storyItems.isBookmarked} selectHandler={() => isBookmarkedHandler(storyItems.id)} />
        </>
      )}
    </div>
  );
};

export default StoryPreviewListGenerator;
