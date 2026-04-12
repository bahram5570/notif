import CalendarActiveIcon from '@assets/icons/footer/calendar-fill.svg';
import CalendarNotActiveIcon from '@assets/icons/footer/calendar-stroke.svg';
import PartnerActiveIcon from '@assets/icons/footer/hamdel-fill.svg';
import PartnerNotActiveIcon from '@assets/icons/footer/hamdel-stroke.svg';
import KnowledgeActiveIcon from '@assets/icons/footer/knowledge-fill.svg';
import KnowledgeNotActiveIcon from '@assets/icons/footer/knowledge-stroke.svg';

export const FOOTER_PAGES_LIST = [
  {
    url: '/protected/knowledge',
    icons: { Active: KnowledgeActiveIcon, NotActive: KnowledgeNotActiveIcon },
    title: 'دانش',
  },
  { url: '/protected/partner', icons: { Active: PartnerActiveIcon, NotActive: PartnerNotActiveIcon }, title: 'همدل' },
  {
    url: '/protected/calendar',
    icons: { Active: CalendarActiveIcon, NotActive: CalendarNotActiveIcon },
    title: 'تقویم',
  },
];
