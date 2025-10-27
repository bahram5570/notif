import chatbotJson from '@assets/lottie/chatbot.json';

import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import { LottieJson } from '@lib/LottieJson';

import AiChatbotHeader from '../AiChatbotHeader';
import ChatbotMessageWelcoming from './ChatbotMessageWelcoming';
import TopicsChatbotWelcoming from './TopicsChatbotWelcoming';
import { WelcomingTypeEnum } from './enum';
import { WelcomingContainerPropsType } from './type';

const WelcomingContainer = ({ welcomingType }: WelcomingContainerPropsType) => {
  let CurrentWelcoming: JSX.Element | null = null;

  switch (welcomingType) {
    case WelcomingTypeEnum.TopicsPage:
      CurrentWelcoming = <TopicsChatbotWelcoming />;
      break;
    case WelcomingTypeEnum.ChatbotMessage:
      CurrentWelcoming = <ChatbotMessageWelcoming />;
      break;
  }

  const WrappedWelcoming = CurrentWelcoming ? <div className="pt-6">{CurrentWelcoming}</div> : null;

  return (
    <div
      style={{
        background:
          'linear-gradient(360deg, #D7BAFD -15.17%, rgba(194, 211, 251, 0.8) 30.1%, rgba(199, 234, 241, 0.5) 75.9%, rgba(230, 240, 232, 0.5) 104.51%)',
      }}
      className="min-h-screen relative"
    >
      <>
        <AiChatbotHeader welcomingType={welcomingType} />
        <div style={{ paddingTop: HEADER_HEIGHT + 20 }} className="min-h-[100dvh]">
          <LottieJson animationData={chatbotJson} loop={true} autoPlay={true} />
          {WrappedWelcoming}
        </div>
      </>
    </div>
  );
};

export default WelcomingContainer;
