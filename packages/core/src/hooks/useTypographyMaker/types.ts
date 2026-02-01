import { FONTS_ANDROID } from '../../theme/fonts';

export interface UseTypographyMakerTypes {
  children: React.ReactNode;
  numbersMode?: 'persian' | 'english';
  fontSize?: keyof typeof FONTS_ANDROID;
}
