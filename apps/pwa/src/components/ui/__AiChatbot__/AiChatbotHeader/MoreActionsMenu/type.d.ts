import { AiChatbotHeaderPropsType } from '../type';

type ItemType = Pick<AiChatbotHeaderPropsType, 'showSuggestionBtn' | 'disableDeleteBtn'>;
export interface MoreActionsMenuPropsType extends ItemType {
  isOpen: boolean;
  closeHandler: () => void;
}
