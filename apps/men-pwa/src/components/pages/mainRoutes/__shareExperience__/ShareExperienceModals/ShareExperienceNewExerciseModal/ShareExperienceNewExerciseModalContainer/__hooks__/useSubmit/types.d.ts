import { ShareExperienceNewExerciseModalContainerProps } from '../../types';

export interface UseSubmitProps extends Pick<
  ShareExperienceNewExerciseModalContainerProps,
  'onSuccessNewHandler' | 'associationId'
> {
  topicId: string;
  image: string;
  text: string;
}

export type NewExperienceResponseType = {
  toast: string;
  valid: boolean;
};
