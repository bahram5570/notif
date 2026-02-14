'use client';

import { useEffect } from 'react';

import { toPersianNumbers } from '@utils/numbers';

import CustomButton from '@components/ui/CustomButton';
import CustomTypography from '@components/ui/CustomTypography';

import { getInputClass } from './_Utils/getInputClass';
import { useOtpCode } from './_hooks/useOtpCode';
import { useOtpSubmit } from './_hooks/useOtpSubmit';
import { useOtpTimer } from './_hooks/useOtpTimer';
import { useSendOtp } from './_hooks/useSendOtp';
import { OtpProps } from './types';

let TIME = 120;

export default function OtpInput({ onNext, phone, onLinkReceived, sentOtpId }: OtpProps) {
  const { code, refs, handleChange, handleKeyDown, resetCode } = useOtpCode();
  const { timer, formatTimer, resetTimer } = useOtpTimer(TIME);

  const { isSending: resendLoading, sendOtp } = useSendOtp();

  const { submitLoading, isSuccess, isErrorShake, handleSubmit, link } = useOtpSubmit(onNext, sentOtpId || '');

  const finalText = `لطفا کد تایید 6 رقمی که به شماره همراه ${toPersianNumbers(phone || '')} پیامک کردیم رو اینجا وارد کن`;

  const handleResend = async () => {
    if (!phone) return;

    const { success } = await sendOtp(phone);

    if (success) {
      resetTimer(TIME);
      resetCode();
      refs.current?.[0]?.focus?.();
    }
  };

  useEffect(() => {
    if (isSuccess && link && onLinkReceived) {
      onLinkReceived(link);
    }
  }, [isSuccess, link, onLinkReceived]);

  return (
    <div>
      <CustomTypography fontSize="Body_Medium" className="!text-impo_Neutral_OnBackground mb-3">
        {finalText}
      </CustomTypography>

      <div className="flex gap-2 justify-center flex-row-reverse mt-3">
        {code.map((digit, i) => (
          <input
            key={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            value={toPersianNumbers(digit)}
            onChange={(e) => handleChange(e.target.value, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            maxLength={1}
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete="one-time-code"
            className={getInputClass(digit, isSuccess, isErrorShake)}
            dir="ltr"
            style={{ direction: 'ltr' }}
          />
        ))}
      </div>

      <div className="flex justify-center gap-6 text-sm mt-4">
        <CustomButton
          onClick={handleResend}
          isDisable={timer > 0 || resendLoading}
          isLoading={resendLoading}
          fontSize="Body_Medium"
          className={`!bg-impo_Transparent !text-impo_Neutral_OnBackground !opacity-[1] border-none ${timer === 0 && '!text-impo_Primary_Primary'}`}
        >
          {`کد تایید رو دریافت نکردم ${timer > 0 ? `(${toPersianNumbers(formatTimer())})` : ''}`}
        </CustomButton>
      </div>

      <CustomButton
        onClick={() => handleSubmit(code)}
        isDisable={code.some((c) => !c) || submitLoading}
        isLoading={submitLoading}
        fontSize="Body_Large"
        className="!bg-impo_Black w-full border-none mt-[59px] py-[13.5px]"
      >
        دریافت فایل pdf
      </CustomButton>
    </div>
  );
}
