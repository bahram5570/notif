import { WelcomingContainerPropsType } from '../WelcomingContainer/type';

type ItemType = Pick<WelcomingContainerPropsType, 'welcomingType'>;

export interface AiChatbotHeaderPropsType extends ItemType {
  chatId?: string;
  showActionMenu: boolean;
  disableDeleteBtn?: boolean;
  chatTitle?: string;
}
