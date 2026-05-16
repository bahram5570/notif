import ArrowRightIcon from '@assets/shared/icons/ArrowRight.svg';
import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

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
              <div className="h-6 w-6 min-h-6 min-w-6">
                <CustomImage_NEW src={option.Icon} fill />
              </div>

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
