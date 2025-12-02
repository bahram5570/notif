import { AiChatbotHeaderPropsType } from '../type';

export type AiChatbotMoreActionsMenuBtnPropsType = Pick<
  AiChatbotHeaderPropsType,
  'chatId' | 'disableDeleteBtn' | 'welcomingType' | 'categoryIdData' | 'itemIdData'
> & {};
