import CustomImage from '@components/ui/CustomImage';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import TrailonboardingContainer from '../FeatureIntroContainer';
import { FeatureIntroFinalPagePropsType } from './type';

const FeatureIntroFinalPage = ({ data }: FeatureIntroFinalPagePropsType) => {
  const { removeQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const onclick = () => {
    pageNavigationHandler({
      showProgressBar: true,
      linkTo: `/protected/cycle`,
      id: `trailonboarding-finalStep`,
    });
    // removeQueryParamsHandler('step');
  };

  return (
    <TrailonboardingContainer
      description={data.description}
      title={data.title}
      textBtn={data.textBtn}
      onClickHandler={onclick}
    >
      <CustomImage src={data.media} className="w-full h-auto" />
    </TrailonboardingContainer>
  );
};

export default FeatureIntroFinalPage;
