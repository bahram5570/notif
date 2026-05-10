import { ExperienceType } from '@repo/core/components/ShareExperience';

import { ShareExperienceAssociationItemContainerPropsType } from '../../type';

export type useGetAssociationItemDataPropsType = Pick<
  ShareExperienceAssociationItemContainerPropsType,
  'AssociationId'
>;

export type AssociationExperiencesResponseType = {
  totalCount: number;
  experiences: ExperienceType[];
};
