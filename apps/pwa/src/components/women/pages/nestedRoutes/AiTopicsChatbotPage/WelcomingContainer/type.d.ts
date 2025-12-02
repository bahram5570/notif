import { MutableRefObject } from 'react';

import { WelcomingTypeEnum } from './enum';

type TopicWelcomingDataTypes = {
  welcomingType: WelcomingTypeEnum.TopicsPage;
  onUpdateKeyHandler: () => void;
};

type ChatbotWelcomingDataTypes = {
  welcomingType: WelcomingTypeEnum.ChatbotMessage;
  questions: string[];
  description: string;
  title: string;
  defaultQustionHandler: (text: string) => void;
};

export type WelcomingDataType = TopicWelcomingDataTypes | ChatbotWelcomingDataTypes;

export type WelcomingContainerPropsType = WelcomingDataType & {};

export type WelcomingLayoutPropsType = {
  children: React.ReactNode;
  lottieRef: MutableRefObject<HTMLDivElement | null>;
};
