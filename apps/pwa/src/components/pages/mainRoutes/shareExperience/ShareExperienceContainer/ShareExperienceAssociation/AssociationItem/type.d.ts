import { ShareExperienceAssociationPropsType } from '../type';

export type ItemType = Pick<ShareExperienceAssociationPropsType, 'associations'>['associations'][0];

export type AssociationItemPropsType = ItemType & {};
