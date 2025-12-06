import { useEffect, useState } from 'react';

import Typography from '@components/ui/Typography';
import { FOOTER_HEIGTH } from '@components/women/WomenFooter/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import AiChatbotDeactiveMessage from './AiChatbotDeactiveMessage';
import AiChatbotInput from './AiChatbotInput';
import { AiChatbotFooterPropsType } from './type';

const AiChatbotFooter = (props: AiChatbotFooterPropsType) => {
  const showInput = props.isActive ? true : false;
  const [btnTop, setBtnTop] = useState<number>(0);

  const btnTopHandler = (top: number) => {
    setBtnTop(top);
  };

  return (
    <div
      className="fixed w-full mx-auto left-0 right-0   z-40"
      style={{
        maxWidth: MAX_SCREEN_WIDTH,
        bottom: btnTop,
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
            style={{ background: `${props.hasChatData ? 'rgb(239 241 254)' : btnTop ? '#d5e0fc' : 'inherit'}` }}
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
