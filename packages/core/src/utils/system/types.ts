import { OperatingSystemTypes } from '../../providers/OperatingSystemProvider';
import { FONTS_ANDROID } from '../../theme/fonts';

export type TypographyFontStylesMakerTypes = {
  fontSize: keyof typeof FONTS_ANDROID;
  operatingSystem: OperatingSystemTypes;
};
