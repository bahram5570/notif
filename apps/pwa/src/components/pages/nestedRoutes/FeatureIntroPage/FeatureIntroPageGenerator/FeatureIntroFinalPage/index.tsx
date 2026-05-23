import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';

import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import FeatureIntroBtn from '../FeatureIntroBtn';
import TrailonboardingContainer from '../FeatureIntroContainer';
import { FeatureIntroFinalPagePropsType } from './type';

const FeatureIntroFinalPage = ({ data }: FeatureIntroFinalPagePropsType) => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const onclick = () => {
    pageNavigationHandler({
      navigationType: 'logo',
      linkTo: `/protected/cycle`,
      id: `trailonboarding-finalStep`,
    });
  };

  return (
    <TrailonboardingContainer description={data.description} title={data.title}>
      <CustomImage_NEW
        width={0}
        height={0}
        src={data.media}
        className="w-full h-auto"
        containerClassName="min-w-full"
      />

      <FeatureIntroBtn onClick={onclick} textBtn={data.textBtn} />
    </TrailonboardingContainer>
  );
};

export default FeatureIntroFinalPage;
