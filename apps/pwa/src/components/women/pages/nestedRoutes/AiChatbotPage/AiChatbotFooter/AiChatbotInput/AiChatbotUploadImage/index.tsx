import { useState } from 'react';

import UploadIcon from '@assets/icons/Paperclip-1.svg';

import useTheme from '@hooks/useTheme';

import UploadImagesMoreAction from './UploadImagesMoreAction';
import { AiChatbotUploadImagePropsType } from './type';

const AiChatbotUploadImage = ({ fileUploadHandler }: AiChatbotUploadImagePropsType) => {
  const [isOpenMoreAction, setIsOpenMoreAction] = useState(false);
  const { colors } = useTheme();

  const closeHandler = () => {
    setIsOpenMoreAction((prev) => !prev);
  };

  return (
    <>
      <div
        className="w-14 h-14 rounded-full glass-card !bg-white/60 shadow-sm flex justify-center items-center"
        onClick={closeHandler}
      >
        <UploadIcon className="w-7 h-auto" style={{ stroke: colors.Surface_InverseSurface }} />
      </div>
      <UploadImagesMoreAction
        isOpen={isOpenMoreAction}
        closeHandler={closeHandler}
        fileUploadHandler={fileUploadHandler}
      />
    </>
  );
};

export default AiChatbotUploadImage;
