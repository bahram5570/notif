import DarkIcon from '@assets/icons/profile/theme_dark.svg';
import LightIcon from '@assets/icons/profile/theme_light.svg';
import SystemIcon from '@assets/icons/profile/theme_system.svg';

import { DarkModeItemsListTypes } from './types';

export const DARK_MODE_ITEMS_LIST: DarkModeItemsListTypes = [
  { title: 'شب', themeType: 'dark', Icon: DarkIcon },
  { title: 'روز', themeType: 'light', Icon: LightIcon },
  { title: 'خودکار', themeType: 'system', Icon: SystemIcon },
];
