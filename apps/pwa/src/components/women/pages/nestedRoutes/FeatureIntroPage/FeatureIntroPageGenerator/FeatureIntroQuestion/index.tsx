import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';

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
    pageNavigationHandler({ showProgressBar: true, id: MODALS.PREVIEW_IMAGE });
    newQueryParamsHandler({ [MODALS.ONBOARDING_QUESTION_REWARD]: 'true' });
  };

  return (
    <TrailonboardingContainer
      description={data.descripition}
      title={data.title}
      textBtn={data.textBtn}
      onClickHandler={handleOpenModal}
      isDisable={selectedIndex === null}
    >
      <OptionListContainer options={data.options} handleClick={handleClick} selectedIndex={selectedIndex} />

      <RewardModal data={rewardData} goToNext={goToNext} correctAnswer={correctAnswer} />
    </TrailonboardingContainer>
  );
};

export default FeatureIntroQuestion;
