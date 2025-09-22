'use client';

import CustomButton from '@components/ui/CustomButton';
import CustomTypography from '@components/ui/CustomTypography';

import GeneticMarketingLayout from '../GeneticMarketingLayout';
import TestOnlineQuestionsOption from '../TestOnlineContainer/TestOnlineQuestions/TestOnlineQuestionsOption';
import { WomanStatusItems } from './constants';
import { useWomanStatus } from './useWomanStatus';

const WomanStatusContainer = () => {
  const { selectedIndex, handleSelect, handleNextStep, isNextDisabled } = useWomanStatus();

  return (
    <GeneticMarketingLayout>
      <CustomTypography tagType="h2" fontSize="Title_Small" className="text-center">
        در حال حاضر تو کدوم مرحله از زندگیت هستی؟
      </CustomTypography>
      <div className="grid gap-y-4 w-full mt-16">
        {WomanStatusItems.map((item, index) => (
          <TestOnlineQuestionsOption
            key={index}
            title={item.title}
            isSelected={selectedIndex === index}
            selectHandler={() => handleSelect(index)}
          />
        ))}
      </div>
      <div className="w-full mx-auto flex justify-center fixed right-0 bottom-6">
        <CustomButton varient="fill" fontSize="Title_Small" onClick={handleNextStep} isDisable={isNextDisabled}>
          مرحله بعد
        </CustomButton>
      </div>
    </GeneticMarketingLayout>
  );
};

export default WomanStatusContainer;
