import { AiChatbotHeaderPropsType } from '../type';

type ItemType = Pick<AiChatbotHeaderPropsType, 'welcomingType'>;
export interface MoreActionsMenuPropsType extends ItemType {
  isOpen: boolean;
  closeHandler: () => void;
}
