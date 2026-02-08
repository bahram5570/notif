'use client';

import CustomInput from './components/CustomInput';

import CustomButton from '@components/ui/CustomButton';
import CustomTypography from '@components/ui/CustomTypography';

import { usePhoneSubmit } from './_hooks/usePhoneSubmit';
import { PhoneProps } from './types';

export default function PhoneInput({ onNext }: PhoneProps) {
  const { value, setValue, isValid, isSubmitting, handleSubmit } = usePhoneSubmit({ onSuccess: onNext });

  return (
    <div>
      <CustomTypography fontSize="Body_Medium" className="!text-impo_Neutral_OnBackground mb-3">
        برای اینکه بهت یه راهنمای کامل از موضوع این مقاله رو بدیم لازمه شماره همراهت رو وارد کنی
      </CustomTypography>
      <form onSubmit={handleSubmit} className="space-y-5">
        <CustomInput
          dir="ltr"
          type="tel"
          maxLength={11}
          numbersMode="persian"
          placeholder="شماره تلفن همراهت"
          value={value}
          className={`p-3 rounded-xl border placeholder:!text-impo_Surface_OutlineVariant focus:!border-impo_Primary_Primary border-impo_Neutral_Surface ${value ? 'text-left' : 'text-right'}`}
          fontSize="Body_Large"
          onValue={setValue}
        />
        <CustomButton
          onClick={() => void handleSubmit()}
          isDisable={!isValid}
          isLoading={isSubmitting}
          fontSize="Lable_Large"
          className="w-full !bg-impo_Black border-none !mt-[110px]"
        >
          ثبت شماره همراه
        </CustomButton>
      </form>
    </div>
  );
}
