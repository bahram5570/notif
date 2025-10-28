import { ClinicChatbotTemporaryButtonPropsType } from '../type';

type ChatbotType = Pick<ClinicChatbotTemporaryButtonPropsType, 'chatbot'>['chatbot'];
type ItemType = Pick<ChatbotType, 'continueChatText' | 'collapseText1' | 'collapseText2' | 'goToChatAction'>;

export interface ChatbotNavbarModePropsType extends ItemType {}
