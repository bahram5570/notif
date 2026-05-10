export type ItemHandlerType = { userId: string | undefined; isFollow: boolean | undefined };
export type UpdateHandlerType = (v: ItemHandlerType) => void;
