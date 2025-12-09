import { SignGeneratorProps } from '@components/women/SignGenerator/types';
import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';

import { SingSelectedListType } from '../../../__hooks__/useSingSelectedList/type';

export interface useSignSelectedProps {
  selectedDate?: string;
  singSelectedList: SingSelectedListType;
}

export type ResponseType = {
  action: ActionTypes;
  valid: boolean;
};
