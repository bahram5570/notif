'use client';

import { createContext } from 'react';

import useGetProfileData from './__hooks__/useGetProfileData';
import useProfileIdentity from './__hooks__/useProfileIdentity';
import useSubscriptionGuard from './__hooks__/useSubscriptionGuard';
import { ProfileContextTypes, ProfileDataTypes } from './type';

export const ProfileContext = createContext<ProfileContextTypes>({
  isLoading: false,
  profileData: undefined,
  updateProfileData: () => {},
  updateProfileDateByDellay: () => {},
});

const ProfileProviderContainer = ({ children }: { children: React.ReactNode }) => {
  const { identity } = useProfileIdentity();
  const { data, isLoading, updateProfileData, updateProfileDateByDellay } = useGetProfileData();

  useSubscriptionGuard(data?.subscribtaion.currentDayCount);

  const profileData: ProfileDataTypes = data && { ...data, identity };

  // # Removes time from "birthdate"
  if (profileData) {
    profileData.generalInfo.birthdate = profileData.generalInfo.birthdate.slice(0, 10);
  }

  return (
    <ProfileContext.Provider value={{ profileData, isLoading, updateProfileData, updateProfileDateByDellay }}>
      <>{children}</>
    </ProfileContext.Provider>
  );
};

export default ProfileProviderContainer;
