import { AccessType } from '@repo/core/components/ShareExperience';

export type UseFollowHandlerPropsType = {
  isFollow: boolean;
  associationId: string;
};

export type SuccessHandlerPropsType = AccessType & { valid: boolean };
