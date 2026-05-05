import { CommentsResponseTypes } from '@repo/core/components/ShareExperience';

import { ShareExperienceCommentsModalContainerProps } from '../types';

export interface CommentsListProps extends Pick<CommentsResponseTypes, 'comments' | 'canSendReply' | 'self'> {
  id: string;
}
