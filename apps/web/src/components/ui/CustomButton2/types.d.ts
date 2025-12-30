import { FONTS_ANDROID } from '@theme/fonts';

export interface CustomBUtton2Types {
  id?: string;
  className?: string;
  isDisable?: boolean;
  isLoading?: boolean;
  onClick: () => void;
  style?: React.CSSProperties;
  children: string | number | React.ReactElement;
  fontSize?: keyof typeof FONTS_ANDROID;
  numbersMode?: 'persian' | 'english';
}
