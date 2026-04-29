export type ApiInfoTypes = { userId: string; isFollow: boolean; userName: string };
export type FollowHandlerTypes = (props: ApiInfoTypes) => void;

export type ItemHandlerType = { userId: string | undefined; isFollow: boolean | undefined };
export type UpdateHandlerType = (v: ItemHandlerType) => void;
