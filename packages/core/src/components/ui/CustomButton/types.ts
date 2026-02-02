import { FONTS_ANDROID } from '../../../theme/fonts';

export interface CustomButtonTypes {
  id?: string;
  testId?: string;
  className?: string;
  isDisable?: boolean;
  isLoading?: boolean;
  onClick: () => void;
  spinnerClassName?: string;
  style?: React.CSSProperties;
  numbersMode?: 'persian' | 'english';
  fontSize?: keyof typeof FONTS_ANDROID;
  navigationLoadingId?: string | number;
  children: string | number | React.ReactElement | React.ReactNode;
}
