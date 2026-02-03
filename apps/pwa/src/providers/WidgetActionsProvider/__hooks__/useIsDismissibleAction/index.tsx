import { useEffect, useState } from 'react';

import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

const useIsDismissibleAction = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const [isDismissibleAction, setIsDismissibleAction] = useState<ActionTypes | null>(null);
  const [isDismissibleActionResetKey, setIsDismissibleActionResetKey] = useState<number>(0);

  const isDismissibleActionHandler = (v: ActionTypes) => {
    setIsDismissibleAction(v);
  };

  const isPopupOpen = getQueryParams(MODALS.WIDGET_POPUP) !== null;

  useEffect(() => {
    if (isDismissibleAction !== null && !isPopupOpen) {
      setIsDismissibleActionResetKey(Math.random());
    }
  }, [isDismissibleAction, isPopupOpen]);

  return { isDismissibleAction, isDismissibleActionHandler, isDismissibleActionResetKey };
};

export default useIsDismissibleAction;
