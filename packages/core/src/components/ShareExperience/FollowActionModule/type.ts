export type ApiInfoTypes = { userId: string; isFollow: boolean; userName: string };
export type FollowHandlerTypes = (props: ApiInfoTypes) => void;

export type FollowActionModuleProps = {
  isFollowLoading: boolean;
  userId: string;
  name: string;
  experienceId?: string;
  isFollow: boolean;
  followHandler: FollowHandlerTypes;
};
