import { ShareExperienceFollowListModulePropsType } from '../ShareExperienceFollowListModule/type';

export type ItemType = Pick<ShareExperienceFollowListModulePropsType, 'items'>['items'][0];

export type ShareExperienceFollowItemModulePropsType = {
  isLastItem: boolean;
  item: ItemType;
};
