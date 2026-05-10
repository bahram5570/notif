import { ProfileResponsePropsType } from '@repo/core/components/ShareExperience';

import { selfType } from './__hooks__/useSelfExperienceData/type';

export type ProfileType = Pick<ProfileResponsePropsType, 'profile'>['profile'];
export type IdType = Pick<ProfileType, 'id'>;
export type SelfType = Pick<ProfileResponsePropsType, 'isSelf'>;

export interface ShareExperenceProfileTabListPropsType extends IdType, SelfType {
  tab: number;
}
