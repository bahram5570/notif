import { AccessType, ExperienceType } from '@repo/core/components/ShareExperience';

import { ShareExperienceAssociationItemContainerPropsType } from '../../type';

export type useGetAssociationItemDataPropsType = Pick<
  ShareExperienceAssociationItemContainerPropsType,
  'AssociationId'
>;

export type AssociationExperiencesResponseType = AccessType & {
  totalCount: number;
  experiences: ExperienceType[];
};
