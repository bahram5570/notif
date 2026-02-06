import { WidgetsButtonTypes } from '../../../widgetCommon';

export interface PopupImageTextButtonProps {
  data: {
    image: string;
    title: string;
    description: string;
    button: WidgetsButtonTypes;
  };
}
