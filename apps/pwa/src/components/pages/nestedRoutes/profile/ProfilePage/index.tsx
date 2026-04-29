'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useProfileData from '@hooks/__profile__/useProfileData';
import { APP_VERSION, HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import InstallationPurpose from './InstallationPurpose';
import LogOut from './Logout';
import ProfileLinkList from './ProfileLinkList';
import ProfileMainLinks from './ProfileMainLinks';
import ProfileModals from './ProfileModals';
import ProfileSkeleton from './ProfileSkeleton';
import SubscriptionButton from './SubscriptionButton';
import useGetData from './__hooks__/useGetData';
import UserNameDetail from './userNameDetail';

const ProfilePage = () => {
  const { hasSubscribtion, subscriptionLoading } = useGetData();
  const { profileData, isLoading, phase } = useProfileData();

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

            <ProfileMainLinks
              hasTicketSupportActive={profileData.hasTicketSupportActive}
              pregnancyDate={profileData.pregnancyDate}
              isDelivery={profileData.isDelivery}
              phase={phase}
            />

            <SubscriptionButton remaindDays={profileData.remaindDays} />

            {hasSubscribtion && <InstallationPurpose changeStatusBtns={profileData.changeStatusBtns} />}

            <ProfileLinkList hasSubscribtion={hasSubscribtion} />
          </div>
        )}

        <div className="flex flex-col justify-center items-center mt-auto">
          <LogOut />

          <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Body_Small" numbersMode="english">
            {APP_VERSION || ''}
          </CustomTypography>
        </div>
      </div>

      <ProfileModals />
    </MainPageLayout>
  );
};

export default ProfilePage;
