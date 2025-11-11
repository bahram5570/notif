import Image from 'next/image';

import ProgressBars from './ProgressBars';
import SlidesNavigation from './SlidesNavigation';
import StoriesLoading from './StoriesLoading';
import useStorySlides from './__hooks__/useStorySlides';
import { StoryPreviewListGeneratorProps } from './types';

const StoryPreviewListGenerator = ({
  navigateStoryHandler,
  isCurrentStorySlide,
  storyItems,
}: StoryPreviewListGeneratorProps) => {
  const storySlideProps = useStorySlides({ storyItems, navigateStoryHandler });

  return (
    <>
      <ProgressBars
        stories={storyItems}
        isLoading={storySlideProps.isLoading}
        isCurrentStorySlide={isCurrentStorySlide}
        currentSlideIndex={storySlideProps.currentSlideIndex}
        slideIndexHandler={storySlideProps.slideIndexHandler}
      />

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
          <div>
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
      </>
    </>
  );
};

export default StoryPreviewListGenerator;
