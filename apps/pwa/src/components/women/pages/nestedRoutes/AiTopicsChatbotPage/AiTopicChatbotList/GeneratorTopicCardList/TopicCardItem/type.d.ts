import { GeneratorTopicCardListPropsType } from '../type';

type ItemType = Pick<GeneratorTopicCardListPropsType, 'topics'>['topics'][0];

export interface TopicCardItemPropsType extends ItemType {}
