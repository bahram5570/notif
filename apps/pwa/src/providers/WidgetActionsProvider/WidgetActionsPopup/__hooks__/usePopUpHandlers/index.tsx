import { useState } from 'react';

import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import { PopupTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { PopUpHandlerTypes, PopUpTypes } from './types';

const usePopUpHandlers = () => {
  const [popUp, setPopUp] = useState<PopUpTypes>(null);
  const { newQueryParamsHandler, getQueryParams } = useQueryParamsHandler();

  const popUpHandler: PopUpHandlerTypes = (v) => {
    const isPopupOpen = getQueryParams(MODALS.WIDGET_POPUP) !== null;

    if (v !== null && !isPopupOpen && v.type !== PopupTypeEnum.TimerInteraction) {
      newQueryParamsHandler({ [MODALS.WIDGET_POPUP]: 'true' });
    }

    setPopUp(v);
  };

  return { popUpHandler, popUp };
};

export default usePopUpHandlers;
