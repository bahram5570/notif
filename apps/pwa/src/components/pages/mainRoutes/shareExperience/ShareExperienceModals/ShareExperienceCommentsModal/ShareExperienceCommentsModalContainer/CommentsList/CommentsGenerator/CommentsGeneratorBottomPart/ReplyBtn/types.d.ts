import { NewReplyQueriesTypes } from '@components/pages/mainRoutes/shareExperience/ShareExperienceModals/ShareExperienceNewReplyModal/types';

export interface ReplyBtnProps extends Pick<NewReplyQueriesTypes, 'name' | 'avatar'> {
  userId: string;
  shareId: string;
  commentId: string;
  canSendComment: boolean;
}
