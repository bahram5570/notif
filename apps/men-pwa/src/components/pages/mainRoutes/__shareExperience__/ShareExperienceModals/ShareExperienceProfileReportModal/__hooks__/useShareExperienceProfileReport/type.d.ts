import { AccessType } from '@repo/core/components/ShareExperience';

export type SuccessResponseType = AccessType & {
  valid: boolean;
};
