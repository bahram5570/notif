import AboutUsIcon from '@assets/icons/profile/aboutus.svg';
import ChartIcon from '@assets/icons/profile/chart.svg';
import EditCycleIcon from '@assets/icons/profile/edit-cycle.svg';
import EditActivationIcon from '@assets/icons/profile/editActivation.svg';
import SaveIcon from '@assets/icons/profile/profileSave.svg';
import SavedHintsIcon from '@assets/icons/profile/savedHints.svg';
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
    name: 'درباره ما',
    link: '/protected/aboutUs',
    Icon: AboutUsIcon,
    needsSubscription: false,
  },
];
