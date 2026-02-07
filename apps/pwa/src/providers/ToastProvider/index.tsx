'use client';

import { createContext } from 'react';
import { createPortal } from 'react-dom';
import { ToastContainer } from 'react-toastify';

import { PORTAL_FEEDBACK_TOAST_ID } from '@constants/app.constants';

import FeedbackToast from './FeedbackToast';
import useFeedBackToast from './__hooks__/useFeedBackToast';
import useNotifyToast from './__hooks__/useNotifyToast';
import { ToastContextType } from './types';

export const ToastContext = createContext<ToastContextType>({
  feedbackToastHandler: () => {},
  notifyToastHandler: () => {},
});

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const { toastHandler } = useNotifyToast();
  const { feedbackToastHandler, toastData, visible } = useFeedBackToast();

  return (
    <>
      {visible &&
        window !== undefined &&
        createPortal(
          <>
            <FeedbackToast toastData={toastData} visible={visible} />
          </>,
          document.getElementById(PORTAL_FEEDBACK_TOAST_ID) as Element,
        )}
      <ToastContext.Provider value={{ feedbackToastHandler, notifyToastHandler: toastHandler }}>
        {children}
        <ToastContainer />
      </ToastContext.Provider>
    </>
  );
};

export default ToastProvider;
