import { useEffect, useRef } from 'react';

import { WIDGET_POPUP } from '../../../../../constants/modal.constants';
import { useQueryParamsHandler } from '../../../../../hooks/useQueryParamsHandler';
import usePageNavigationLoading from '../../../../PageNavigationProvider/__hooks__/usePageNavigationLoading';
import { PopupTypeEnum } from '../../../widgetEnums';
import { CallNextStepTypes, UseActionTypeNextStepProps } from './types';

const useActionTypeNextStep = ({
  isCurrentNextStepFinishedHandler,
  nextStepCompleteHandler,
  popUpHandler,
}: UseActionTypeNextStepProps) => {
  const { getQueryParams } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const pendingStatus = useRef({ isCalled: false, isModalOpen: false });

  const callNextStep: CallNextStepTypes = ({ nextStep }) => {
    if (nextStep.type !== PopupTypeEnum.TimerInteraction) {
      pageNavigationHandler({ navigationType: 'logo', id: Math.random() });
      pendingStatus.current.isCalled = true;
      isCurrentNextStepFinishedHandler(false);
    }

    popUpHandler(nextStep);
  };

  const isPopupOpen = getQueryParams(WIDGET_POPUP) !== null;

  useEffect(() => {
    // # Detects the
    if (pendingStatus.current.isCalled && isPopupOpen) {
      pendingStatus.current.isModalOpen = true;
    }

    // # If all 'pendingStatus' be true, it means the current actionList is completed and must move to the the next 'onMountActions' index.
    if (pendingStatus.current.isCalled && pendingStatus.current.isModalOpen && !isPopupOpen) {
      nextStepCompleteHandler();
      pendingStatus.current = { isCalled: false, isModalOpen: false };
    }
  }, [pendingStatus.current, isPopupOpen]);

  return { callNextStep };
};

export default useActionTypeNextStep;
