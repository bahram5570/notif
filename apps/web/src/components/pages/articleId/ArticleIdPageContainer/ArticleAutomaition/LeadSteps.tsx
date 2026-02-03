'use client';

import OtpInput from './OtpInput';
import PhoneInput from './PhoneInput';
import Success from './Success';
import { LeadStepsProps } from './types';

export default function LeadSteps({ step, setStep, onClose }: LeadStepsProps) {
  return (
    <div className="px-5 sm:px-8 py-5 sm:py-6">
      {step === 'phone' && <PhoneInput onNext={() => setStep('otp')} />}
      {step === 'otp' && <OtpInput onNext={() => setStep('success')} onBack={() => setStep('phone')} />}
      {step === 'success' && <Success onClose={onClose} />}
    </div>
  );
}
