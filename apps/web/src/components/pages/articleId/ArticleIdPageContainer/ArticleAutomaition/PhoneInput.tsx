'use client';

import CustomInput from './components/CustomInput';

import CustomButton from '@components/ui/CustomButton';
import CustomTypography from '@components/ui/CustomTypography';

import { usePhoneSubmit } from './_hooks/usePhoneSubmit';
import { PhoneProps } from './types';

export default function PhoneInput({ onNext, contentCategoryId, phoneId }: PhoneProps) {
  const { phoneValue, setPhoneValue, isValid, isSubmitting, submit } = usePhoneSubmit(onNext);

  return (
    <div className="space-y-6">
      <CustomTypography fontSize="Body_Medium" className="!text-impo_Neutral_OnBackground">
        برای دریافت این راهنما لازمه شماره همراهت رو وارد کنی.
      </CustomTypography>

      <form className="space-y-5">
        <CustomInput
          dir="ltr"
          type="tel"
          maxLength={11}
          numbersMode="persian"
          placeholder="شماره تلفن همراهت"
          value={phoneValue}
          className={`p-3 rounded-xl border placeholder:!text-impo_Surface_OutlineVariant focus:!border-impo_Primary_Primary border-impo_Neutral_Surface ${phoneValue ? 'text-left' : 'text-right'}`}
          fontSize="Body_Large"
          onValue={setPhoneValue}
        />

        <CustomButton
          onClick={() => submit(undefined, contentCategoryId)}
          isDisable={!isValid || isSubmitting}
          isLoading={isSubmitting}
          fontSize="Lable_Large"
          id={phoneId}
          className="w-full !bg-impo_Black border-none mt-10"
        >
          ثبت شماره همراه
        </CustomButton>
      </form>
    </div>
  );
}
