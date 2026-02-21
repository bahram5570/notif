import LogoIcon from '@assets/images/genetic/logo.svg';
import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';

import QuestionProgressBar from '@components/modules/QuestionProgressBar';
import CustomButton from '@components/ui/CustomButton';
import CustomTypography from '@components/ui/CustomTypography';
import { useSystem } from '@repo/core/hooks/useSystem';

import useTestOnlineScore from '../__hooks__/useTestOnlineScore';
import useTestOnlineSteps from '../__hooks__/useTestOnlineSteps';
import { GENETIC_TEST_ONLINE_QUESTION_LIST } from '../constants';
import TestOnlineQuestionsOption from './TestOnlineQuestionsOption';

const TestOnlineQuestions = () => {
  const questionList = GENETIC_TEST_ONLINE_QUESTION_LIST;

  const { breakPoint, operatingSystem } = useSystem();
  const { currentStep, data } = useTestOnlineSteps();

  const typographyDetails = typographyFontStylesMaker({
    operatingSystem,
    fontSize: 'Body_Medium',
    isWeb: !breakPoint.laptop,
  });

  const { nextStepHandler, selectedIndex, selectedIndexHandler, extraNote, setExtraNote } = useTestOnlineScore({
    currentStep,
    data,
  });

  const isLastStep = Number(currentStep) === Object.keys(questionList).length - 1;

  return (
    <div className="w-full">
      <QuestionProgressBar currentStep={currentStep} questionListLength={Object.keys(questionList).length} />
      <div className="lg:w-full lg:flex lg:justify-center justify-self-center">
        <LogoIcon className="w-20 h-20 mt-11" />
      </div>

      <CustomTypography
        fontSize="Title_Small"
        tagType="h2"
        className="py-10 text-center !text-impo_Neutral_OnBackground"
      >
        {data.title}
      </CustomTypography>

      <div className="w-full flex flex-col gap-4 pb-6">
        {data.items.map((question, index) => (
          <TestOnlineQuestionsOption
            key={index}
            title={question.title}
            isSelected={selectedIndex === index}
            selectHandler={() => selectedIndexHandler(index)}
          />
        ))}
      </div>

      {isLastStep && selectedIndex === 1 && (
        <div className="mb-3 w-full">
          <CustomTypography fontSize="Body_Medium" className="text-right w-full mb-1 !text-impo_Neutral_OnBackground">
            نگرانی خود را توضیح دهید
          </CustomTypography>
          <textarea
            className="w-full sm:p-4 p-2 rounded-xl text-base outline-impo_Primary_Primary !bg-impo_Surface_SurfaceVariant !text-impo_Neutral_OnBackground"
            placeholder=" اینجا برامون بنویس"
            value={extraNote}
            rows={4}
            onChange={(e) => setExtraNote(e.target.value)}
            style={{ ...typographyDetails }}
          />
        </div>
      )}
      <div className="mt-6 w-fit mx-auto my-5 flex">
        <CustomButton
          fontSize="Title_Small"
          onClick={nextStepHandler}
          isDisable={selectedIndex === -1}
          className="w-fit !mt-auto !h-12 !px-12"
        >
          {isLastStep ? 'مشاهده نتیجه' : 'مرحله بعدی'}
        </CustomButton>
      </div>
    </div>
  );
};

export default TestOnlineQuestions;
