import { WidgetsButtonTypes } from '../../../providers/WidgetActionsProvider';

export interface WidgetCardContainerProps {
  title: string;
  buttonId?: string;
  className?: string;
  onClick?: () => void;
  classNameBtn?: string;
  children: React.ReactNode;
  titleElement?: JSX.Element;
  button?: WidgetsButtonTypes;
}
