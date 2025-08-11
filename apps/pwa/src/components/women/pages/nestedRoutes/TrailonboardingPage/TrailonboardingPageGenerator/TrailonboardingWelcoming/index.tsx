import TrailonboardingContainer from '../TrailonboardingContainer';
import { TrailonboardingWelcomingPropsType } from './type';

const TrailonboardingWelcoming = ({ data, goToNext }: TrailonboardingWelcomingPropsType) => {
  return (
    <TrailonboardingContainer
      description={data.description}
      title={data.title}
      textBtn={data.textBtn}
      onClickHandler={goToNext}
    >
      <div></div>
    </TrailonboardingContainer>
  );
};

export default TrailonboardingWelcoming;
