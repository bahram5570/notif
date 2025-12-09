import ChatbotMessageWelcoming from './ChatbotMessageWelcoming';
import TopicsChatbotWelcoming from './TopicsChatbotWelcoming';
import WelcomingLayout from './WelcomingLayout';
import useTop from './__hooks__/useTop';
import { WelcomingTypeEnum } from './enum';
import { WelcomingContainerPropsType } from './type';

const WelcomingContainer = (props: WelcomingContainerPropsType) => {
  let CurrentWelcoming: JSX.Element | null = null;
  const { lottieRef, top } = useTop();

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

  return <WelcomingLayout lottieRef={lottieRef}>{WrappedWelcoming}</WelcomingLayout>;
};

export default WelcomingContainer;
