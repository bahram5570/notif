import DiscountCodeIcon from '@assets/icons/discountCode.svg';
import PlusIcon from '@assets/shared/icons/plus.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CodeInput from './CodeInput';
import useDiscountCode from './__hooks__/useDiscountCode';
import { DiscountCodeProps } from './types';

const DiscountCode = ({
  isValidDiscountCode,
  approvedCodeHandler,
  discountCodeHelper,
  loadingResponse,
  onApply,
}: DiscountCodeProps) => {
  const { showDiscountInput, toggleShowHandler, code, codeHandler } = useDiscountCode();

  return (
    <div className="w-full rounded-xl p-3 bg-impo_Neutral_Surface">
      <div className="flex items-center justify-between">
        <PlusIcon
          className="w-6 h-auto stroke-impo_Surface_Outline"
          style={{ rotate: showDiscountInput ? '45deg' : '0deg' }}
          onClick={toggleShowHandler}
        />

        <div className="flex items-center gap-2 ">
          <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
            کد تخفیف خود را اینجا وارد کنید
          </CustomTypography>

          <DiscountCodeIcon className="w-7 h-7 stroke-impo_Surface_Outline" />
        </div>
      </div>

      {showDiscountInput && (
        <CodeInput
          code={code}
          codeHandler={codeHandler}
          loadingResponse={loadingResponse}
          onClick={() => onApply({ code })}
          discountCodeHelper={discountCodeHelper}
          isValidDiscountCode={isValidDiscountCode}
          approvedCodeHandler={approvedCodeHandler}
        />
      )}
    </div>
  );
};

export default DiscountCode;
