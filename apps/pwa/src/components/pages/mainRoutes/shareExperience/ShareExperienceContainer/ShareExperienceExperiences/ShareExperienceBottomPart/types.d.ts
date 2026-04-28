import { ExperiencesDataTypes } from '../__hooks__/useExperiences/types';

type ExperiencesTypes = ExperiencesDataTypes[0];
type DataTypes = Pick<
  ExperiencesTypes,
  'disliked' | 'likeCount' | 'selfExperience' | 'commentCount' | 'id' | 'state' | 'isBookmarked'
>;

type ExperienceTypes = {
  type: 'experience';
  shareId: string;
};
type CommentTypes = {
  type: 'comment';
  shareId: string;
  commentId: string;
};
type ReplyTypes = {
  type: 'reply';
  shareId: string;
  commentId: string;
  replyId: string;
};
type ItemsTypes = ExperienceTypes | CommentTypes | ReplyTypes;
export type ShareExperienceBottomPartProps = ItemsTypes & DataTypes;
