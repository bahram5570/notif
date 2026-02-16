import { AssociationInfoResponseType } from '../__hooks__/useGetAssociationInfo/type';

type ItemType = Pick<
  AssociationInfoResponseType,
  'cover' | 'description' | 'experienceCount' | 'followerCount' | 'isFollowed' | 'title'
>;

export type ShareExperienceAssociationItemHeaderPropsType = ItemType & {
  isScrolled: boolean;
  associationId: string;
};
