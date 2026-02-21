import { ExcercisesListTypes } from '../__hooks__/useShareExperienceComments/types';
import { ShareExperienceCommentsModalProps } from '../types';

type ItemType = Pick<ShareExperienceCommentsModalProps, 'avatarImage'>;
export interface ShareExperienceCommentsModalContainerProps extends ItemType {
  id: string;
  queryParam: string | null;
}
