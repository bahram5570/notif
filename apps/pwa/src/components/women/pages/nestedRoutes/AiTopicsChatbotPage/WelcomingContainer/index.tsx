import { useEffect, useRef, useState } from 'react';

import chatbotJson from '@assets/lottie/chatbot.json';

import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import { LottieJson } from '@lib/LottieJson';

import ChatbotMessageWelcoming from './ChatbotMessageWelcoming';
import TopicsChatbotWelcoming from './TopicsChatbotWelcoming';
import { WelcomingTypeEnum } from './enum';
import { WelcomingContainerPropsType } from './type';

const WelcomingContainer = (props: WelcomingContainerPropsType) => {
  let CurrentWelcoming: JSX.Element | null = null;
  const lottieRef = useRef<HTMLDivElement | null>(null);
  const [top, setTop] = useState<number>(0);

  useEffect(() => {
    const updateTop = () => {
      if (!lottieRef.current) return;
      const rect = lottieRef.current.getBoundingClientRect();
      setTop(rect.height * 0.7);
    };

    updateTop();
    window.addEventListener('resize', updateTop);
    return () => window.removeEventListener('resize', updateTop);
  }, []);

  switch (props.welcomingType) {
    case WelcomingTypeEnum.TopicsPage:
      CurrentWelcoming = <TopicsChatbotWelcoming top={top} onUpdateKeyHandler={props.onUpdateKeyHandler} />;
      break;
    case WelcomingTypeEnum.ChatbotMessage:
      CurrentWelcoming = (
        <ChatbotMessageWelcoming
          top={top}
          description={props.description}
          questions={props.questions}
          title={props.title}
          defaultQustionHandler={props.defaultQustionHandler}
        />
      );
      break;
  }

  const WrappedWelcoming = CurrentWelcoming ? <>{CurrentWelcoming}</> : null;

  return (
    <div
      style={{
        background:
          'linear-gradient(360deg, #D7BAFD -15.17%, rgba(194, 211, 251, 0.8) 30.1%, rgba(199, 234, 241, 0.5) 75.9%, rgba(230, 240, 232, 0.5) 104.51%) ',
      }}
      className="flex flex-col min-h-[100dvh] overflow-y-auto"
    >
      <>
        <div style={{ paddingTop: HEADER_HEIGHT - 20 }} className="h-full relative">
          <div ref={lottieRef} className="flex-1 flex items-center justify-center overflow-hidden">
            <LottieJson animationData={chatbotJson} loop={true} autoPlay={true} width={500} />
          </div>

          {WrappedWelcoming}
        </div>
      </>
    </div>
  );
};

export default WelcomingContainer;
