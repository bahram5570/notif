'use client';

import { useState } from 'react';

import OtpInput from './OtpInput';
import PhoneInput from './PhoneInput';
import Success from './Success';
import { LeadStepsProps } from './types';

export default function LeadSteps({ step, setStep, onClose, contentCategoryId }: LeadStepsProps) {
  const [userPhone, setUserPhone] = useState<string>('');

  return (
    <div className="px-4 py-5">
      {step === 'phone' && (
        <PhoneInput
          contentCategoryId={contentCategoryId}
          onNext={(phone: string) => {
            setUserPhone(phone);
            setStep('otp');
          }}
        />
      )}

      {step === 'otp' && <OtpInput onNext={() => setStep('success')} phone={userPhone} />}

      {step === 'success' && <Success onClose={onClose} />}
    </div>
  );
}
