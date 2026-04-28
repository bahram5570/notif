import { ExperiencesResponseTypes, ProfileResponsePropsType } from '@repo/core/components/ShareExperience';

export type ProfileType = Pick<ProfileResponsePropsType, 'profile'>['profile'];
export type IdType = Pick<ProfileType, 'id'>;
export type SelfType = Pick<ProfileResponsePropsType, 'isSelf'>;

export interface UseSelfExperienceDataPropsType extends IdType, SelfType {}

export type selfType = Pick<ProfileResponsePropsType, 'activities'>['activities'];

export type QuerySelfExperiencesDataTypes = Pick<ExperiencesResponseTypes, 'expirences'>;

export type SelfExperienceDataType = {
  totalCount: number;
  list: selfType;
};
