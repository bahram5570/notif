'use client';

import { useState } from 'react';

import OtpInput from './OtpInput';
import PhoneInput from './PhoneInput';
import Success from './Success';
import { LeadStepsProps } from './types';

export default function LeadSteps({ step, setStep, onClose }: LeadStepsProps) {
  const [userPhone, setUserPhone] = useState<string>('');

  return (
    <div className="px-5 sm:px-8 py-5 sm:py-6">
      {step === 'phone' && (
        <PhoneInput
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
