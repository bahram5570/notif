export type OnchangeHandlerTypeHasName = (v: string, name: string) => void;
export type OnchangeHandlerTypeOptionalName = (v: string, name?: string) => void;

export type CustomTextareaInputPropsType =
  | {
      value: string;
      placeholder: string;
      rows: number;
      name: string; // وقتی name هست → handler باید name را بگیرد
      onChangeHandler: OnchangeHandlerTypeHasName;
      className?: string;
      maxLength?: number;
      style?: React.CSSProperties;
    }
  | {
      value: string;
      placeholder: string;
      rows: number;
      name?: undefined; // وقتی name نیست → handler هم optional
      onChangeHandler: OnchangeHandlerTypeOptionalName;
      className?: string;
      maxLength?: number;
      style?: React.CSSProperties;
    };
