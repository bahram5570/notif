import { useEffect, useRef, useState } from 'react';

import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import AiChatbotDeactiveMessage from './AiChatbotDeactiveMessage';
import AiChatbotInput from './AiChatbotInput';
import UploadImagesMoreAction from './AiChatbotInput/AiChatbotUploadImage/UploadImagesMoreAction';
import useFileUpload from './AiChatbotInput/__hooks__/useFileUpload';
import { AiChatbotFooterPropsType } from './type';

const AiChatbotFooter = (props: AiChatbotFooterPropsType) => {
  const [bottom, setBottom] = useState(0);
  const [btnTop, setBtnTop] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isOpenMoreAction, setIsOpenMoreAction] = useState(false);
  const { files, hasFile, fileDataHandler, removeFileHandler, retryUploadHandler, imageFile, disableBtn } =
    useFileUpload({ activaMedia: props.activaMedia });

  const closeHandler = () => {
    if (disableBtn) {
      return;
    }
    setIsOpenMoreAction((prev) => !prev);
  };
  const showInput = props.isActive ? true : false;

  const btnTopHandler = () => {
    setBtnTop((prev) => !prev);
  };

  useEffect(() => {
    if (!btnTop) return;

    const vv = window.visualViewport;
    if (!vv) return;

    const updatePosition = () => {
      const keyboardHeight = window.innerHeight - (vv.height + vv.offsetTop);

      setBottom(keyboardHeight > 0 ? keyboardHeight : 0);
    };

    vv.addEventListener('resize', updatePosition);
    vv.addEventListener('scroll', updatePosition);

    return () => {
      vv.removeEventListener('resize', updatePosition);
      vv.removeEventListener('scroll', updatePosition);
    };
  }, [btnTop]);

  return (
    <>
      <div
        className="fixed w-full mx-auto left-0 right-0 bottom-0  z-40 transition-transform duration-150"
        style={{
          maxWidth: MAX_SCREEN_WIDTH,
          transform: `translateY(-${bottom}px)`,
          transition: 'transform 0.1s linear',
          willChange: 'transform',
        }}
        id="chat-container"
        ref={containerRef}
      >
        {!showInput && (
          <AiChatbotDeactiveMessage
            deactiveMessage={props.deactiveMessage}
            title={props.title}
            deactiveButton={props.deactiveButton}
          />
        )}
        {showInput && (
          <div className="flex flex-col justify-center items-center">
            <AiChatbotInput
              {...props}
              btnTopHandler={btnTopHandler}
              imageFile={imageFile}
              hasFile={hasFile}
              files={files}
              disableBtn={disableBtn}
              closeHandler={closeHandler}
            />
            <div
              className="flex justify-center items-center  h-10  w-full  "
              style={{
                background: `${props.hasChatData ? 'rgb(239 241 254)' : btnTop > true ? '#d5e0fc' : 'inherit'}`,
              }}
            >
              <Typography scale="Lable" size="Small" color="Surface_OnSurfaceVariant">
                مونس هم گاهی اشتباه می‌کنه! حتماً جواب‌ها رو چک کن.
              </Typography>
            </div>
          </div>
        )}
      </div>
      <UploadImagesMoreAction isOpen={isOpenMoreAction} closeHandler={closeHandler} />
    </>
  );
};

export default AiChatbotFooter;
