import { useEffect, useState } from 'react';

import TickIcon from '@assets/shared/icons/CheckCircle-2.svg';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';

import useUpdateProfile from '../../ShareExperienceChangeAvatarModal/ShareExperienceChangeAvatarModalContainer/__hooks__/useUpdateProfile';
import useGetData from '../../ShareExperienceEditProfileModal/ShareExperienceEditProfileModalContainer/__hooks__/useGetData';
import { ShareExperienceDefultAvatarListModalContainerPropsType } from './type';

const ShareExperienceDefultAvatarListModalContainer = ({
  id,
}: ShareExperienceDefultAvatarListModalContainerPropsType) => {
  const { profileData } = useGetData(id);
  const avatarList: string[] = profileData?.profile.avatars ? profileData?.profile.avatars : [''];
  const [selectedAvatar, setSelectedAvatar] = useState<string>('');
  const { onProfileChangeHandler } = useUpdateProfile();
  const router = useCustomRouter();

  const onClick = () => {
    onProfileChangeHandler({ avatarImage: selectedAvatar, username: profileData?.profile.username });
    router.back();
  };

  const onSelectedAvatarChange = (avatar: string) => {
    setSelectedAvatar(avatar);
  };

  useEffect(() => {
    if (profileData) {
      setSelectedAvatar(profileData?.profile.avatarImage);
    }
  }, [profileData]);

  return (
    <div className="flex flex-col gap-5  relative">
      <div className="px-4 overflow-y-auto max-h-[calc(100vh-200px)]">
        <div className="flex justify-center items-center mx-auto">
          <div className="flex flex-col items-center gap-2">
            <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
              پروفایل من
            </CustomTypography>

            <div className="overflow-hidden rounded-full flex justify-center items-center">
              <CustomImage src={profileData?.profile.avatarImage || ''} width={120} height={120} />
            </div>
          </div>
        </div>

        {avatarList.length > 0 && (
          <div className="flex flex-col gap-2 justify-end items-end">
            <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground mt-4">
              آواتار های پیش‌فرض
            </CustomTypography>

            <div className="grid grid-cols-3 gap-4 px-3  w-full">
              {avatarList.map((avatar, index) => {
                return (
                  <div key={index} className="relative" onClick={() => onSelectedAvatarChange(avatar)}>
                    <CustomImage src={avatar} />
                    {selectedAvatar === avatar && <TickIcon className="w-7 h-7 absolute right-0 bottom-0" />}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className="py-4 px-2 sticky bottom-0 w-full bg-impo_Neutral_Background">
        <CustomButton fontSize="Lable_Large" className="w-full py-2" onClick={onClick}>
          انتخاب پروفایل
        </CustomButton>
      </div>
    </div>
  );
};

export default ShareExperienceDefultAvatarListModalContainer;
