import { useEffect, useState } from 'react';

import FeatureIntroSlideItem from './FeatureIntroSlideItem';
import RewardOverlay from './RewardOverlay';
import { FeatureIntroSliderPropsType } from './type';

const FeatureIntroSlider = ({ data, goToNext }: FeatureIntroSliderPropsType) => {
  const [showRewardOverlay, setShowRewardOverlay] = useState(false);

  useEffect(() => {
    if (data.initialReward) {
      setShowRewardOverlay(true);
      const timer = setTimeout(() => {
        setShowRewardOverlay(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [data.initialReward]);

  return (
    <>
      <FeatureIntroSlideItem data={data} goToNext={goToNext} />
      {showRewardOverlay && <RewardOverlay initialReward={data.initialReward} />}
    </>
  );
};

export default FeatureIntroSlider;
