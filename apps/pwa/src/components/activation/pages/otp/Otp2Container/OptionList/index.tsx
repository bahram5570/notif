import ArrowRightIcon from '@assets/icons/ArrowRight.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';

import { OptionListPropsType } from './type';

const OptionList = ({ optionList, resetCodeHandler, isValidateLoading, otpStatus }: OptionListPropsType) => {
  const onClick = (type: number) => {
    if (otpStatus === 'correct') {
      return;
    }
    if (!isValidateLoading) {
      resetCodeHandler(type);
    }
  };

  return (
    <div className="flex flex-col gap-3 mt-4 w-full px-4">
      {optionList.map((option, index) => {
        return (
          <div
            key={index}
            className="bg-impo_Neutral_Surface flex flex-row-reverse justify-between items-center p-4 rounded-2xl gap-2"
            onClick={() => onClick(option.type)}
          >
            <div className="flex flex-row-reverse items-center gap-1 w-full">
              <CustomImage src={option.Icon} className="h-6 w-6 min-h-6 min-w-6" />

              <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Body_Small">
                {option.text}
              </CustomTypography>
            </div>

            <ArrowRightIcon className="w-6 h-6 stroke-2 fill-impo_Surface_OutlineVariant rotate-180" />
          </div>
        );
      })}
    </div>
  );
};

export default OptionList;
