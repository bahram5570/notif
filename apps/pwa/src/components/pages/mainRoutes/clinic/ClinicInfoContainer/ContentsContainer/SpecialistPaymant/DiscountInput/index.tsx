import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useDiscountCode from './__hooks__/useDiscountCode';
import { DiscountInputProps } from './types';

const DiscountInput = ({ id, approvedCodeHandler }: DiscountInputProps) => {
  const { code, codeHandler, submitHandler, isLoading } = useDiscountCode({ id, approvedCodeHandler });

  return (
    <div className="w-full flex flex-col items-end gap-2">
      <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
        کد تخفیف
      </CustomTypography>

      <div className="w-full flex items-center gap-2">
        <CustomButton
          isLoading={isLoading}
          onClick={submitHandler}
          className="px-6 !w-fit !h-8"
          isDisable={code.trim() === ''}
        >
          اعمال
        </CustomButton>

        <input
          type="text"
          value={code}
          placeholder="اینجا بنویس"
          onChange={(e) => codeHandler(e.target.value)}
          className="
                      w-full 
                      h-8 
                      rounded-full 
                      px-4 
                      py-[6px] 
                      border-[1px] 
                      border-impo_Neutral_Surface 
                      text-impo_Neutral_OnBackground 
                      bg-impo_Neutral_Background
                      placeholder:text-impo_Surface_OutlineVariant
                    "
        />
      </div>
    </div>
  );
};

export default DiscountInput;
