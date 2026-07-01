// @ts-ignore
import * as actions from '@actions/userCookies.actions';

import {
  NOTIFICATION_PERMISSION_HANDELED,
  STORED_NOTIFICATIONS_CACHE_NAME,
  THEME_STORAGE_NAME,
} from '../../constants/storage.constants';
import { FONTS_ANDROID, FONTS_IOS } from '../../theme/fonts';
import { TypographyFontStylesMakerTypes } from './types';

export const isDevelopeMode = () => {
  return process.env.NODE_ENV === 'development';
};

export const typographyFontStylesMaker = (props: TypographyFontStylesMakerTypes) => {
  let typographyFontStyles;

  const typographySystem = props.operatingSystem === 'ios' ? FONTS_IOS : FONTS_ANDROID;
  typographyFontStyles = { ...typographySystem[props.fontSize] };

  if (props.isLargeScreen) {
    typographyFontStyles.fontSize = typographyFontStyles.fontSize * 1.12;
  }

  return typographyFontStyles;
};

export const handleClearStorages = async () => {
  const LOCAL_STORAGE_EXCEPTIONS: string[] = [THEME_STORAGE_NAME, NOTIFICATION_PERMISSION_HANDELED];
  const SESSION_STORAGE_EXCEPTIONS: string[] = [];

  const localStorageList = Object.keys(localStorage);
  const sessionStorageList = Object.keys(sessionStorage);

  localStorageList.forEach((key) => {
    if (!LOCAL_STORAGE_EXCEPTIONS.includes(key)) {
      localStorage.removeItem(key);
    }
  });

  sessionStorageList.forEach((key) => {
    if (!SESSION_STORAGE_EXCEPTIONS.includes(key)) {
      sessionStorage.removeItem(key);
    }
  });

  await actions.clearUserCookiesHandler();
  await caches.delete(STORED_NOTIFICATIONS_CACHE_NAME);
};
