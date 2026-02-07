import { ShareExperienceFollowItemModulePropsType } from '../../type';

export type UseFollowUserPropsHandler = Pick<ShareExperienceFollowItemModulePropsType, 'pageType' | 'userId'> & {
  itemId: string;
  isFollow: boolean;
  userName: string;
};
