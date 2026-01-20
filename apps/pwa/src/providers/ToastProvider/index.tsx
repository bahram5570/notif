'use client';

import { createContext } from 'react';
import { ToastContainer } from 'react-toastify';

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
  const { feedbackToastHandler, shouldRender, toastData, visible } = useFeedBackToast();

  return (
    <ToastContext.Provider value={{ feedbackToastHandler, notifyToastHandler: toastHandler }}>
      {children}
      <ToastContainer />

      <FeedbackToast visible={visible} shouldRender={shouldRender} toastData={toastData} />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
