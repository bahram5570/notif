import { FONTS_ANDROID } from '@repo/core/theme/fonts';

export interface CustomBUttonTypes {
  id?: string;
  className?: string;
  isDisable?: boolean;
  isLoading?: boolean;
  onClick: () => void;
  spinnerClassName?: string;
  style?: React.CSSProperties;
  numbersMode?: 'persian' | 'english';
  fontSize?: keyof typeof FONTS_ANDROID;
  children: string | number | React.ReactElement;
}
