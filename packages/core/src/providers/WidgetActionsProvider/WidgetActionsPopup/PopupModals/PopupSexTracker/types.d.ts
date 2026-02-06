import { ActionTypes } from '../../../widgetCommon';

type OptionTypes = { title: string; action: ActionTypes };

export interface PopupSexTrackerProps {
  data: {
    title: string;
    description: string;
    items: OptionTypes[];
    submit: {
      text: string;
      backgroundColor: string;
      foregroundColor: string;
    };
  };
}
