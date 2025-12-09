import { AiChatbotMoreActionsMenuBtnPropsType } from '../../AiChatbotMoreActionsMenuBtn/type';

export type MoreActionMenuModalsPropsType = Pick<
  AiChatbotMoreActionsMenuBtnPropsType,
  'categoryIdData' | 'itemIdData' | 'chatId'
> & {};

export type CommenPropsType = Pick<MoreActionMenuModalsPropsType, 'chatId' | 'categoryIdData' | 'itemIdData'> & {
  onCloseModal: () => void;
};
