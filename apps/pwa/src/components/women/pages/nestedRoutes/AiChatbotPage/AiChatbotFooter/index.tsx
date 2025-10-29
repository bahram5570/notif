import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import AiChatbotDeactiveMessage from './AiChatbotDeactiveMessage';
import AiChatbotInput from './AiChatbotInput';
import { AiChatbotFooterPropsType } from './type';

const AiChatbotFooter = (props: AiChatbotFooterPropsType) => {
  const showInput = props.isActive ? true : false;
  return (
    <div className="fixed w-full mx-auto left-0 right-0 bottom-0 z-[100]  " style={{ maxWidth: MAX_SCREEN_WIDTH }}>
      <div className="relative">
        {!showInput && (
          <AiChatbotDeactiveMessage
            deactiveMessage={props.deactiveMessage}
            title={props.title}
            deactiveButton={props.deactiveButton}
          />
        )}
        {showInput && (
          <div className="flex flex-col py-4 justify-center items-center">
            <AiChatbotInput {...props} />
            <Typography scale="Lable" size="Small" color="Surface_OnSurfaceVariant">
              مونس هم گاهی اشتباه می‌کنه! حتماً جواب‌ها رو چک کن.
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiChatbotFooter;
