export interface InputModuleProps {
  valueHandler: (v: string) => void;
  placeHolder?: string;
  isTextTyps: boolean;
  value: string;
  autoFocus?: boolean;
}
