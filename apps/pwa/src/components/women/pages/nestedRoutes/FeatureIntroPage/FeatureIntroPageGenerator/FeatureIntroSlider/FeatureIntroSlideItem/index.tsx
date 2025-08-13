import { useState } from 'react';

import SlideItemContext from './SlideItemContext';
import SlideItemFooter from './SlideItemFooter';
import SlideItemSliderImage from './SlideItemSliderImage';
import { TrailonboardingSlideItemPropsType } from './type';

const FeatureIntroSlideItem = ({ data, goToNext }: TrailonboardingSlideItemPropsType) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = (index: number) => {
    setCurrentIndex(index);
  };

  const clickHandler = (index: number) => {
    if (index >= 0 && index < data.slides.length) {
      return goTo(index);
    }

    goToNext();
  };

  return (
    <div
      className="w-full flex flex-col justify-center items-center gap-11 mt-12"
      style={{
        direction: 'rtl',
      }}
    >
      <SlideItemContext description={data.slides[currentIndex].description} title={data.slides[currentIndex].title} />
      <SlideItemSliderImage currentIndex={currentIndex} slides={data.slides} />
      <SlideItemFooter clickHandler={clickHandler} currentIndex={currentIndex} data={data} />
    </div>
  );
};

export default FeatureIntroSlideItem;
