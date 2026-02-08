import { FollowItemType } from '../ShareExperienceFollowListModule/__hooks__/useGetFollowData/type';
import { ShareExperienceFollowListModulePropsType } from '../ShareExperienceFollowListModule/type';

export type DataType = Pick<ShareExperienceFollowListModulePropsType, 'pageType' | 'userId'>;

export interface ShareExperienceFollowItemModulePropsType extends DataType {
  isLastItem: boolean;
  item: FollowItemType;
}
