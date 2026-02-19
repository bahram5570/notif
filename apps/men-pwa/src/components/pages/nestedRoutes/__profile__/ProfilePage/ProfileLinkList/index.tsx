import ProfileLinkGenerator from '../../../../../__profile__/ProfileLinkGenerator';
import DarkModeSettings from '../DarkModeSettings';
import { PROFILE_LINK_LIST } from './constants';

const ProfileLinkList = () => {
  return (
    <>
      {PROFILE_LINK_LIST.map((item, index) => (
        <ProfileLinkGenerator {...item} isFirstItem={index === 0} key={index} />
      ))}

      <DarkModeSettings />
    </>
  );
};

export default ProfileLinkList;
