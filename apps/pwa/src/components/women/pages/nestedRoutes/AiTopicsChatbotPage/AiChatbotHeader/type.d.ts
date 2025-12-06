import { WelcomingContainerPropsType } from '../WelcomingContainer/type';

type ItemType = Pick<WelcomingContainerPropsType, 'welcomingType'>;

export interface AiChatbotHeaderPropsType extends ItemType {
  chatId?: string;
  showActionMenu: boolean;
  disableDeleteBtn?: boolean;
  chatTitle?: string;
  itemIdData?: string | null;
  categoryIdData?: string | null;
  imageType?: boolean;
  imageUsageLimit?: number;
  currentImageUsage?: number;
  mediaLimitDate?: string;
}
