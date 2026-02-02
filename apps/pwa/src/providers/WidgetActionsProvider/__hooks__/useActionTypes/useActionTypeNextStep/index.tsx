import { useEffect, useRef } from 'react';

import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import { PopupTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

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
      pageNavigationHandler({ showProgressBar: true, id: Math.random() });
      pendingStatus.current.isCalled = true;
      isCurrentNextStepFinishedHandler(false);
    }

    popUpHandler(nextStep);
  };

  const isPopupOpen = getQueryParams(MODALS.WIDGET_POPUP) !== null;

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
