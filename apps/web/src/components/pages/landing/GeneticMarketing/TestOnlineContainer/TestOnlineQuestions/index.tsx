import collaborationlogo from '@assets/images/geneticMarketing/collaborationlogo.webp';
import { typographyMaker } from '@components/ui/CustomTypography/__utils__';

import CustomButton from '@components/ui/CustomButton';
import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import useBreakPoint from '@hooks/useBreakPoint';
import useOperatingSystem from '@hooks/useOperatingSystem';
import { COLORS_LIST } from '@theme/colors';

import useTestOnlineScore from '../__hooks__/useTestOnlineScore';
import useTestOnlineSteps from '../__hooks__/useTestOnlineSteps';
import { GENETIC_TEST_ONLINE_QUESTION_LIST } from '../constants';
import TestOnlineQuestionsOption from './TestOnlineQuestionsOption';

const TestOnlineQuestions = () => {
  const { currentStep, data } = useTestOnlineSteps();
  const questionList = GENETIC_TEST_ONLINE_QUESTION_LIST;
  const { breakPoint } = useBreakPoint();
  const { operatingSystem } = useOperatingSystem();
  const typographyDetails = typographyMaker({ fontSize: 'Body_Medium', operatingSystem, isWeb: !breakPoint.laptop });

  const isLastStep = Number(currentStep) === Object.keys(questionList).length - 1;
  const { nextStepHandler, selectedIndex, selectedIndexHandler, extraNote, setExtraNote } = useTestOnlineScore({
    currentStep,
    data,
  });

  return (
    <>
      <CustomTypography fontSize="Title_Small" tagType="h2" className="pb-10 text-center">
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
          <CustomTypography fontSize="Body_Medium" className="text-right w-full mb-1">
            نگرانی خود را توضیح دهید
          </CustomTypography>
          <textarea
            className="w-full sm:p-4 p-2 rounded-xl text-base"
            placeholder=" اینجا برامون بنویس"
            value={extraNote}
            rows={4}
            onChange={(e) => setExtraNote(e.target.value)}
            style={{
              ...typographyDetails,
              outlineColor: COLORS_LIST.Primary_Primary,
              backgroundColor: COLORS_LIST.Surface_SurfaceVariant,
              outline: 0,
              fontSize: '16px', 
            }}
          />
        </div>
      )}

      <div className="w-full mx-auto grid gap-y-6 justify-items-center justify-center fixed right-0 bottom-1">
        <CustomButton varient="fill" fontSize="Lable_Large" onClick={nextStepHandler} isDisable={selectedIndex === -1}>
          {isLastStep ? 'مشاهده نتیجه' : 'مرحله بعدی'}
        </CustomButton>
        <CustomImage src={collaborationlogo} alt="collaborationlogo" width={999} height={999} className="w-[112px]" />
      </div>
    </>
  );
};

export default TestOnlineQuestions;
