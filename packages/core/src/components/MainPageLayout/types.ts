import { HeaderIconEnums } from './enums';

export type MainPageLayoutHeaderProps = {
  leftElement1?: keyof typeof HeaderIconEnums;
  leftElement2?: keyof typeof HeaderIconEnums;
  rightElement?: keyof typeof HeaderIconEnums;
  hasScalingAnimation?: boolean;
  rightElementScript?: string;
  style?: React.CSSProperties;
  middleScript?: string;
  className?: string;
};

export type MainPageLayoutProps = MainPageLayoutHeaderProps & {
  paddingBottom?: number | string;
  paddingTop?: number | string;
  children: React.ReactNode;
  headerClassName?: string;
};

export type IconsListTypes = {
  [key in HeaderIconEnums]: any;
};

export type IconComponentMakerProps = (props: { loadingId: string; iconElement: any; path: string }) => any;
