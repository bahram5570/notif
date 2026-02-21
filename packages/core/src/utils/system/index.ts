import { FONTS_ANDROID, FONTS_IOS } from '../../theme/fonts';
import { TypographyFontStylesMakerTypes } from './types';

export const isDevelopeMode = () => {
  return process.env.NODE_ENV === 'development';
};

export const typographyFontStylesMaker = (props: TypographyFontStylesMakerTypes) => {
  let typographyFontStyles;

  const typographySystem = props.operatingSystem === 'ios' ? FONTS_IOS : FONTS_ANDROID;
  typographyFontStyles = { ...typographySystem[props.fontSize] };

  if (props.isLargeScreen) {
    typographyFontStyles.fontSize = typographyFontStyles.fontSize * 1.12;
  }

  return typographyFontStyles;
};
