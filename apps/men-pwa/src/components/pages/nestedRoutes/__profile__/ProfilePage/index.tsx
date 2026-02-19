'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useProfileData from '@hooks/__profile__/useProfileData';
import { APP_VERSION, HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import LogOut from './Logout';
import ProfileLinkList from './ProfileLinkList';
import ProfileModals from './ProfileModals';
import SubscriptionButton from './SubscriptionButton';
import UserNameDetail from './UserNameDetail';

const ProfilePage = () => {
  const { profileData } = useProfileData();

  return (
    <MainPageLayout
      paddingTop={0}
      paddingBottom={0}
      rightElementScript="صفحه قبل"
      className="bg-impo_Neutral_Background"
      rightElement={profileData?.subscribtaion.valid ? 'BackButton' : 'BackToSubscription'}
    >
      <div className="flex flex-col min-h-[100dvh] gap-6 pb-6" style={{ paddingTop: HEADER_HEIGHT }}>
        {profileData && (
          <div className="flex-grow gap-2">
            <UserNameDetail
              identity={profileData.identity}
              name={profileData.generalInfo.name}
              avatarImage={profileData.avatarImage}
              canDeleteAvatar={profileData.canDeleteAvatar}
              defaultAvatarImage={profileData.defaultAvatarImage}
            />

            <SubscriptionButton currentDayCount={profileData.subscribtaion.currentDayCount} />

            <ProfileLinkList />
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
