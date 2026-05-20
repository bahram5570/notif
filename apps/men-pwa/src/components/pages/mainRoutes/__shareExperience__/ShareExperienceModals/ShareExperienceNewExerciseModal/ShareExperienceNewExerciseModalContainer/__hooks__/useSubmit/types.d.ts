import { AccessType } from '@repo/core/components/ShareExperience';

import { ShareExperienceNewExerciseModalContainerProps } from '../../types';

export interface UseSubmitProps extends Pick<
  ShareExperienceNewExerciseModalContainerProps,
  'onSuccessNewHandler' | 'associationId'
> {
  topicId: string;
  image: string;
  text: string;
}

export type NewExperienceResponseType = AccessType & {
  toast: string;
  valid: boolean;
};
