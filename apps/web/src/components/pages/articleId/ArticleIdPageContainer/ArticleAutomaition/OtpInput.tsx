'use client';

import { useEffect, useRef, useState } from 'react';

import CustomButton from '@components/ui/CustomButton';
import CustomTypography from '@components/ui/CustomTypography';

import { OtpProps } from './types';

const LEN = 5;

export default function OtpInput({ onNext, onBack }: OtpProps) {
  const [code, setCode] = useState<string[]>(Array(LEN).fill(''));
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isErrorShake, setIsErrorShake] = useState(false);

  const refs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timer > 0) {
      const id = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(id);
    }
  }, [timer]);

  const handleChange = (val: string, i: number) => {
    if (!/^\d?$/.test(val)) return;

    const next = [...code];
    next[i] = val;
    setCode(next);

    if (val && i < LEN - 1) {
      refs.current[i + 1]?.focus();
    }

    if (error) setError('');
    if (isErrorShake) setIsErrorShake(false);
  };

  const handleSubmit = async () => {
    const full = code.join('');
    if (full.length !== LEN) {
      setError('۵ رقم وارد کنید');
      setIsErrorShake(true);
      setTimeout(() => setIsErrorShake(false), 600);
      return;
    }

    setLoading(true);
    setError('');
    setIsErrorShake(false);

    try {
      await new Promise((r) => setTimeout(r, 1200));

      setIsSuccess(true);
      setTimeout(() => {
        onNext();
      }, 1200);
    } catch {
      setError('کد اشتباه است');
      setIsErrorShake(true);
      setTimeout(() => setIsErrorShake(false), 600);
    } finally {
      setLoading(false);
    }
  };

  const inputClassBase = `
    w-14 h-14 text-center text-2xl 
    border-2 rounded-xl outline-none transition-all duration-300
    font-bold
  `;

  const getInputClass = (index: number) => {
    let classes = inputClassBase;

    if (isSuccess) {
      classes += ' border-green-500 bg-green-50/40 animate-pulse-slow';
    } else if (isErrorShake || error) {
      classes += ' border-red-500 bg-red-50/40';
      if (isErrorShake) classes += ' animate-shake-short';
    } else if (code[index]) {
      classes += ' border-blue-400';
    } else {
      classes += ' border-gray-300';
    }

    return classes.trim();
  };

  return (
    <div className="space-y-6">
      <CustomTypography fontSize="Body_Medium" className="!text-impo_Neutral_OnBackground mb-3">
        لطفا کد تایید 6 رقمی که به شماره همراه 09155824584 پیامک کردیم رو اینجا وارد کن
      </CustomTypography>

      <div className="flex gap-3 sm:gap-4 justify-center">
        {code.map((digit, i) => (
          <input
            key={i}
            ref={(el: HTMLInputElement | null) => {
              refs.current[i] = el;
            }}
            value={digit}
            onChange={(e) => handleChange(e.target.value, i)}
            maxLength={1}
            inputMode="numeric"
            autoComplete="one-time-code"
            className={getInputClass(i)}
            dir="ltr"
          />
        ))}
      </div>

      {error && <p className="text-red-600 text-center text-sm font-medium">{error}</p>}

      <CustomButton
        onClick={handleSubmit}
        isDisable={code.some((c) => !c) || loading}
        isLoading={loading}
        fontSize="Lable_Large"
        className="w-full !bg-impo_Black border-none"
      >
        {loading ? 'در حال بررسی...' : 'تأیید کد'}
      </CustomButton>

      <div className="flex justify-center gap-6 text-sm">
        <button onClick={onBack} className="text-blue-600 hover:underline font-medium">
          تغییر شماره
        </button>

        <button
          onClick={() => setTimer(60)}
          disabled={timer > 0 || loading}
          className="text-blue-600 hover:underline disabled:text-gray-400 font-medium"
        >
          {timer > 0 ? `ارسال مجدد (${timer})` : 'ارسال مجدد کد'}
        </button>
      </div>
    </div>
  );
}
