import { WidgetsButtonTypes } from '../../../providers/WidgetActionsProvider';

export interface WidgetCardContainerProps {
  title: string;
  buttonId?: string;
  className?: string;
  description?: string;
  onClick?: () => void;
  classNameBtn?: string;
  children: React.ReactNode;
  titleElement?: JSX.Element;
  button?: WidgetsButtonTypes;
}
