import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import AiChatbotDeactiveMessage from './AiChatbotDeactiveMessage';
import AiChatbotInput from './AiChatbotInput';
import { AiChatbotFooterPropsType } from './type';

const AiChatbotFooter = (props: AiChatbotFooterPropsType) => {
  const showInput = props.isActive ? true : false;

  return (
    <div
      className="fixed w-full mx-auto left-0 right-0 bottom-0   z-30"
      style={{
        maxWidth: MAX_SCREEN_WIDTH,
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
          <AiChatbotInput {...props} />
          <div
            className="flex justify-center items-center py-2 w-full"
            style={{ background: `${props.hasChatData ? 'rgb(239 241 254)' : 'inherit'}` }}
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
