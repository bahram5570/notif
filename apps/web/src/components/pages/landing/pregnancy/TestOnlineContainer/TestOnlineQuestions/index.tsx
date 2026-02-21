import LogoIcon from '@assets/icons/impo2.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomButton from '@components/ui/CustomButton';

import TestOnlineProgressBar from '../TestOnlineProgressBar';
import useTestOnlineScore from '../__hooks__/useTestOnlineScore';
import useTestOnlineSteps from '../__hooks__/useTestOnlineSteps';
import TestOnlineQuestionsOption from './TestOnlineQuestionsOption';

const TestOnlineQuestions = () => {
  const { currentStep, data } = useTestOnlineSteps();

  const { nextStepHandler, selectedIndex, selectedIndexHandler } = useTestOnlineScore({
    currentStep,
    data,
  });

  return (
    <>
      <TestOnlineProgressBar currentStep={currentStep} />

      <LogoIcon className="w-20 h-20" />

      <CustomTypography
        tagType="h2"
        fontSize="Lable_Large"
        className="py-10 text-center !text-impo_Neutral_OnBackground"
      >
        {data.title}
      </CustomTypography>

      <div className="w-full flex flex-col gap-4 pb-6">
        {data.items.map((question, index) => (
          <TestOnlineQuestionsOption
            key={index}
            title={question.title}
            message={question.message}
            isSelected={selectedIndex === index}
            selectHandler={() => selectedIndexHandler(index)}
          />
        ))}
      </div>

      <CustomButton onClick={nextStepHandler} isDisable={selectedIndex === -1} className="w-full !mt-auto h-12 sm:h-14">
        بریم بعدی
      </CustomButton>
    </>
  );
};

export default TestOnlineQuestions;
