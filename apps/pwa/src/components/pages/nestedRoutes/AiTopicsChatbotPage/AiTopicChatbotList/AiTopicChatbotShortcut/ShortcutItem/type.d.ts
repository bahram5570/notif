import { AiTopicChatbotShortcutPropsType } from '../type';

type ItemType = Pick<AiTopicChatbotShortcutPropsType, 'shortcut'>['shortcut']['shortcuts'][0];
type OtherType = Pick<AiTopicChatbotShortcutPropsType, 'categoryId'>;

export interface ShortcutItemPropsType extends ItemType {
  onLinkHandler: (id: string) => void;
}
