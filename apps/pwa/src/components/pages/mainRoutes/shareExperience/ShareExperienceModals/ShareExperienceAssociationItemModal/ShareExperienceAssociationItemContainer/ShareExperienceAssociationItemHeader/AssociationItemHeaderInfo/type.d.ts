import { ShareExperienceAssociationItemHeaderPropsType } from '../type';

export type AssociationItemHeaderInfoPropsType = Pick<
  ShareExperienceAssociationItemHeaderPropsType,
  'experienceCount' | 'title' | 'followerCount'
> & {};
