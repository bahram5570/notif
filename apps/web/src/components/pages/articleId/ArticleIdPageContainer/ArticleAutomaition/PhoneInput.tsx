'use client';

import { useState } from 'react';

import CustomButton from '@components/ui/CustomButton';
import CustomInput from '@components/ui/CustomInput';
import CustomTypography from '@components/ui/CustomTypography';

import { PhoneProps } from './types';

export default function PhoneInput({ onNext }: PhoneProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const clean = value.replace(/\D/g, '');
  const valid = value.length === 11;

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!valid) {
      setError('شماره باید ۱۰ یا ۱۱ رقم باشد');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await new Promise((r) => setTimeout(r, 1000));
      onNext(clean.startsWith('0') ? '+98' + clean.slice(1) : '+98' + clean);
    } catch {
      setError('خطا در ارسال کد');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <CustomTypography fontSize="Body_Medium" className="!text-impo_Neutral_OnBackground mb-3">
        برای اینکه بهت یه راهنمای کامل از موضوع این مقاله رو بدیم لازمه شماره همراهت رو وارد کنی
      </CustomTypography>
      <form onSubmit={handleSubmit} className="space-y-5">
        <CustomInput
          dir="ltr"
          maxLength={11}
          numbersMode="persian"
          placeholder="شماره تلفن همراهت"
          value={value}
          className={`p-3 rounded-xl border border-impo_Neutral_Surface ${value ? 'text-left' : 'text-right'}`}
          fontSize="Body_Large"
          onValue={setValue}
        />
        <CustomButton
          onClick={() => void handleSubmit()}
          isDisable={!valid}
          isLoading={loading}
          fontSize="Lable_Large"
          className="w-full !bg-impo_Black border-none !mt-[110px]"
        >
          ثبت شماره همراه
        </CustomButton>
      </form>
    </div>
  );
}
