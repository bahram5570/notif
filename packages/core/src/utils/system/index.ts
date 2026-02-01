import { FONTS_ANDROID, FONTS_IOS } from '../../theme/fonts';
import { TypographyFontStylesMakerTypes } from './types';

export const isDevelopeMode = () => {
  return process.env.NODE_ENV === 'development';
};

export const typographyFontStylesMaker = ({ fontSize, operatingSystem }: TypographyFontStylesMakerTypes) => {
  const typographySystem = operatingSystem === 'ios' ? FONTS_IOS : FONTS_ANDROID;
  return typographySystem[fontSize];
};
