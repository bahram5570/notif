import { OperatingSystemTypes } from '@providers/OperatingSystemProvider/types';
import { FONTS_ANDROID } from '@theme/fonts';

export interface CustomTypographyTypes {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  numbersMode?: 'persian' | 'english';
  fontSize?: keyof typeof FONTS_ANDROID;
  tagType?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'section' | 'span' | 'li';
}

export type TypographyMakerTypes = {
  isWeb: boolean;
  operatingSystem: OperatingSystemTypes;
  fontSize: Pick<CustomTypographyTypes, 'fontSize'>['fontSize'];
};

export type ResultMakerTypes = {
  children: Pick<CustomTypographyTypes, 'children'>['children'];
  numbersMode: Pick<CustomTypographyTypes, 'numbersMode'>['numbersMode'];
};
