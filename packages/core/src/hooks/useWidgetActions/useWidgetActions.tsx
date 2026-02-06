import { useContext } from 'react';

import { WidgetActionsContext } from '../../providers/WidgetActionsProvider/WidgetActionsProvider';

export const useWidgetActions = () => {
  return useContext(WidgetActionsContext);
};
