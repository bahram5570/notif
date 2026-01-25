import { CommentPropsType } from '../AiTopicList/type';
import { ShortcutType } from '../__hooks__/useGetTopicList/type';

export interface AiTopicChatbotShortcutPropsType extends Pick<CommentPropsType, 'onLinkHandler'> {
  shortcut: ShortcutType;
}
