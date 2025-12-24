import { FONTS_ANDROID } from '@theme/fonts';

type NumberMode = 'persian' | 'english';

export interface CustomInputTypes {
  value: string;
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
