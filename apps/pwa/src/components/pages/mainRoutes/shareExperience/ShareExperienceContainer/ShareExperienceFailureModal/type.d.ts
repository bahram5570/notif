import { ShareExperienceResponseTypes } from '../__hooks__/useShareExperienceGetData/types';

type ErrorType = Pick<ShareExperienceResponseTypes, 'error'>['error'];

export type ShareExperienceFailureModalPropsType = {
  error: ErrorType;
};
