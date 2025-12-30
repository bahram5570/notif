import { FONTS_ANDROID, FONTS_IOS } from '@theme/fonts';

import { TypographyFontStylesMakerTypes } from './types';

export const typographyFontStylesMaker = ({ isWeb, fontSize, operatingSystem }: TypographyFontStylesMakerTypes) => {
  let typographyFontStyles;

  const typographySystem = operatingSystem === 'ios' ? FONTS_IOS : FONTS_ANDROID;
  typographyFontStyles = { ...typographySystem[fontSize] };

  if (isWeb) {
    typographyFontStyles.fontSize = typographyFontStyles.fontSize * 1.12;
  }

  return typographyFontStyles;
};
