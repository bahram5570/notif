import { FollowerResponseType } from '../../ShareExperienceModals/ShareExperienceFollower/ShareExperienceFollowerModalContainer/__hooks__/useGetFollowerData/type';

export type ShareExperienceFollowListModulePropsType = {
  EmptyStateScript: string;
  userId: string | undefined;
  pageType: 'following' | 'followers';
};

export type EmptyStatePropsType = Pick<ShareExperienceFollowListModulePropsType, 'EmptyStateScript'>;
