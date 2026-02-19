import { ProfileResponseTypes } from './__hooks__/useGetProfileData/type';

export type ProfileDataTypes = (ProfileResponseTypes & { identity: string }) | undefined;

export type ProfileContextTypes = {
  updateProfileDateByDellay: (seconds?: number) => void;
  updateProfileData: () => void;
  profileData: ProfileDataTypes;
  isLoading: boolean;
};
