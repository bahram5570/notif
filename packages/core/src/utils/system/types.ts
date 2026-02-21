import { OperatingSystemTypes } from '../../providers/SystemProvider/types';
import { FONTS_ANDROID } from '../../theme/fonts';

export type TypographyFontStylesMakerTypes = {
  isLargeScreen?: boolean;
  fontSize: keyof typeof FONTS_ANDROID;
  operatingSystem: OperatingSystemTypes;
};
