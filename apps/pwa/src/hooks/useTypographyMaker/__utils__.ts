import { FONTS_ANDROID, FONTS_IOS } from '@repo/core/theme/fonts';

import { TypographyFontStylesMakerTypes } from './types';

export const typographyFontStylesMaker = ({ fontSize, operatingSystem }: TypographyFontStylesMakerTypes) => {
  const typographySystem = operatingSystem === 'ios' ? FONTS_IOS : FONTS_ANDROID;
  return typographySystem[fontSize];
};
