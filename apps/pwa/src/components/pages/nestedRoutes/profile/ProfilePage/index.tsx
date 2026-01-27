'use client';

import MainPageLayout from '@components/MainPageLayout';
import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';
import Dark_Typography from '@components/ui/Dark_Typography';
import { APP_VERSION } from '@constants/app.constants';
import useProfileData from '@hooks/__profile__/useProfileData';

import InstallationPurpose from './InstallationPurpose';
import LogOut from './Logout';
import ProfileLinkList from './ProfileLinkList';
import ProfileModals from './ProfileModals';
import ProfileSkeleton from './ProfileSkeleton';
import SubscriptionButton from './SubscriptionButton';
import useGetData from './__hooks__/useGetData';
import UserNameDetail from './__hooks__/userNameDetail';

const ProfilePage = () => {
  const { hasSubscribtion, subscriptionLoading } = useGetData();
  const { profileData, isLoading } = useProfileData();

  const Loading = isLoading || subscriptionLoading;

  return (
    <MainPageLayout
      rightElement={hasSubscribtion ? 'BackButton' : 'BackToSubscription'}
      className="bg-impo_Neutral_Background"
      rightElementScript="صفحه قبل"
      paddingBottom={0}
      paddingTop={0}
    >
      <div className="flex flex-col min-h-[100dvh] gap-6 pb-6" style={{ paddingTop: HEADER_HEIGHT }}>
        {Loading && <ProfileSkeleton />}

        {!Loading && profileData && (
          <div className="flex-grow gap-2">
            <UserNameDetail name={profileData.name} username={profileData.username} avatar={profileData.avatar} />

            <SubscriptionButton remaindDays={profileData.remaindDays} />

            {hasSubscribtion && <InstallationPurpose changeStatusBtns={profileData.changeStatusBtns} />}

            <ProfileLinkList {...profileData} hasSubscribtion={hasSubscribtion} />
          </div>
        )}

        <div className="flex flex-col justify-center items-center mt-auto">
          <LogOut />

          <Dark_Typography className="text-impo_Neutral_OnBackground" fontSize="Body_Small" numbersMode="english">
            {APP_VERSION || ''}
          </Dark_Typography>
        </div>
      </div>

      <ProfileModals />
    </MainPageLayout>
  );
};

export default ProfilePage;
