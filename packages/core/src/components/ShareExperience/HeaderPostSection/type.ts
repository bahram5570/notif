import { ExperiencesResponseTypes, FollowHandlerTypes } from '../types';

type ExperiencesTypes = Pick<ExperiencesResponseTypes, 'expirences'>['expirences'][0];

type ItemsTypes = Pick<
  ExperiencesTypes,
  | 'avatar'
  | 'approvedProfile'
  | 'isFollow'
  | 'isPin'
  | 'name'
  | 'createTime'
  | 'topicName'
  | 'userId'
  | 'selfExperience'
  | 'id'
>;
export interface HeaderPostSectionProps extends ItemsTypes {
  isFollowLoading: boolean;
  followHandler: FollowHandlerTypes;
}
