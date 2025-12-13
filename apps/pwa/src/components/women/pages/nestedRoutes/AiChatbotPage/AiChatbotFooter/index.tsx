import { useRef, useState } from 'react';

import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import AiChatbotDeactiveMessage from './AiChatbotDeactiveMessage';
import AiChatbotInput from './AiChatbotInput';
import UploadImagesMoreAction from './AiChatbotInput/AiChatbotUploadImage/UploadImagesMoreAction';
import { AiChatbotFooterPropsType } from './type';

const AiChatbotFooter = (props: AiChatbotFooterPropsType) => {
  const [bottom, setBottom] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isOpenMoreAction, setIsOpenMoreAction] = useState(false);

  const closeHandler = () => {
    setIsOpenMoreAction((prev) => !prev);
  };
  const showInput = props.isActive ? true : false;

  const btnBottomHandler = (v: number) => {
    setBottom(v);
  };

  return (
    <>
      <div
        className="fixed w-full mx-auto left-0 right-0 bottom-0   transition-transform duration-150"
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
            <AiChatbotInput {...props} btnBottomHandler={btnBottomHandler} />

            <div
              className="flex justify-center items-center  h-10  w-full  "
              style={{
                background: `${props.hasChatData ? 'rgb(239 241 254)' : bottom > 0 ? '#d5e0fc' : 'inherit'}`,
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
