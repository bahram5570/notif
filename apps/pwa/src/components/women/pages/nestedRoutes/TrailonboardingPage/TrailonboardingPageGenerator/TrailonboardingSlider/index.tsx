import TrailonboardingContainer from '../TrailonboardingContainer';
import { TrailonboardingSliderPropsType } from './type';

const TrailonboardingSlider = ({ data, goToNext }: TrailonboardingSliderPropsType) => {
  return (
    <TrailonboardingContainer description={''} title={''} textBtn={data.textBtn} onClickHandler={goToNext}>
      <div></div>
    </TrailonboardingContainer>
  );
};

export default TrailonboardingSlider;
