import { ActionTypes } from '@repo/core/providers/WidgetActionsProvider';

import { SingSelectedListType } from '../../../__hooks__/useSingSelectedList/type';

export interface useSignSelectedProps {
  selectedDate?: string;
  singSelectedList: SingSelectedListType;
}

export type ResponseType = {
  action: ActionTypes;
  valid: boolean;
};
