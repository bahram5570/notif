import { ExperienceType, ExperiencesResponseTypes } from '@repo/core/components/ShareExperience';

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
export type ShareExperiencePostCardModulesProps = ItemsTypes &
  Pick<ExperiencesResponseTypes, 'expirences'>['expirences'][0] & {
    isSelf: boolean;
    className?: string;
  };
