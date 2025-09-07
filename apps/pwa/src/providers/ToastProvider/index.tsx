'use client';

import { createContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import InfoIcon from '@assets/icons/infoIcon.svg';
import TickIcon from '@assets/icons/tickIcon.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { OptionTypes, ToastTypes } from './types';

export const ToastContext = createContext<ToastTypes>({ onToast: () => {} });

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const { colors } = useTheme();

  const toastHandler = ({
    message,
    duration,
    type = 'normal',
    icon = 'info',
    englishNumbers = false,
    position = 'top-right',
    style,
  }: OptionTypes) => {
    const iconsList = {
      info: <InfoIcon className="w-5 h-auto" style={{ fill: colors.Yellow }} />,
      success: <TickIcon className="w-4 h-auto" style={{ fill: colors.Success_Success }} />,
    };
    const colorsList = {
      error: colors.Error_ErrorContainer,
      success: colors.Success_SuccessContainer,
      normal: colors.Surface_InverseSurface,
    };

    const borderColorList = {
      error: colors.Error_Error,
      success: colors.Success_Success,
      normal: colors.Surface_InverseSurface,
    };

    const content = (
      <div className="flex items-center gap-2">
        {iconsList[icon]}

        <div className="w-[1px] h-7 block" style={{ backgroundColor: colors.Surface_OnSurfaceVariant }} />

        <Typography toEnglishNumber={englishNumbers} scale="Body" size="Small">
          {message}
        </Typography>
      </div>
    );

    toast(content, {
      rtl: true,
      theme: 'dark',
      position: position,
      autoClose: duration || 3000,
      progressStyle: { backgroundColor: colors.Grey_600 },
      closeButton: false,
      closeOnClick: true,
      style: {
        ...style,
        backgroundColor: colorsList[type],
        borderColor: borderColorList[type],
        borderStyle: 'solid',
        borderRadius: '12px',
        borderWidth: '2px',
        // margin: '32px',
      },
    });
  };

  return (
    <ToastContext.Provider value={{ onToast: toastHandler }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
