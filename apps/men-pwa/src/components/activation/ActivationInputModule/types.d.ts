export interface ActivationInputModuleProps {
  valueHandler: (v: string) => void;
  direction?: 'ltr' | 'rtl';
  englishNumbers?: boolean;
  placeHolder?: string;
  isTextTyps: boolean;
  className?: string;
  testid?: string;
  value: string;
}
