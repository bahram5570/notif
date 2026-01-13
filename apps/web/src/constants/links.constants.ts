import DarkIcon from '@assets/icons/themeDark.svg';
import LightIcon from '@assets/icons/themeLight.svg';
import SystemIcon from '@assets/icons/themeSystem.svg';

import { HEADER_LINKS_TYPES } from '@components/HeaderFooterContainer/Header/types';
import { ThemeTypes } from '@theme/types';

export const STAGE_URL = 'http://195.88.208.143:8082';
export const SSL_STAGE_URL = 'https://stage.weareimpo.ir';
export const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL || '';
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || '';

export const OLD_OPEN_APP_LINKS = ['/privacy.html', '/impoMenManual.html'];
export const EXCLUDE_EXTENSIONS = [
  'js',
  'css',
  'png',
  'jpg',
  'jpeg',
  'webp',
  'heic',
  'gif',
  'svg',
  'ico',
  'woff',
  'woff2',
  'ttf',
  'eot',
  'map',
];

// # Android download links
export const MYKET_LINK_WOMEN_URL = 'https://myket.ir/app/ir.duck.impo';
export const CAFEBAZAAR_LINK_WOMEN_URL = 'https://cafebazaar.ir/app/ir.duck.impo';
export const MYKET_LINK_MEN_URL = 'https://myket.ir/app/ir.duck.impomen';
export const CAFEBAZAAR_LINK_MEN_URL = 'https://cafebazaar.ir/app/ir.duck.impomen';

// # IOS download links
export const APP_STORE_LINK_MEN_URL = 'https://apps.apple.com/us/app/impo-men/id6740815518';
export const PWA_LINK_MEN_URL = 'https://man.impo.app/';
export const APP_STORE_LINK_WOMEN_URL = 'https://apps.apple.com/us/app/impo-health/id6736879093';

export const PWA_LINK_WOMEN_URL = process.env.NEXT_PUBLIC_PWA_URL || '';

export const HEADER_LINKS_LIST: HEADER_LINKS_TYPES = [
  {
    title: 'خدمات ایمپو',
    linkTo: [
      { title: 'بارداری', linkTo: '/landing/pregnancyLanding' },
      { title: 'پریود و پیشگیری', linkTo: '/landing/tracker' },
      { title: 'اقدام به بارداری', linkTo: '/landing/intention' },
      { title: 'شیردهی', linkTo: '/landing/breastfeeding' },
      { title: 'همدلی', linkTo: '/sympathy' },
    ],
  },
  {
    title: 'ابزارهای آنلاین',
    linkTo: [
      { title: 'محاسبه سن بارداری و تقویم  بارداری', linkTo: '/calendarOfPregnancy' },
      { title: 'تست حاملگی آنلاین', linkTo: '/landing/pregnancy' },
      { title: 'محاسبه آنلاین تخمک گذاری', linkTo: '/ovulation' },
      { title: 'محاسبه آنلاین سیکل قاعدگی', linkTo: '/menstrual-cycle' },
      { title: 'ابزار انتخاب اسم دختر', linkTo: '/landing/girl-name' },
      { title: 'ابزار انتخاب اسم پسر', linkTo: '/landing/boy-name' },
      { title: 'تست ژنتیک قبل از بارداری', linkTo: '/landing/genetic-screening-before-pregnancy' },
    ],
  },
  {
    title: 'مجله سلامت',
    linkTo: [
      { title: 'اقدام به بارداری', linkTo: '/category/getting-pregnant' },
      { title: 'بارداری و زایمان', linkTo: '/category/pregnancy-and-childbirth' },
      { title: 'پیشگیری از بارداری', linkTo: '/category/preventing-pregnancy' },
      { title: 'پریود و قاعدگی', linkTo: '/category/period' },
      { title: 'سکس‌تراپی', linkTo: '/category/sex-therapy' },
      { title: 'روانشناسی', linkTo: '/category/psychology' },
      { title: 'سلامت بانوان', linkTo: '/category/womens-health' },
      { title: 'سلامت آقایان', linkTo: '/category/hello-gentlemen' },
      { title: 'همدلی و رابطه عاطفی', linkTo: '/category/relationship' },
      { title: 'بیماری‌ها', linkTo: '/category/diseases' },
      { title: 'خودمراقبتی', linkTo: '/category/selfcare' },
    ],
  },
  { title: 'کلینیک سلامت', linkTo: '/landing/clinic' },
  { title: 'ایمپو آقایان', linkTo: '/men' },
];

export const HEADER_THEME_LIST: { title: string; mode: ThemeTypes; Icon: any }[] = [
  { title: 'تاریک', mode: 'dark', Icon: DarkIcon },
  { title: 'روشن', mode: 'light', Icon: LightIcon },
  { title: 'خودکار', mode: 'system', Icon: SystemIcon },
];
