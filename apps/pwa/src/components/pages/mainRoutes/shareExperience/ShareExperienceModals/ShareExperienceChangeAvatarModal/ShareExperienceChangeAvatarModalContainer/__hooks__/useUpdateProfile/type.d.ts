import { AccessType } from '@repo/core/components/ShareExperience';

export type onProfileChangeHandlerPropsType = {
  username?: string;
  avatarImage?: string;
};

export type SuccessResponseType = AccessType & {
  valid: boolean;
};
