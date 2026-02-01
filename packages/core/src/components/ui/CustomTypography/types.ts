import { FONTS_ANDROID } from '../../../theme/fonts';

export interface CustomTypographyTypes {
  testId?: string;
  className?: string;
  direction?: 'rtl' | 'ltr';
  style?: React.CSSProperties;
  numbersMode?: 'persian' | 'english';
  fontSize?: keyof typeof FONTS_ANDROID;
  children: React.ReactNode | string | number;
}
