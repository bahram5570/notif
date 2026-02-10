'use client';

import { createContext, useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { STORY_MODAL_ID, WIDGET_POPUP } from '../../constants/modal.constants';
import { useQueryParamsHandler } from '../../hooks/useQueryParamsHandler';
import OnMountActionsProvider from './OnMountActionsProvider';
import WidgetActionsPopup from './WidgetActionsPopup';
import usePopUpHandlers from './WidgetActionsPopup/__hooks__/usePopUpHandlers';
import useActionTypes from './__hooks__/useActionTypes';
import useIsCurrentNextStepFinished from './__hooks__/useIsCurrentNextStepFinished';
import useResetOnPageChange from './__hooks__/useResetOnPageChange';
import { ActionListHandlerTypes, WidgetActionsContextTypes, WidgetActionsProviderTypes } from './types';
import { ActionTypes } from './widgetCommon';

export const WidgetActionsContext = createContext<WidgetActionsContextTypes>({
  actionHandler: () => {},
  onMountActionsHandler: () => {},
});

export const WidgetActionsProvider = ({
  internalRoutesConverter,
  onCallBack,
  children,
}: WidgetActionsProviderTypes) => {
  const router = useRouter();
  const { getQueryParams } = useQueryParamsHandler();
  const { popUpHandler, popUp } = usePopUpHandlers();

  // # onMountActionsList (the 'actions' list sent from back-end)
  const [onMountActionsList, setOnMountActionsList] = useState<null | ActionTypes[]>(null);
  const [onMountActionsListIndex, setOnMountActionsListIndex] = useState<null | number>(null);

  const onMountActionsHandler = (v: ActionTypes[]) => {
    setOnMountActionsList(v);
    setOnMountActionsListIndex(0);
  };

  useEffect(() => {
    if (onMountActionsList !== null && onMountActionsListIndex !== null) {
      actionHandler(onMountActionsList[onMountActionsListIndex]);
    }
  }, [onMountActionsList, onMountActionsListIndex]);

  // # actionList (simple actions in format of array)
  const [actionList, setActionList] = useState<null | ActionTypes[]>(null);
  const [actionListIndex, setActionListIndex] = useState<null | number>(null);

  const actionListHandler: ActionListHandlerTypes = (v) => {
    if (actionList === null) {
      setActionList(v);
    } else {
      setActionList([...actionList, ...v]);
    }

    if (actionListIndex === null) {
      setActionListIndex(0);
    } else {
      setActionListIndex(actionListIndex + 1);
    }
  };

  useEffect(() => {
    if (actionList !== null && actionListIndex !== null) {
      const action = actionList[actionListIndex];
      actionsFinder(action);
    }
  }, [actionList, actionListIndex]);

  // # Action complete handlers
  const { isCurrentNextStepFinished, isCurrentNextStepFinishedHandler } = useIsCurrentNextStepFinished();

  const onMountActionsCompleteHandler = () => {
    if (onMountActionsList !== null && onMountActionsListIndex !== null) {
      if (onMountActionsListIndex >= onMountActionsList.length - 1) {
        setOnMountActionsList(null);
        setOnMountActionsListIndex(null);
      } else {
        setOnMountActionsListIndex(onMountActionsListIndex + 1);
      }
    }
  };

  const actionCompleteHandler = () => {
    if (actionList !== null && actionListIndex !== null) {
      const isStoryOpen = getQueryParams(STORY_MODAL_ID) !== null;

      if (isStoryOpen) {
        router.back();
      }

      if (actionListIndex >= actionList.length - 1) {
        popUpHandler(null);
        setActionList(null);
        setActionListIndex(null);
        onMountActionsCompleteHandler();

        const isPopupOpen = getQueryParams(WIDGET_POPUP) !== null;

        if (isPopupOpen) {
          router.back();
          isCurrentNextStepFinishedHandler(true);
        }
      } else {
        setActionListIndex(actionListIndex + 1);
      }
    } else {
      popUpHandler(null);
    }
  };

  const nextStepCompleteHandler = () => {
    // # If the 'isCurrentNextStepFinished' be false, it means the actionList (nextStep) did not completed. Because the modal was closed by user.
    if (!isCurrentNextStepFinished) {
      // popUpHandler(null);
      // setActionList(null);
      // setActionListIndex(null);
      onMountActionsCompleteHandler();
    }
  };

  // # Action types & handlers
  const { actionHandler, actionsFinder } = useActionTypes({
    actionList,
    onCallBack,
    popUpHandler,
    actionListIndex,
    actionListHandler,
    actionCompleteHandler,
    nextStepCompleteHandler,
    internalRoutesConverter,
    isCurrentNextStepFinishedHandler,
    actionListValueHandler: (v) => setActionList(v),
    actionListIndexValueHandler: (v) => setActionListIndex(v),
  });

  // # Reset all the values by changing the page
  useResetOnPageChange(() => {
    setActionList(null);
    setActionListIndex(null);
    setOnMountActionsList(null);
    setOnMountActionsListIndex(null);
  });

  return (
    <WidgetActionsContext.Provider value={{ actionHandler, onMountActionsHandler }}>
      <OnMountActionsProvider>
        <>{children}</>
      </OnMountActionsProvider>

      <WidgetActionsPopup popUp={popUp} actionCompleteHandler={actionCompleteHandler} />
    </WidgetActionsContext.Provider>
  );
};
