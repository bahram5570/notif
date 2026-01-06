import { useEffect, useRef, useState } from 'react';

import EditIcon from '@assets/icons/Pen 2.svg';
import InfoIcon from '@assets/icons/info.svg';

import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';

import ShareExperienceAvatarModule from '../../../ShareExperienceModules/ShareExperienceAvatarModule';
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
    <WomenPageLayout rightElement="BackButton" rightElementScript="ویرایش پروفایل" paddingTop={0}>
      {profileData && (
        <div
          className="flex flex-col gap-6 min-h-[100dvh]"
          style={{ paddingTop: HEADER_HEIGHT, paddingBottom: HEADER_HEIGHT - 20 }}
        >
          <ShareExperienceAvatarModule
            avatarImage={profileData.profile.avatarImage}
            username={profileData.profile.username}
            showChangeAvatarIcon={true}
            id={profileData.profile.id}
          />

          <div className="flex flex-col gap-3 mt-3">
            <div className="flex flex-col justify-end items-end gap-2">
              <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground px-3">
                نام کاربری
              </Dark_Typography>

              <div className="flex flex-wrap-reverse justify-between border rounded-xl px-4 py-3 w-full">
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
            <div className="rounded-lg flex flex-row gap-2 p-1 bg-impo_Warning_WarininContainer">
              <Dark_Typography fontSize="Body_Small" className="text-impo_Black">
                {profileData.usernameHintText}
              </Dark_Typography>

              <InfoIcon className="w-5 h-5 stroke-impo_Warning_Warning" />
            </div>
          </div>

          <Dark_Button
            className="mt-auto"
            isLoading={isLoading}
            onClick={clickHandler}
            fontSize="Lable_Large"
            isDisable={profileData.profile.username === userName}
          >
            ثبت تغییرات
          </Dark_Button>
        </div>
      )}
    </WomenPageLayout>
  );
};

export default ShareExperienceEditProfileModalContainer;
