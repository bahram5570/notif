import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import FeatureIntroBtn from '../FeatureIntroBtn';
import TrailonboardingContainer from '../FeatureIntroContainer';
import OptionListContainer from './OptionListContainer';
import RewardModal from './RewardModal';
import useValue from './__hooks__/useValue';
import { FeatureIntroQuestionPropsType } from './type';

const FeatureIntroQuestion = ({ data, goToNext }: FeatureIntroQuestionPropsType) => {
  const { handleClick, selectedIndex, correctAnswer, rewardData } = useValue({ data });
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { newQueryParamsHandler } = useQueryParamsHandler();

  const handleOpenModal = () => {
    pageNavigationHandler({ showProgressBar: true, id: MODALS.ONBOARDING_QUESTION_REWARD });
    newQueryParamsHandler({ [MODALS.ONBOARDING_QUESTION_REWARD]: 'true' });
  };

  return (
    <TrailonboardingContainer description={data.descripition} title={data.title}>
      <OptionListContainer options={data.options} handleClick={handleClick} selectedIndex={selectedIndex} />

      <RewardModal data={rewardData} goToNext={goToNext} correctAnswer={correctAnswer} />

      <FeatureIntroBtn
        onClick={handleOpenModal}
        textBtn={data.textBtn}
        testId={'btn-question-page'}
        isDisable={selectedIndex === null}
      />
    </TrailonboardingContainer>
  );
};

export default FeatureIntroQuestion;
