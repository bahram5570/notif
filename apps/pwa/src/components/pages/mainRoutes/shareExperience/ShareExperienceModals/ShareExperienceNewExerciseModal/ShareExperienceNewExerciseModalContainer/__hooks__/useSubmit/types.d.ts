import { ShareExperienceNewExerciseModalContainerProps } from '../../types';

export interface UseSubmitProps extends Pick<ShareExperienceNewExerciseModalContainerProps, 'onSuccessNewHandler'> {
  topicId: string;
  image: string;
  text: string;
}

export type NewExperienceResponseType = {
  toast: string;
  valid: boolean;
};
