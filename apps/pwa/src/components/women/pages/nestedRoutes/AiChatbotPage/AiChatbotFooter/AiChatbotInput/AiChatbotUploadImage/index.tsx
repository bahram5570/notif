import { useState } from 'react';

import UploadIcon from '@assets/icons/Paperclip-1.svg';

import useTheme from '@hooks/useTheme';

import UploadImagesMoreAction from './UploadImagesMoreAction';
import { AiChatbotUploadImagePropsType } from './type';

const AiChatbotUploadImage = ({ fileDataHandler, disableBtn }: AiChatbotUploadImagePropsType) => {
  const [isOpenMoreAction, setIsOpenMoreAction] = useState(false);
  const { colors } = useTheme();

  const closeHandler = () => {
    if (disableBtn) {
      return;
    }
    setIsOpenMoreAction((prev) => !prev);
  };

  return (
    <>
      <div
        className={`!w-14 !h-14 rounded-full glass-card !bg-white/60 shadow-sm flex justify-center items-center ${disableBtn && 'pointer-events-none'}`}
        onClick={closeHandler}
      >
        <UploadIcon
          className="w-7 h-auto"
          style={{ stroke: disableBtn ? colors.Surface_OutlineVariant : colors.Surface_InverseSurface }}
        />
      </div>
      <UploadImagesMoreAction isOpen={isOpenMoreAction} closeHandler={closeHandler} fileDataHandler={fileDataHandler} />
    </>
  );
};

export default AiChatbotUploadImage;
