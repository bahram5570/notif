'use client';

import { createContext } from 'react';

import useGetProfileData from './__hooks__/useGetProfileData';
import useSubscriptionGuard from './__hooks__/useSubscriptionGuard';
import { ProfileContextTypes } from './type';

export const ProfileContext = createContext<ProfileContextTypes>({ profileData: undefined, isLoading: false });

const ProfileProviderContainer = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading } = useGetProfileData();

  useSubscriptionGuard(data?.remaindDays);

  return (
    <ProfileContext.Provider value={{ profileData: data, isLoading }}>
      <>{children}</>
    </ProfileContext.Provider>
  );
};

export default ProfileProviderContainer;
