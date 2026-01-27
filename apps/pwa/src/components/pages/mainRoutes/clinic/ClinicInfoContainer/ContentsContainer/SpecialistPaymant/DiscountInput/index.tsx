import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';

import useDiscountCode from './__hooks__/useDiscountCode';
import { DiscountInputProps } from './types';

const DiscountInput = ({ id, approvedCodeHandler }: DiscountInputProps) => {
  const { code, codeHandler, submitHandler, isLoading } = useDiscountCode({ id, approvedCodeHandler });

  return (
    <div className="w-full flex flex-col items-end gap-2">
      <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
        کد تخفیف
      </Dark_Typography>

      <div className="w-full flex items-center gap-2">
        <Dark_Button
          isLoading={isLoading}
          onClick={submitHandler}
          className="px-6 !w-fit !h-8"
          isDisable={code.trim() === ''}
        >
          اعمال
        </Dark_Button>

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
