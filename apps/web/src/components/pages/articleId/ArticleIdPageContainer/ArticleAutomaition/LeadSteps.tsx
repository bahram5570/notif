'use client';

import { useState } from 'react';

import OtpInput from './OtpInput';
import PhoneInput from './PhoneInput';
import Success from './Success';
import { LeadStepsProps } from './types';

export default function LeadSteps({ step, setStep, onClose, contentCategoryId, trackingId }: LeadStepsProps) {
  const [userPhone, setUserPhone] = useState<string>('');
  const [sentOtpId, setSentOtpId] = useState<string | undefined>(undefined);
  const [downloadLink, setDownloadLink] = useState<string | undefined>(undefined);

  return (
    <div className="px-5 sm:px-8 py-5 sm:py-6">
      {step === 'phone' && (
        <PhoneInput
          onNext={(phone, returnedOtpId) => {
            setUserPhone(phone);
            setSentOtpId(returnedOtpId);
            setStep('otp');
          }}
          contentCategoryId={contentCategoryId}
          phoneId={trackingId.phoneId}
        />
      )}

      {step === 'otp' && (
        <OtpInput
          onNext={() => setStep('success')}
          phone={userPhone}
          sentOtpId={sentOtpId}
          onLinkReceived={(link) => setDownloadLink(link)}
        />
      )}

      {step === 'success' && <Success onClose={onClose} link={downloadLink} pdfId={trackingId.pdfId} />}
    </div>
  );
}
