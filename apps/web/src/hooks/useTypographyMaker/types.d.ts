import { OperatingSystemTypes } from '@providers/OperatingSystemProvider/types';
import { FONTS_ANDROID } from '@theme/fonts';

export interface UseTypographyMakerTypes {
  children: React.ReactNode;
  numbersMode?: 'persian' | 'english';
  fontSize?: keyof typeof FONTS_ANDROID;
}

export type TypographyFontStylesMakerTypes = {
  isWeb: boolean;
  fontSize: keyof typeof FONTS_ANDROID;
  operatingSystem: OperatingSystemTypes;
};
