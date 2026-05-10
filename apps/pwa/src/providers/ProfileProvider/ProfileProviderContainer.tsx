'use client';

import { createContext } from 'react';

import useGetProfileData from './__hooks__/useGetProfileData';
import usePhaseFinder from './__hooks__/usePhaseFinder';
import useSubscriptionGuard from './__hooks__/useSubscriptionGuard';
import { ProfileContextTypes } from './type';

export const ProfileContext = createContext<ProfileContextTypes>({
  phase: undefined,
  isLoading: false,
  profileData: undefined,
});

const ProfileProviderContainer = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading } = useGetProfileData();

  useSubscriptionGuard(data?.remaindDays);
  const phase = usePhaseFinder({ periodStatus: data?.periodStatus, status: data?.status });

  return (
    <ProfileContext.Provider value={{ profileData: data, isLoading, phase }}>
      <>{children}</>
    </ProfileContext.Provider>
  );
};

export default ProfileProviderContainer;
