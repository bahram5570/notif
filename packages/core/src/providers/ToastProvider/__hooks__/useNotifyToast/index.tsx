import { toast } from 'react-toastify';

import { CustomTypography } from '../../../../components/ui/CustomTypography';
import InfoIcon from '@assets/shared/icons/infoIcon.svg';
import TickIcon from '@assets/shared/icons/tickIcon.svg';

import { OptionTypes } from '../../types';

const useNotifyToast = () => {
  const toastHandler = ({
    englishNumbers = false,
    position = 'top-right',
    // icon = 'success',
    type = 'success',
    duration,
    message,
    style,
  }: OptionTypes) => {
    const iconsList = {
      warning: <InfoIcon className="w-5 h-auto fill-impo_Yellow" />,
      error: <InfoIcon className="w-5 h-auto fill-impo_Error_Error" />,
      success: <TickIcon className="w-4 h-auto fill-impo_Success_Success" />,
    };

    const backgroundColorsList = {
      error: '#fce6e6',
      success: '#e5f2ec',
      warning: '#ffedd5',
    };

    const borderColorList = {
      error: '#ef4444',
      success: '#34b288',
      warning: '#f5900b',
    };

    const content = (
      <div className="flex items-center gap-2">
        {iconsList[type]}

        <div className="w-[1px] h-7 block bg-impo_Surface_OnSurfaceVariant" />

        <CustomTypography
          fontSize="Body_Small"
          className="text-impo_Black"
          numbersMode={englishNumbers ? 'english' : 'persian'}
        >
          {message}
        </CustomTypography>
      </div>
    );

    toast(content, {
      progressStyle: { backgroundColor: '#8d8d8d' },
      autoClose: duration || 3000,
      closeButton: false,
      closeOnClick: true,
      position: position,
      theme: 'colored',
      rtl: true,
      style: {
        ...style,
        margin: '32px',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderRadius: '12px',
        borderColor: borderColorList[type],
        backgroundColor: backgroundColorsList[type],
      },
    });
  };

  return { toastHandler };
};

export default useNotifyToast;
