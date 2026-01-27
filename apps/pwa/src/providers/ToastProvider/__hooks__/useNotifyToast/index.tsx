import { toast } from 'react-toastify';

import InfoIcon from '@assets/icons/infoIcon.svg';
import TickIcon from '@assets/icons/tickIcon.svg';

import Dark_Typography from '@components/ui/Dark_Typography';
import { OptionTypes } from '@providers/ToastProvider/types';

const useNotifyToast = () => {
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

        <Dark_Typography
          fontSize="Body_Small"
          className="text-impo_Black"
          numbersMode={englishNumbers ? 'english' : 'persian'}
        >
          {message}
        </Dark_Typography>
      </div>
    );

    toast(content, {
      rtl: true,
      theme: 'colored',
      position: position,
      closeButton: false,
      closeOnClick: true,
      autoClose: duration || 3000,
      progressStyle: { backgroundColor: '#8d8d8d' },
      style: {
        ...style,
        backgroundColor: backgroundColorsList[type],
        borderColor: borderColorList[type],
        borderStyle: 'solid',
        borderRadius: '12px',
        borderWidth: '2px',
        margin: '32px',
      },
    });
  };

  return { toastHandler };
};

export default useNotifyToast;
