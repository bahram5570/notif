export type Step = 'phone' | 'otp' | 'success';

export interface LeadPopupProps {
  threshold?: number;
  once?: boolean;
  storageKey?: string;
}

export interface PhoneProps {
  onNext: (phone: string) => void;
}

export interface OtpProps {
  onNext: () => void;
  onBack: () => void;
}

export interface SuccessProps {
  onClose: () => void;
}

export interface LeadStepsProps {
  step: Step;
  setStep: (s: Step) => void;
  onClose: () => void;
}
