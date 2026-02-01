import { useRef, useState } from 'react';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import AiChatbotDeactiveMessage from './AiChatbotDeactiveMessage';
import AiChatbotInput from './AiChatbotInput';
import UploadImagesMoreAction from './AiChatbotInput/AiChatbotUploadImage/UploadImagesMoreAction';
import { AiChatbotFooterPropsType } from './type';

const AiChatbotFooter = (props: AiChatbotFooterPropsType) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isOpenMoreAction, setIsOpenMoreAction] = useState(false);

  const closeHandler = () => {
    setIsOpenMoreAction((prev) => !prev);
  };
  const showInput = props.isActive ? true : false;

  return (
    <>
      <div
        className="fixed w-full mx-auto left-0 right-0 bottom-0   "
        style={{
          maxWidth: MAX_SCREEN_WIDTH,
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
            <AiChatbotInput {...props} closeHandler={closeHandler} />

            <div
              className="flex justify-center items-center  h-10  w-full dark:!bg-impo_Neutral_Background"
              style={{
                background: `${props.hasChatData ? 'rgb(239 241 254)' : 'inherit'}`,
              }}
            >
              <CustomTypography fontSize="Lable_Small" className="text-impo_Surface_OnSurfaceVariant">
                مونس هم گاهی اشتباه می‌کنه! حتماً جواب‌ها رو چک کن.
              </CustomTypography>
            </div>
          </div>
        )}
      </div>
      <UploadImagesMoreAction isOpen={isOpenMoreAction} closeHandler={closeHandler} />
    </>
  );
};

export default AiChatbotFooter;
