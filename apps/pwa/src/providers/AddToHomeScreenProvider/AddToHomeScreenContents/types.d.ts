import { ReactElement } from 'react';

import { BrowserInfoTypes, OperatingSystemTypes } from '@providers/OperatingSystemProvider/types';

export interface AddToHomeScreenContentsProps {
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

export interface AddToHomeScreenMainContentTypes extends Pick<AddToHomeScreenContentsProps, 'operatingSystem'> {
  onClick: () => void;
}

export interface AddToHomeScreenBrowserContentTypes
  extends Pick<AddToHomeScreenContentsProps, 'operatingSystem' | 'browserInfo'> {}

type BrowsersTypes = 'safariOld' | 'safariNew' | 'chromeAndroid' | 'chromeIos' | 'other';
export type AddToHomeBrowserContentDataTypes = {
  [key in BrowsersTypes]: {
    title: string;
    type: OperatingSystemTypes;
    items: { script?: (ReactElement | string)[]; no?: number; image?: string }[];
  };
};
