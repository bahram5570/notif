export type Step = 'phone' | 'otp' | 'success';

export type ContentCategoryType = {
  id?: string;
  title: string;
  subtitle: string;
  phoneId: string;
  pdfId: string;
};

export type HeaderContentProps = {
  title: string;
  subtitle: string;
};

export interface LeadPopupProps {
  threshold?: number;
  contentCategory: ContentCategoryType;
}

export interface PhoneProps {
  contentCategoryId?: string;
  phoneId: string;
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
  pdfId: string;
}

export type trackingIdTypes = {
  phoneId: string;
  pdfId: string;
};

export interface LeadStepsProps {
  step: Step;
  setStep: (s: Step) => void;
  onClose: () => void;
  contentCategoryId?: string;
  trackingId: trackingIdTypes;
}
