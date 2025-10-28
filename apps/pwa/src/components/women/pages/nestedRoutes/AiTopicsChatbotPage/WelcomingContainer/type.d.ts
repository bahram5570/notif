import { WelcomingTypeEnum } from './enum';

type TopicWelcomingDataTypes = {
  welcomingType: WelcomingTypeEnum.TopicsPage;
};

type ChatbotWelcomingDataTypes = {
  welcomingType: WelcomingTypeEnum.ChatbotMessage;
  questions: string[];
  hintPromptText: string;
  description: string;
  title: string;
};

export type WelcomingDataType = TopicWelcomingDataTypes | ChatbotWelcomingDataTypes;

export type WelcomingContainerPropsType = WelcomingDataType & {
  onUpdateKeyHandler?: () => void;
};
