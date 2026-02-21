import { ExperienceType } from '@components/pages/mainRoutes/shareExperience/ShareExperienceContainer/ShareExperienceExperiences/__hooks__/useExperiences/types';

import { ShareExperienceAssociationItemContainerPropsType } from '../../type';

export type useGetAssociationItemDataPropsType = Pick<
  ShareExperienceAssociationItemContainerPropsType,
  'AssociationId'
>;

export type AssociationExperiencesResponseType = {
  totalCount: number;
  experiences: ExperienceType[];
};
