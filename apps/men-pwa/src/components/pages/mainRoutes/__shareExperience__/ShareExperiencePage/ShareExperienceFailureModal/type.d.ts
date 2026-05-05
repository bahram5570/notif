import { ShareExperienceResponseTypes } from '@repo/core/components/ShareExperience';

type ErrorType = Pick<ShareExperienceResponseTypes, 'error'>['error'];

export type ShareExperienceFailureModalPropsType = {
  error: ErrorType;
};
