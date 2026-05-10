import { ShareExperienceFollowListModulePropsType } from '../../type';

export type UseGetFollowingDataPropsType = Pick<ShareExperienceFollowListModulePropsType, 'userId' | 'pageType'>;

export type FollowItemType = {
  id: string;
  name: string;
  image: string;
  isFollowed: boolean;
  isSheMe: boolean;
};

export type FollowingResponseType = {
  items: FollowItemType[];
};

export type FollowResponseType = {
  items: FollowItemType[];
  totalCount: number;
};

export type FollowQueryDataType = Pick<FollowResponseType, 'items' | 'totalCount'>;
