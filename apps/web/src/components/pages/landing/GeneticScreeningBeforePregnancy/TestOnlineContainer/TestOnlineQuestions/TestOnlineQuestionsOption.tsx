import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import { TestOnlineQuestionsOptionTypes } from './types';

const TestOnlineQuestionsOption = ({ selectHandler, isSelected, title }: TestOnlineQuestionsOptionTypes) => {
  return (
    <div
      onClick={selectHandler}
      className={`w-full rounded-2xl py-4 px-6 border-[1px] cursor-pointer ${isSelected ? 'border-impo_Primary_Primary dark:bg-impo_Surface_SurfaceVariant bg-impo_Pink_50' : 'border-impo_Transparent bg-impo_Neutral_Surface'}`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`w-[18px] h-[18px] min-w-[18px] min-h-[18px] rounded-full border-[1px] p-[2px] ${isSelected ? 'border-impo_Primary_Primary' : 'border-impo_Surface_OutlineVariant dark:border-impo_Surface_Outline'}`}
        >
          {isSelected && <div className="w-full h-full rounded-full !bg-impo_Primary_Primary" />}
        </div>

        <CustomTypography fontSize="Body_Medium" className="!text-impo_Neutral_OnBackground">
          {title}
        </CustomTypography>
      </div>
    </div>
  );
};

export default TestOnlineQuestionsOption;
