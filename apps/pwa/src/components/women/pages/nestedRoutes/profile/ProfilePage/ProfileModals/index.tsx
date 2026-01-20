import CustomModal from '@components/ui/CustomModal';
import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import UploadImageModal from '@components/women/pages/mainRoutes/partner/PartnerPage/PartnerModals/UploadImageModal';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

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
      <>{profileQueryName === ProfileModalNameEnums.EditProfileImage && <UploadImageModal />}</>
      <>{profileQueryName === ProfileModalNameEnums.DarkModeSettings && <DarkModeSettingsModal />}</>
    </CustomModal>
  );
};

export default ProfileModals;
