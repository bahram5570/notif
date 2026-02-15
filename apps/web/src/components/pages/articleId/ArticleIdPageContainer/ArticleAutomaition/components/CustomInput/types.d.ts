import { FONTS_ANDROID } from '@repo/core/theme/fonts';

type NumberMode = 'persian' | 'english';

type InputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

export interface CustomInputTypes {
  value: string;
  dir?: 'ltr' | 'rtl';
  type?: InputType;
  className?: string;
  maxLength?: number;
  placeholder?: string;
  hasOutline?: boolean;
  numbersMode?: NumberMode;
  style?: React.CSSProperties;
  onValue: (value: string) => void;
  fontSize?: keyof typeof FONTS_ANDROID;
}

export type CustomInputResultMakerTypes = (input: string | number, numberMode?: NumberMode) => string;
