import { StoryItemType } from '@components/pages/webView/SympathyContainer/type';

export type StorySectionPropsType = {
  title: string;
  storyList: StoryItemType[];
};

export type ItemTypePropsType = Pick<StorySectionPropsType, 'storyList'>['storyList'][0];
export type IsOpenHandlerPropsType = (b: boolean, id: string | undefined) => void;

export type StoryItemPropsType = ItemTypePropsType & {
  isOpenHandler: IsOpenHandlerPropsType;
};
