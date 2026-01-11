export interface ActivationInputModuleProps {
  valueHandler: (v: string) => void;
  direction?: 'ltr' | 'rtl';
  englishNumbers?: boolean;
  placeHolder?: string;
  isTextTyps: boolean;
  testid?: string;
  value: string;
}
