import { AccessType } from '@repo/core/components/ShareExperience';

import { ShareExperienceFollowItemModulePropsType } from '../../type';

export type UseFollowUserPropsHandler = Pick<ShareExperienceFollowItemModulePropsType, 'pageType' | 'userId'> & {
  itemId: string;
  isFollow: boolean;
  userName: string;
};

export type SuccessHandlerProps = AccessType & {
  valid: boolean;
};
