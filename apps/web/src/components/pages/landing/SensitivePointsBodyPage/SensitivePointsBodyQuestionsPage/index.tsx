'use client';

import QuestionProgressBar from '@components/modules/QuestionProgressBar';
import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import SensitiveAnswersItem from './SensitiveAnswersItem';
import SensitiveQuestionFooter from './SensitiveQuestionFooter';
import useCurrentQuestion from './__hooks__/useCurrentQuestion';
import useCurrentStep from './__hooks__/useCurrentStep';
import { SENSITIVE_POINTS_BODY_QUESTION_DATA } from './constants';

const SensitivePointsBodyQuestionsPage = () => {
  const { currentStep, nextStepHandler, selectedIndex, selectedIndexHandler } = useCurrentStep();
  const { currentQuestion } = useCurrentQuestion({ currentStep });

  return (
    <div className="">
      <div
        key={currentStep}
        className="animate-fadeSlideIn  px-4 h-[468px]  flex flex-col gap-5 lg:w-10/12 lg:mx-auto "
      >
        <div className="mt-6">
          <QuestionProgressBar
            currentStep={currentStep}
            questionListLength={SENSITIVE_POINTS_BODY_QUESTION_DATA.length}
          />
        </div>

        <CustomTypography fontSize="Lable_Large">{currentQuestion.question}</CustomTypography>
        <div className="flex flex-col gap-4">
          {currentQuestion.answers.map((answer) => {
            return (
              <SensitiveAnswersItem
                {...answer}
                key={answer.score}
                selectedIndex={selectedIndex}
                selectHandler={selectedIndexHandler}
              />
            );
          })}
        </div>
      </div>
      <div
        className="  flex justify-center    [clip-path:ellipse(120%_100%_at_50%_100%)] min-h-[190px]   lg:max-h-96  !bg-repeat !bg-cover"
        style={{
          background:
            " url('/assets/images/sensitive/bg.webp'),linear-gradient(135deg, rgba(186, 39, 255, 0.2), rgba(133, 25, 218, 0.2))",
        }}
      >
        <CustomImage
          src={currentQuestion.image}
          height={0}
          width={500}
          alt={currentQuestion.question}
          className=" relative p-4"
          key={currentStep}
        />
        <SensitiveQuestionFooter nextStepHandler={nextStepHandler} isDisable={selectedIndex === -1} />
      </div>
    </div>
  );
};

export default SensitivePointsBodyQuestionsPage;
