import AboutUsIcon from '@assets/icons/profile/aboutus.svg';
import ChartIcon from '@assets/icons/profile/chart.svg';
import EditCycleIcon from '@assets/icons/profile/edit-cycle.svg';
import EditActivationIcon from '@assets/icons/profile/editActivation.svg';
import InterfaceCodeIcon from '@assets/icons/profile/interfacecode.svg';
import SaveIcon from '@assets/icons/profile/profileSave.svg';
import UserIcon from '@assets/icons/profile/profileUser.svg';
import SavedHintsIcon from '@assets/icons/profile/savedHints.svg';
import SupportIcon from '@assets/icons/profile/support.svg';
import PartnerIcon from '@assets/icons/profile/widgetPartner.svg';

import { ProfileLinkListType } from '../ProfileLinkGenerator/type';

export const PROFILE_MODAL_QUERY_NAME = 'profileQueryName';

export const PROFILE_LINK_LIST: ProfileLinkListType = [
  {
    name: 'نحوه نمایش چرخه',
    link: '/protected/editCycleSetting',
    Icon: EditCycleIcon,
    needsSubscription: true,
  },
  {
    name: 'ویرایش سوالات فعالسازی',
    link: '/protected/editActivation',
    Icon: EditActivationIcon,
    needsSubscription: true,
  },
  {
    name: 'اطلاعات کاربری',
    link: '/protected/userInfo',
    Icon: UserIcon,
    needsSubscription: false,
  },
  {
    name: 'استوری ذخیره شده',
    link: '/protected/savedStories',
    Icon: SaveIcon,
    needsSubscription: true,
  },
  {
    name: 'توصیه‌های ذخیره شده',
    link: '/protected/savedHints',
    Icon: SavedHintsIcon,
    needsSubscription: true,
  },
  {
    name: 'همدل',
    link: '/protected/partnerSetting',
    Icon: PartnerIcon,
    needsSubscription: false,
  },
  {
    name: 'گزارش قاعدگی',
    link: '/protected/healthReport',
    Icon: ChartIcon,
    needsSubscription: true,
  },
  {
    name: 'کد معرف',
    link: '/protected/identifictionCode',
    Icon: InterfaceCodeIcon,
    needsSubscription: false,
  },
  {
    name: 'پشتیبانی',
    link: '/protected/support',
    Icon: SupportIcon,
    needsSubscription: false,
  },
  {
    name: 'درباره ما',
    link: '/protected/aboutUs',
    Icon: AboutUsIcon,
    needsSubscription: false,
  },
];
