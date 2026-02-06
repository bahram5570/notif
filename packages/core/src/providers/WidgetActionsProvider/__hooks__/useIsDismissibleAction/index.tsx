import { useEffect, useState } from 'react';

import { WIDGET_POPUP } from '../../../../constants/modal.constants';
import { useQueryParamsHandler } from '../../../../hooks/useQueryParamsHandler';
import { ActionTypes } from '../../widgetCommon';

const useIsDismissibleAction = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const [isDismissibleAction, setIsDismissibleAction] = useState<ActionTypes | null>(null);
  const [isDismissibleActionResetKey, setIsDismissibleActionResetKey] = useState<number>(0);

  const isDismissibleActionHandler = (v: ActionTypes) => {
    setIsDismissibleAction(v);
  };

  const isPopupOpen = getQueryParams(WIDGET_POPUP) !== null;

  useEffect(() => {
    if (isDismissibleAction !== null && !isPopupOpen) {
      setIsDismissibleActionResetKey(Math.random());
    }
  }, [isDismissibleAction, isPopupOpen]);

  return { isDismissibleAction, isDismissibleActionHandler, isDismissibleActionResetKey };
};

export default useIsDismissibleAction;
