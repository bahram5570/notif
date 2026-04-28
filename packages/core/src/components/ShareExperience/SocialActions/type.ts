import { LikeHandlerTypes } from '../LikeActionModule/type';
import { ExperienceType } from '../types';

type ItemsTypes = Pick<
  ExperienceType,
  'disliked' | 'likeCount' | 'selfExperience' | 'commentCount' | 'id' | 'state' | 'isBookmarked'
>;
export interface SocialActionsProps extends ItemsTypes {
  likeHandler: LikeHandlerTypes;
  toggleBookmarkHandler: () => void;
}
