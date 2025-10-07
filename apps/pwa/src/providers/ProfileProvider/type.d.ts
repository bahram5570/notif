import { ProfileResponseTypes } from './__hooks__/useGetProfileData/type';

export type ProfileContextTypes = {
  profileData: ProfileResponseTypes | undefined;
  isLoading: boolean;
};
