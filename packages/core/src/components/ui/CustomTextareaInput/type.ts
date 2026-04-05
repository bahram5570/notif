export type OnchangeHandlerType = (v: string, name?: string) => void;

export type CustomTextareaInputPropsType = {
  value: string;
  onChangeHandler: OnchangeHandlerType;
  placeholder: string;
  rows: number;
  name?: string;
  className?: string;
  maxLength?: number;
  style?: React.CSSProperties;
};
