import { ImpoServicesTypes } from './types';

const BASEURL = 'https://impo.app';

export const ImpoServiceData: ImpoServicesTypes[] = [
  {
    title: 'اقدام به بارداری',
    image: '/assets/images/impo-services/intention.webp',
    url: `${BASEURL}/landing/intention`,
    id: 'intent_home',
  },
  {
    title: 'تقویم قاعدگی',
    image: '/assets/images/impo-services/tracker.webp',
    url: `${BASEURL}/landing/tracker`,
    id: 'period_home',
  },
  {
    title: 'بارداری',
    image: '/assets/images/impo-services/pregnancy.webp',
    url: `${BASEURL}/landing/pregnancyLanding`,
    id: 'pregnancy_home',
  },
  {
    title: 'مادر و کودک',
    image: '/assets/images/impo-services/breastfeeding.webp',
    url: `${BASEURL}/landing/breastfeeding`,
    id: 'breastfeeding_home',
  },
  {
    title: 'پیشگیری از بارداری',
    image: '/assets/images/impo-services/contraception.webp',
    url: `${BASEURL}/landing/tracker`,
    id: 'prevent_home',
  },
  {
    title: 'ایمپو آقایان',
    image: '/assets/images/impo-services/impoMen.webp',
    url: `${BASEURL}/men`,
    id: 'impomen_home',
  },
];
