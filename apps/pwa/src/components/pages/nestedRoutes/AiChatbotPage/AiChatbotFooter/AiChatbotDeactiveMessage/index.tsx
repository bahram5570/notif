import chatbotJson from '@assets/lottie/chatbot.json';

import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import useAnalytics from '@hooks/useAnalytics';
import useWidgetActions from '@hooks/useWidgetActions';
import { LottieJson } from '@lib/LottieJson';

import { AiChatbotDeactiveMessagePropsType } from './type';

const AiChatbotDeactiveMessage = ({ deactiveMessage, title, deactiveButton }: AiChatbotDeactiveMessagePropsType) => {
  const { actionHandler } = useWidgetActions();
  const { callEvent } = useAnalytics({ pageView_eventName: 'ChatbotInteractionButtonSeen' });

  const onClick = () => {
    callEvent('ChatbotInteractionClick');
    actionHandler(deactiveButton.action);
  };

  return (
    <div className="flex flex-col  relative mx-4 my-3 rounded-3xl gap-3 p-4 glass-card !bg-white/60 ">
      <div className="flex flex-row-reverse ">
        <LottieJson animationData={chatbotJson} loop={false} autoPlay={false} className="w-14 h-14" />

        <div className="flex flex-col justify-center items-end ">
          <Dark_Typography fontSize="Lable_MediumProminet" className="text-impo_Neutral_OnBackground">
            {title}
          </Dark_Typography>
          <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
            {deactiveMessage}
          </Dark_Typography>
        </div>
      </div>
      {deactiveButton && (
        <Dark_Button onClick={onClick}>
          <Dark_Typography fontSize="Lable_Medium" className="text-impo_White">
            {deactiveButton.text}
          </Dark_Typography>
        </Dark_Button>
      )}
    </div>
  );
};

export default AiChatbotDeactiveMessage;
