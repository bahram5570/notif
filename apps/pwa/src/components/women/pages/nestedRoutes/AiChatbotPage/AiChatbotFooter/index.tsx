import { useEffect, useRef, useState } from 'react';

import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import AiChatbotDeactiveMessage from './AiChatbotDeactiveMessage';
import AiChatbotInput from './AiChatbotInput';
import { AiChatbotFooterPropsType } from './type';

const AiChatbotFooter = (props: AiChatbotFooterPropsType) => {
  const showInput = props.isActive ? true : false;
  const [btnTop, setBtnTop] = useState<number>(0);
  const conainerRef = useRef<HTMLDivElement | null>(null);

  const btnTopHandler = () => {
    setBtnTop(0);
  };

  useEffect(() => {
    const el = conainerRef.current;
    if (el) {
      if (window.visualViewport) {
        window.visualViewport?.addEventListener('resize', () => {
          const viewportHeight = window.visualViewport!.height;
          const windowHeight = window.innerHeight;

          const keyboardHeight = windowHeight - viewportHeight;
          setBtnTop(keyboardHeight);
        });
      }
    }
  }, []);

  return (
    <div
      className="fixed w-full mx-auto left-0 right-0   z-40"
      style={{
        maxWidth: MAX_SCREEN_WIDTH,
        bottom: btnTop,
        transition: 'bottom 0.15s ease-out',
      }}
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
          <AiChatbotInput {...props} btnTopHandler={btnTopHandler} />
          <div
            className="flex justify-center items-center  h-10  w-full  "
            style={{ background: `${props.hasChatData ? 'rgb(239 241 254)' : btnTop > 0 ? '#d5e0fc' : 'inherit'}` }}
          >
            <Typography scale="Lable" size="Small" color="Surface_OnSurfaceVariant">
              مونس هم گاهی اشتباه می‌کنه! حتماً جواب‌ها رو چک کن.
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiChatbotFooter;
