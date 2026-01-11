'use client';

import { createContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import InfoIcon from '@assets/icons/infoIcon.svg';
import TickIcon from '@assets/icons/tickIcon.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import CustomToastProvider from './CustomToastProvider';
import { OptionTypes, ToastTypes } from './types';

export const ToastContext = createContext<ToastTypes>({ onToast: () => {} });

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const { colors } = useTheme();

  const toastHandler = ({
    message,
    duration,
    type = 'success',
    // icon = 'success',
    englishNumbers = false,
    position = 'top-right',
    style,
  }: OptionTypes) => {
    const iconsList = {
      warning: <InfoIcon className="w-5 h-auto" style={{ fill: colors.Yellow }} />,
      success: <TickIcon className="w-4 h-auto" style={{ fill: colors.Success_Success }} />,
      error: <InfoIcon className="w-5 h-auto" style={{ fill: colors.Error_Error }} />,
    };

    const backgroundColorsList = {
      error: colors.Error_ErrorContainer,
      success: colors.Success_SuccessContainer,
      warning: colors.Warning_WarininContainer,
    };

    const borderColorList = {
      error: colors.Error_Error,
      success: colors.Success_Success,
      warning: colors.Warning_Warning,
    };

    const content = (
      <div className="flex items-center gap-2">
        {iconsList[type]}

        <div className="w-[1px] h-7 block" style={{ backgroundColor: colors.Surface_OnSurfaceVariant }} />

        <Typography toEnglishNumber={englishNumbers} scale="Lable" size="Large" color="Surface_InverseSurface">
          {message}
        </Typography>
      </div>
    );

    toast(content, {
      rtl: true,
      theme: 'colored',
      position: position,
      autoClose: duration || 3000,
      progressStyle: { backgroundColor: colors.Grey_600 },
      closeButton: false,
      closeOnClick: true,
      style: {
        backgroundColor: backgroundColorsList[type],
        borderColor: borderColorList[type],
        borderStyle: 'solid',
        borderRadius: '12px',
        borderWidth: '2px',
        margin: '32px',
        ...style,
      },
    });
  };

  return (
    <ToastContext.Provider value={{ onToast: toastHandler }}>
      <CustomToastProvider>{children}</CustomToastProvider>

      <ToastContainer />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
