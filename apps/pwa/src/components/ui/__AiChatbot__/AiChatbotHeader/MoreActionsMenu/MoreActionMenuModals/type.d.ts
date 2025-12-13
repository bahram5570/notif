import { AiChatbotMoreActionsMenuBtnPropsType } from '../../AiChatbotMoreActionsMenuBtn/type';

export type MoreActionMenuModalsPropsType = Pick<AiChatbotMoreActionsMenuBtnPropsType, 'chatId'> & {};

export type CommenPropsType = {
  onCloseModal: () => void;
};
