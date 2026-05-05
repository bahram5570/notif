import { ShareExperienceStateEnum } from '@repo/core/components/ShareExperience';

type ExperienceTypes = {
  type: 'experience';
  shareId: string;
};
type ExperiencesTypes = {
  type: 'experiences';
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

type ItemsTypes =
  | ExperienceTypes
  | CommentTypes
  | ReplyTypes
  | AssociationType
  | TopicTypes
  | ActivitiesExperienceType
  | ExperiencesTypes;

export type ShareExperienceLikesModuleProps = ItemsTypes & {
  state: ShareExperienceStateEnum;
  likeCount: number;
  disliked: number;
  isSelf: boolean;
};
