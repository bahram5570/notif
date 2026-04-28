import { ProfileResponsePropsType } from '@repo/core/components/ShareExperience';

export type ProfileType = Pick<ProfileResponsePropsType, 'profile'>['profile'];
type AvatarItemType = Pick<ProfileType, 'avatarImage' | 'id' | 'username'>;

export interface ShareExperienceAvatarModulePropsType extends AvatarItemType {
  showChangeAvatarIcon: boolean;
}
