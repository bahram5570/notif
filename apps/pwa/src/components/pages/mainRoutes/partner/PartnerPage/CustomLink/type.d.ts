import { FONTS_ANDROID } from '@repo/core/theme/fonts';

export type CustomLinkPropType = {
  lable: string;
  style?: React.CSSProperties;
  link: string;
  id: string;
  onClick?: () => void;
  className?: string;
  fontSize?: keyof typeof FONTS_ANDROID;
};
