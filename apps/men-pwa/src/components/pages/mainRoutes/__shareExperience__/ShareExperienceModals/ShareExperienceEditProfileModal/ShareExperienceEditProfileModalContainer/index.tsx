import { useEffect, useRef, useState } from 'react';

import InfoIcon from '@assets/icons/info.svg';
import EditIcon from '@assets/shared/icons/Pen 2.svg';
import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { UserAvatarModule } from '@repo/core/components/ShareExperience';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import useUpdateProfile from '../../ShareExperienceChangeAvatarModal/ShareExperienceChangeAvatarModalContainer/__hooks__/useUpdateProfile';
import useGetData from './__hooks__/useGetData';
import { ShareExperienceEditProfileModalContainerPropsType } from './type';

const ShareExperienceEditProfileModalContainer = ({ id }: ShareExperienceEditProfileModalContainerPropsType) => {
  const { profileData } = useGetData(id);
  const inputRef = useRef<HTMLInputElement>(null);
  const [userName, setUserName] = useState<string>('');
  const { onProfileChangeHandler, isLoading } = useUpdateProfile();

  const onUserChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      inputRef.current?.blur();
    }
  };

  const clickHandler = () => {
    onProfileChangeHandler({ username: userName, avatarImage: profileData?.profile.avatarImage });
  };

  useEffect(() => {
    if (profileData) {
      setUserName(profileData.profile.username);
    }
  }, [profileData]);

  return (
    <MainPageLayout rightElement="BackButton" rightElementScript="ویرایش پروفایل" paddingTop={0}>
      {profileData && (
        <div
          className="flex flex-col gap-6 min-h-[100dvh]"
          style={{ paddingTop: HEADER_HEIGHT, paddingBottom: HEADER_HEIGHT - 20 }}
        >
          <UserAvatarModule
            avatarImage={profileData.profile.avatarImage}
            username={profileData.profile.username}
            showChangeAvatarIcon={true}
            id={profileData.profile.id}
          />

          <div className="flex flex-col gap-3 mt-3">
            <div className="flex flex-col justify-end items-end gap-2">
              <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground px-3">
                نام کاربری
              </CustomTypography>

              <div className="flex flex-wrap-reverse justify-between border border-impo_Surface_OutlineVariant rounded-xl px-4 py-3 w-full">
                <EditIcon className="w-5 h-5 fill-impo_Neutral_OnBackground" />

                <input
                  type="text"
                  ref={inputRef}
                  value={userName}
                  onKeyUp={handleKeyDown}
                  onChange={onUserChangeHandler}
                  className="text-impo_Neutral_OnBackground bg-impo_Transparent"
                />
              </div>
            </div>
            <div className="rounded-lg flex flex-row gap-2  px-3 py-4 bg-impo_Warning_WarininContainer">
              <CustomTypography fontSize="Body_Small" className="text-impo_Black">
                {profileData.usernameHintText}
              </CustomTypography>

              <InfoIcon className="w-5 h-5 stroke-impo_Warning_Warning" />
            </div>
          </div>

          <CustomButton
            className="mt-auto !bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan"
            isLoading={isLoading}
            onClick={clickHandler}
            fontSize="Lable_Large"
            isDisable={profileData.profile.username === userName}
          >
            ثبت تغییرات
          </CustomButton>
        </div>
      )}
    </MainPageLayout>
  );
};

export default ShareExperienceEditProfileModalContainer;
