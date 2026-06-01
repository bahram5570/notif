import { AccessType } from '@repo/core/components/ShareExperience';

export type IdInfoTypes = { shareId: string; commentId: string };

export type SuccessResponseType = AccessType & {
  isValid: boolean;
};
