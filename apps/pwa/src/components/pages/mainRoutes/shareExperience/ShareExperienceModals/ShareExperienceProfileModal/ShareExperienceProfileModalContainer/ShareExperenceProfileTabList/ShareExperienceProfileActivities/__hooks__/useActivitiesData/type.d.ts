import { AccessType, ProfileResponsePropsType } from '@repo/core/components/ShareExperience';

import { ExperiencesResponseTypes } from '@components/pages/mainRoutes/shareExperience/ShareExperienceContainer/ShareExperienceExperiences/__hooks__/useExperiences/types';

export type ProfileType = Pick<ProfileResponsePropsType, 'profile'>['profile'];
export type IdType = Pick<ProfileType, 'id'>;
export type SelfType = Pick<ProfileResponsePropsType, 'isSelf'>;

export interface UseActivitiesDataPropsType extends IdType {}

export type selfType = Pick<ProfileResponsePropsType, 'activities'>['activities'];

export type QueryExperiencesDataTypes = Pick<ExperiencesResponseTypes, 'expirences'>;

export type SelfExperienceDataType = AccessType & {
  totalCount: number;
  list: selfType;
};
