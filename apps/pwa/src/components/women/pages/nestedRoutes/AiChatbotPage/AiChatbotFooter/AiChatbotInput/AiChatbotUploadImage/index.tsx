import { useState } from 'react';

import UploadIcon from '@assets/icons/Paperclip-1.svg';

import Button from '@components/ui/Button';
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
      <Button
        size="small"
        variant="fill"
        color="FREE-STYLES"
        buttonColor=""
        contentsColor=""
        isDisable={disableBtn}
        className="!w-14 !h-14 rounded-full glass-card !bg-white/60 shadow-sm flex justify-center items-center"
        onClick={closeHandler}
      >
        <UploadIcon className="w-7 h-auto" style={{ stroke: colors.Surface_InverseSurface }} />
      </Button>
      <UploadImagesMoreAction isOpen={isOpenMoreAction} closeHandler={closeHandler} fileDataHandler={fileDataHandler} />
    </>
  );
};

export default AiChatbotUploadImage;
