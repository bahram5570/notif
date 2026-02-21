import { NewReplyQueriesTypes, ShareExperienceNewReplyModalPropsType } from '../types';

export type ItemType = Pick<ShareExperienceNewReplyModalPropsType, 'avatarImage' | 'username'>;
export interface ShareExperienceNewReplyModalContainerProps extends ItemType {
  data: NewReplyQueriesTypes;
}
