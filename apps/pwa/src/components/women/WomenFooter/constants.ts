import FooterCalendarLottie from '@assets/lottie/tabsLottie/calendar_lottie.json';
import FooterClinicLottie from '@assets/lottie/tabsLottie/clinic_lottie.json';
import FooterCycleLottie from '@assets/lottie/tabsLottie/cycle_lottie.json';
import FooterMateLottie from '@assets/lottie/tabsLottie/partner_lottie.json';
import FooterShareExperienceLottie from '@assets/lottie/tabsLottie/social_lottie.json';

export const FOOTER_PAGES_LIST = [
  { url: '/protected/shareExperience', Icon: FooterShareExperienceLottie, title: 'تجربه‌ها' },
  { url: '/protected/partner', Icon: FooterMateLottie, title: 'هم‌دل' },
  { url: '/protected/cycle', Icon: FooterCycleLottie, title: 'چرخه' },
  { url: '/protected/clinic', Icon: FooterClinicLottie, title: 'کلینیک' },
  { url: '/protected/calendar', Icon: FooterCalendarLottie, title: 'تقویم' },
];

export const FOOTER_HEIGTH = 80;
