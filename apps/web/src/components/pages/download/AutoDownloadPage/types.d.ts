import { StaticImageData } from 'next/image';

type HelpStep = {
  img: StaticImageData;
  title: string;
};

type BrowserType = 'chrome' | 'samsungbrowser' | 'other';

export type HelpDataType = Record<BrowserType, HelpStep[]>;
