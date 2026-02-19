import { ProfileResponseTypes } from '@providers/ProfileProvider/__hooks__/useGetProfileData/type';

export type UserNameDetailsProps = Pick<
  ProfileResponseTypes,
  'avatarImage' | 'defaultAvatarImage' | 'canDeleteAvatar'
> &
  Pick<Pick<ProfileResponseTypes, 'generalInfo'>['generalInfo'], 'name'> & { identity: string };
