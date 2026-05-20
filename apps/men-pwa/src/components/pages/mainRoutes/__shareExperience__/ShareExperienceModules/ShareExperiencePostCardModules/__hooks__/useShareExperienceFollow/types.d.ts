import { AccessType } from '@repo/core/components/ShareExperience';

export type ItemHandlerType = { userId: string | undefined; isFollow: boolean | undefined };
export type UpdateHandlerType = (v: ItemHandlerType) => void;

export type SuccessResponseType = AccessType & {
  valid: true;
};
