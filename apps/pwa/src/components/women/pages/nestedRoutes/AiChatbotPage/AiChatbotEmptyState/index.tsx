import WelcomingContainer from '../../AiTopicsChatbotPage/WelcomingContainer';
import { WelcomingTypeEnum } from '../../AiTopicsChatbotPage/WelcomingContainer/enum';
import { AiChatbotEmptyStatePropsType } from './type';

const AiChatbotEmptyState = (props: AiChatbotEmptyStatePropsType) => {
  return (
    <>
      <WelcomingContainer
        welcomingType={WelcomingTypeEnum.ChatbotMessage}
        title={props.title}
        questions={props.questions}
        description={props.description}
        defaultQustionHandler={props.defaultQustionHandler}
      />
    </>
  );
};

export default AiChatbotEmptyState;
