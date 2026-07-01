import { ReactElement } from 'react';

import { BrowserInfoTypes, OperatingSystemTypes } from '../../SystemProvider/types';

interface SystemTypes {
  operatingSystem: OperatingSystemTypes;
  browserInfo: BrowserInfoTypes;
}

export type AddToHomeMainContentDataTypes = {
  [key in OperatingSystemTypes]: {
    btnScript: string;
    subTitle: string;
    items: string[];
    title: string;
    icon: any;
  };
};

export interface AddToHomeScreenMainContentTypes extends Pick<SystemTypes, 'operatingSystem'> {
  onClick: () => void;
}

export interface AddToHomeScreenBrowserContentTypes extends Pick<SystemTypes, 'operatingSystem' | 'browserInfo'> {}

type BrowsersTypes = 'safariOld' | 'safariNew' | 'chromeAndroid' | 'chromeIos' | 'other';
export type AddToHomeBrowserContentDataTypes = {
  [key in BrowsersTypes]: {
    title: string;
    type: OperatingSystemTypes;
    items: { script?: (ReactElement | string)[]; no?: number; image?: string }[];
  };
};
