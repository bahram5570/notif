import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import Dark_Button from '@components/ui/Dark_Button';

import useCodeStatus from './__hooks__/useCodeStatus';
import { CodeInputProps } from './types';

const CodeInput = ({
  isValidDiscountCode,
  approvedCodeHandler,
  discountCodeHelper,
  loadingResponse,
  codeHandler,
  onClick,
  code,
}: CodeInputProps) => {
  const { hasSubmitCodeHandler, scriptInfo } = useCodeStatus({
    approveCodeHandler: () => approvedCodeHandler(code),
    isValidDiscountCode,
    discountCodeHelper,
  });

  const clickHandler = () => {
    hasSubmitCodeHandler(true);
    onClick();
  };

  return (
    <>
      <div className="flex items-center gap-2 pt-4">
        <Dark_Button
          onClick={clickHandler}
          isLoading={loadingResponse}
          isDisable={code.trim() === ''}
          fontSize="Lable_Large"
        >
          اعمال
        </Dark_Button>

        <input
          className="w-[220px] h-full border rounded-full py-1.5 px-4 bg-impo_Neutral_Surface text-impo_Neutral_OnBackground "
          onChange={(e) => codeHandler(e.target.value)}
        />
      </div>

      {scriptInfo && !isValidDiscountCode && (
        <CustomTypography fontSize="Body_Small" className={`ml-auto pt-2 ${scriptInfo.color}`}>
          {scriptInfo.script}
        </CustomTypography>
      )}
    </>
  );
};

export default CodeInput;
