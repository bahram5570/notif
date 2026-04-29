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

type AssociationType = {
  type: 'association';
  shareId: string;
};

type TopicTypes = {
  type: 'topic';
  shareId: string;
};

type ActivitiesExperienceType = {
  type: 'activitiesExperienceType';
  shareId: string;
};

type ItemsTypes = ExperienceTypes | CommentTypes | ReplyTypes | AssociationType | TopicTypes | ActivitiesExperienceType;
export type ShareExperienceBottomPartProps = ItemsTypes & DataTypes;
