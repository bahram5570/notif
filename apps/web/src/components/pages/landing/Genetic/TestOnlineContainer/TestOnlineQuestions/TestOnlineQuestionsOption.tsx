import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import { TestOnlineQuestionsOptionTypes } from './types';

const TestOnlineQuestionsOption = ({ selectHandler, isSelected, title }: TestOnlineQuestionsOptionTypes) => {
  return (
    <div
      onClick={selectHandler}
      className="w-full rounded-2xl py-4 px-6 border-[1px] cursor-pointer"
      style={{
        borderColor: isSelected ? COLORS_LIST.Primary_Primary : COLORS_LIST.Transparent,
        backgroundColor: isSelected ? COLORS_LIST.Pink_50 : COLORS_LIST.Surface_SurfaceVariant,
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-[18px] h-[18px] min-w-[18px] min-h-[18px] rounded-full border-[1px] p-[2px]"
          style={{ borderColor: isSelected ? COLORS_LIST.Primary_Primary : COLORS_LIST.Surface_OutlineVariant }}
        >
          {isSelected && (
            <div className="w-full h-full rounded-full" style={{ backgroundColor: COLORS_LIST.Primary_Primary }} />
          )}
        </div>

        <CustomTypography fontSize="Body_Medium">{title}</CustomTypography>
      </div>
    </div>
  );
};

export default TestOnlineQuestionsOption;
