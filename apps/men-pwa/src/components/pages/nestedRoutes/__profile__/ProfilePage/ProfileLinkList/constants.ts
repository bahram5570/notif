import AboutUsIcon from '@assets/icons/profile/aboutus.svg';
import InterfaceCodeIcon from '@assets/icons/profile/interfacecode.svg';
import UserIcon from '@assets/icons/profile/profileUser.svg';
import SupportIcon from '@assets/icons/profile/support.svg';
import PartnerIcon from '@assets/icons/profile/widgetPartner.svg';

import { ProfileLinkType } from '../../../../../__profile__/ProfileLinkGenerator/type';

export const PROFILE_MODAL_QUERY_NAME = 'profileQueryName';

export const PROFILE_LINK_LIST: ProfileLinkType[] = [
  {
    name: 'اطلاعات کاربری',
    link: '/protected/userInfo',
    Icon: UserIcon,
  },
  {
    name: 'همدل',
    link: '/protected/partnerSetting',
    Icon: PartnerIcon,
  },
  {
    name: 'کد معرف',
    link: '/protected/identifictionCode',
    Icon: InterfaceCodeIcon,
  },
  {
    name: 'پشتیبانی',
    link: '/protected/support',
    Icon: SupportIcon,
  },
  {
    name: 'درباره ما',
    link: '/protected/aboutUs',
    Icon: AboutUsIcon,
  },
];
