import { FONTS_ANDROID } from '@repo/core/theme/fonts';

export interface Dark_TypographyTypes {
  testId?: string;
  className?: string;
  style?: React.CSSProperties;
  numbersMode?: 'persian' | 'english';
  fontSize?: keyof typeof FONTS_ANDROID;
  children: React.ReactNode | string | number;
}
