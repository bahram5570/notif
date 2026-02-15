export type Step = 'phone' | 'otp' | 'success';

export type ContentCategoryType = {
  id?: string;
  title: string;
  subtitle: string;
};

export interface LeadPopupProps {
  threshold?: number;
  contentCategory: ContentCategoryType;
}

export interface PhoneProps {
  contentCategoryId?: string;
  onNext: (phone: string, sentOtpId?: string) => void;
}

export interface OtpProps {
  onNext: () => void;
  phone?: string;
  sentOtpId?: string;
  onLinkReceived?: (link: string) => void;
}

export interface SuccessProps {
  onClose: () => void;
  link?: string;
}

export interface LeadStepsProps {
  step: Step;
  setStep: (s: Step) => void;
  onClose: () => void;
  contentCategoryId?: string;
}
