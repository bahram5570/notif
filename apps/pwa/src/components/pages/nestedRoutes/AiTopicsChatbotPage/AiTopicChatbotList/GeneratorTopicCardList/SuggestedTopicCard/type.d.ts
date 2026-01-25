import { GeneratorTopicCardListPropsType } from '../type';

type ItemType = Pick<GeneratorTopicCardListPropsType, 'topics'>['topics'][0];

export interface SuggestedTopicCardPropsType extends ItemType {
  onLinkHandler: (id: string) => void;
}
