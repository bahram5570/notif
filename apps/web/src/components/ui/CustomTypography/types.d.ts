import { FONTS_ANDROID } from '@theme/fonts';

export interface CustomTypographyTypes {
  className?: string;
  children: React.ReactNode | string | number;
  style?: React.CSSProperties;
  numbersMode?: 'persian' | 'english';
  fontSize?: keyof typeof FONTS_ANDROID;
  tagType?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'section' | 'span' | 'li';
}
