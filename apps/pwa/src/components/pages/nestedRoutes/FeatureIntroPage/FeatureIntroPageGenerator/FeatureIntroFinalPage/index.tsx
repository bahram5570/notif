import { CustomImage } from '@repo/core/components/ui/CustomImage';

import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import FeatureIntroBtn from '../FeatureIntroBtn';
import TrailonboardingContainer from '../FeatureIntroContainer';
import { FeatureIntroFinalPagePropsType } from './type';

const FeatureIntroFinalPage = ({ data }: FeatureIntroFinalPagePropsType) => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const onclick = () => {
    pageNavigationHandler({
      showProgressBar: true,
      linkTo: `/protected/cycle`,
      id: `trailonboarding-finalStep`,
    });
  };

  return (
    <TrailonboardingContainer description={data.description} title={data.title}>
      <CustomImage src={data.media} className="w-full h-auto" />
      <FeatureIntroBtn onClick={onclick} textBtn={data.textBtn} />
    </TrailonboardingContainer>
  );
};

export default FeatureIntroFinalPage;
