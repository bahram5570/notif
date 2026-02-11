import CalendarDarkIcon from '@assets/icons/footer/calendar_dark.svg';
import CalendarLightIcon from '@assets/icons/footer/calendar_light.svg';
import ClinicDarkIcon from '@assets/icons/footer/clinic_dark.svg';
import ClinicLightIcon from '@assets/icons/footer/clinic_light.svg';
import CycleDarkIcon from '@assets/icons/footer/cycle_dark.svg';
import CycleLightIcon from '@assets/icons/footer/cycle_light.svg';
import ShareExperienceDarkIcon from '@assets/icons/footer/experiences_dark.svg';
import ShareExperienceLightIcon from '@assets/icons/footer/experiences_light.svg';
import PartnerDarkIcon from '@assets/icons/footer/partner_dark.svg';
import PartnerLightIcon from '@assets/icons/footer/partner_light.svg';

export const FOOTER_PAGES_LIST = [
  {
    url: '/protected/shareExperience',
    icons: { Dark: ShareExperienceDarkIcon, Light: ShareExperienceLightIcon },
    title: 'تجربه‌ها',
  },
  { url: '/protected/partner', icons: { Dark: PartnerDarkIcon, Light: PartnerLightIcon }, title: 'هم‌دل' },
  { url: '/protected/cycle', icons: { Dark: CycleDarkIcon, Light: CycleLightIcon }, title: 'چرخه' },
  { url: '/protected/clinic', icons: { Dark: ClinicDarkIcon, Light: ClinicLightIcon }, title: 'کلینیک' },
  { url: '/protected/calendar', icons: { Dark: CalendarDarkIcon, Light: CalendarLightIcon }, title: 'تقویم' },
];
