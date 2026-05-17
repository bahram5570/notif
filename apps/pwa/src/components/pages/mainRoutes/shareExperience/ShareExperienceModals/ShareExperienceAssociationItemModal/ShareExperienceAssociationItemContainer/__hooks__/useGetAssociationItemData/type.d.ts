import { AccessType, ExperienceType, PageType } from '@repo/core/components/ShareExperience';

import { ShareExperienceAssociationItemContainerPropsType } from '../../type';

export type useGetAssociationItemDataPropsType = Pick<
  ShareExperienceAssociationItemContainerPropsType,
  'AssociationId'
>;

export type AssociationExperiencesResponseType = AccessType &
  PageType & {
    totalCount: number;
    experiences: ExperienceType[];
  };
