import { AiChatbotHeaderPropsType } from '../type';

type ItemType = Pick<AiChatbotHeaderPropsType, 'welcomingType' | 'disableDeleteBtn'>;
export interface MoreActionsMenuPropsType extends ItemType {
  isOpen: boolean;
  closeHandler: () => void;
}
