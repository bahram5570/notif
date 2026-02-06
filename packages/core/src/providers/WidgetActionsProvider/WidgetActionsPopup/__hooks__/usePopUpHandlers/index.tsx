import { useState } from 'react';

import { WIDGET_POPUP } from '../../../../../constants/modal.constants';
import { useQueryParamsHandler } from '../../../../../hooks/useQueryParamsHandler';
import { PopupTypeEnum } from '../../../widgetEnums';
import { PopUpHandlerTypes, PopUpTypes } from './types';

const usePopUpHandlers = () => {
  const [popUp, setPopUp] = useState<PopUpTypes>(null);
  const { newQueryParamsHandler, getQueryParams } = useQueryParamsHandler();

  const popUpHandler: PopUpHandlerTypes = (v) => {
    const isPopupOpen = getQueryParams(WIDGET_POPUP) !== null;

    if (v !== null && !isPopupOpen && v.type !== PopupTypeEnum.TimerInteraction) {
      newQueryParamsHandler({ [WIDGET_POPUP]: 'true' });
    }

    setPopUp(v);
  };

  return { popUpHandler, popUp };
};

export default usePopUpHandlers;
