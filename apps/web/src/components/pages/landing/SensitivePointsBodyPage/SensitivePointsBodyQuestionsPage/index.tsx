'use client';

import QuestionProgressBar from '@components/modules/QuestionProgressBar';

import SensitiveQuestionFooter from './SensitiveQuestionFooter';
import SensitiveQuestionSection from './SensitiveQuestionSection';
import useCurrentQuestion from './__hooks__/useCurrentQuestion';
import useCurrentStep from './__hooks__/useCurrentStep';
import { SENSITIVE_POINTS_BODY_QUESTION_DATA } from './constants';

const SensitivePointsBodyQuestionsPage = () => {
  const { currentStep, nextStepHandler, selectedIndex, selectedIndexHandler } = useCurrentStep();
  const { currentQuestion } = useCurrentQuestion({ currentStep });

  return (
    <>
      <div
        key={currentStep}
        className="animate-fadeSlideIn  min-h-[100dvh]   flex flex-col gap-5 lg:w-10/12 lg:mx-auto "
      >
        <div className="mt-6 px-4">
          <QuestionProgressBar
            currentStep={currentStep}
            questionListLength={SENSITIVE_POINTS_BODY_QUESTION_DATA.length}
          />
        </div>
        <SensitiveQuestionSection
          currentQuestion={currentQuestion}
          selectedIndex={selectedIndex}
          selectedIndexHandler={selectedIndexHandler}
        />
      </div>

      <SensitiveQuestionFooter nextStepHandler={nextStepHandler} isDisable={selectedIndex === -1} />
    </>
  );
};

export default SensitivePointsBodyQuestionsPage;
