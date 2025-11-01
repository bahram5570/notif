import { WelcomingTypeEnum } from './enum';

type TopicWelcomingDataTypes = {
  welcomingType: WelcomingTypeEnum.TopicsPage;
};

type ChatbotWelcomingDataTypes = {
  welcomingType: WelcomingTypeEnum.ChatbotMessage;
  questions: string[];
  description: string;
  title: string;
  defaultQustionHandler: (text: string) => void;
};

export type WelcomingDataType = TopicWelcomingDataTypes | ChatbotWelcomingDataTypes;

export type WelcomingContainerPropsType = WelcomingDataType & {
  onUpdateKeyHandler?: () => void;
};
