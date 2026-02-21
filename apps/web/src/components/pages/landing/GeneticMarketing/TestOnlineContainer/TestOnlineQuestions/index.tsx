import collaborationlogo from '@assets/images/geneticMarketing/collaborationlogo.webp';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { typographyFontStylesMaker } from '@repo/core/utils/system';

import CustomButton from '@components/ui/CustomButton';
import CustomImage from '@components/ui/CustomImage';
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
    isLargeScreen: !breakPoint.laptop,
  });

  const isLastStep = Number(currentStep) === Object.keys(questionList).length - 1;
  const { nextStepHandler, selectedIndex, selectedIndexHandler, extraNote, setExtraNote } = useTestOnlineScore({
    currentStep,
    data,
  });

  const isDisable = selectedIndex === -1 || (isLastStep && selectedIndex === 1 && !extraNote);

  return (
    <>
      <CustomTypography
        fontSize="Title_Small"
        tagType="h2"
        className="pb-10 text-center !text-impo_Neutral_OnBackground"
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
            style={{
              ...typographyDetails,
              outline: 0,
              fontSize: '16px',
            }}
          />
        </div>
      )}

      <div className="w-full mx-auto grid gap-y-6 justify-items-center justify-center fixed right-0 bottom-1">
        <CustomButton isDisable={isDisable} fontSize="Lable_Large" onClick={nextStepHandler}>
          {isLastStep ? 'مشاهده نتیجه' : 'مرحله بعدی'}
        </CustomButton>
        <CustomImage src={collaborationlogo} alt="collaborationlogo" width={999} height={999} className="w-[112px]" />
      </div>
    </>
  );
};

export default TestOnlineQuestions;
