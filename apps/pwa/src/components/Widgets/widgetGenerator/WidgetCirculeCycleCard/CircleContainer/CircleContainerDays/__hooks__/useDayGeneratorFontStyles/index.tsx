import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';

import useOperatingSystem from '@repo/core/hooks/useOperatingSystem';
import { FONTS_ANDROID } from '@repo/core/theme/fonts';

const useDayGeneratorFontStyles = (fontSize: keyof typeof FONTS_ANDROID) => {
  const { operatingSystem } = useOperatingSystem();
  return typographyFontStylesMaker({ fontSize, operatingSystem });
};

export default useDayGeneratorFontStyles;
