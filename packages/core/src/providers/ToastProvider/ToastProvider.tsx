'use client';

import { createContext } from 'react';
import { ToastContainer } from 'react-toastify';

import FeedbackToast from './FeedbackToast';
import useFeedBackToast from './__hooks__/useFeedBackToast';
import useNotifyToast from './__hooks__/useNotifyToast';
import { ToastContextTypes } from './types';

export const ToastContext = createContext<ToastContextTypes>({
  feedbackToastHandler: () => {},
  notifyToastHandler: () => {},
});

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const { toastHandler } = useNotifyToast();
  const { feedbackToastHandler, toastData, visible } = useFeedBackToast();

  return (
    <ToastContext.Provider value={{ feedbackToastHandler, notifyToastHandler: toastHandler }}>
      <>{children}</>

      <ToastContainer />
      {visible && <FeedbackToast toastData={toastData} visible={visible} />}
    </ToastContext.Provider>
  );
};
