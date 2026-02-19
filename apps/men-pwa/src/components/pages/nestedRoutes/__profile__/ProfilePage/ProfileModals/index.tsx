import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { MODAL_QUERY_NAME } from '@repo/core/constants/modal.constants';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { PROFILE_MODAL_QUERY_NAME } from '../ProfileLinkList/constants';
import DarkModeSettingsModal from './DarkModeSettingsModal';
import LogoutModal from './LogoutModal';
import { ProfileModalNameEnums } from './enum';

const ProfileModals = () => {
  const { getQueryParams } = useQueryParamsHandler();

  const isOpen = getQueryParams(MODAL_QUERY_NAME) !== null;
  const profileQueryName = getQueryParams(PROFILE_MODAL_QUERY_NAME) as ProfileModalNameEnums;

  const isSlidingMode = [ProfileModalNameEnums.EditProfileImage, ProfileModalNameEnums.DarkModeSettings].includes(
    profileQueryName,
  );

  return (
    <CustomModal isSlidingMode={isSlidingMode} isOpen={isOpen}>
      <>{profileQueryName === ProfileModalNameEnums.Logout && <LogoutModal />}</>
      <>{profileQueryName === ProfileModalNameEnums.DarkModeSettings && <DarkModeSettingsModal />}</>
    </CustomModal>
  );
};

export default ProfileModals;
