import { useContext, useEffect } from 'react';

import { OnMountActionsContext } from '../../providers/WidgetActionsProvider/OnMountActionsProvider';
import { UseWidgetOnMountActionsTypes } from './types';

export const useWidgetOnMountActions = (actionsList: UseWidgetOnMountActionsTypes) => {
  const { onMountActionsListHandler } = useContext(OnMountActionsContext);

  useEffect(() => {
    if (actionsList && actionsList.length > 0) {
      onMountActionsListHandler(actionsList);
    }
  }, [actionsList]);
};
