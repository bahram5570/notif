import { FollowerResponseType } from '../../ShareExperienceModals/ShareExperienceFollower/ShareExperienceFollowerModalContainer/__hooks__/useGetFollowerData/type';

export type ShareExperienceFollowListModulePropsType = Pick<FollowerResponseType, 'items'> & {
  EmptyStateScript: string;
};

export type EmptyStatePropsType = Pick<ShareExperienceFollowListModulePropsType, 'EmptyStateScript'>;
