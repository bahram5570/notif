'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

import Typography from '@components/ui/Typography';
import { data } from '@components/women/pages/nestedRoutes/routin/RoutinTabsPage/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

interface ToastData {
  message: string;
  description?: string;
  isCopyToast?: boolean;
  duration?: number;
}

interface ToastContextType {
  showToast: (data: ToastData) => void;
}

export const ToastContext = createContext<ToastContextType>({ showToast: () => {} });

interface CustomToastProviderPropsType {
  children: React.ReactNode;
}

const CustomToastProvider = ({ children }: CustomToastProviderPropsType) => {
  const [toastData, setToastData] = useState<ToastData | null>(null);
  const [visible, setVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const { colors } = useTheme();

  const showToast = useCallback((data: ToastData) => {
    setToastData(data);
    setShouldRender(true);
    requestAnimationFrame(() => setVisible(true));

    const hideTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => setShouldRender(false), 500);
    }, data.duration || 3000);

    return () => clearTimeout(hideTimer);
  }, []);

  useEffect(() => {
    return () => setShouldRender(false);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <div
        className={`fixed inset-0 flex justify-center items-center mx-auto pointer-events-none transition-all duration-500 ease-in-out z-50 max-w-40 px-6 ${
          visible ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{
          background: `${!toastData?.isCopyToast ? 'rgba(0, 0, 0, 0.16)' : ''}`,
          backdropFilter: `${!toastData?.isCopyToast ? 'blur(2.5px)' : ''}`,
          maxWidth: MAX_SCREEN_WIDTH,
        }}
      >
        {shouldRender && (
          <div
            className={`  flex flex-col justify-center items-center gap-2 ${toastData?.isCopyToast ? 'rounded-lg py-3 px-4' : 'rounded-3xl py-6 px-4'}`}
            style={{ background: `${toastData?.isCopyToast ? colors.Surface_InverseSurface : colors.Neutral_Surface}` }}
          >
            {toastData?.isCopyToast ? (
              <Typography scale="Body" size="Small" className="px-8" color="Surface_InverseOnSurface">
                {toastData?.message}
              </Typography>
            ) : (
              <Typography scale="Title" size="Small">
                {toastData?.message}
              </Typography>
            )}

            {toastData?.description && (
              <Typography
                scale="Body"
                size="Medium"
                color={toastData?.isCopyToast ? 'Surface_InverseOnSurface' : 'Surface_InverseSurface'}
                textAlign="center"
              >
                {toastData.description}
              </Typography>
            )}
          </div>
        )}
      </div>
    </ToastContext.Provider>
  );
};

export default CustomToastProvider;

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);

  return context;
};
