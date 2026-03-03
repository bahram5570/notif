import AnarDooniIcon from '@assets/icons/downloads/anarDooni.svg';
import IAppIcon from '@assets/icons/downloads/iApps.svg';
import SibAppIcon from '@assets/icons/downloads/sibApp.svg';
import SibIraniIcon from '@assets/icons/downloads/sibIrani.svg';
import SibchehIcon from '@assets/icons/downloads/sibcheh.svg';

export const Man_IRANIAN_STORES_LIST = [
  {
    title: 'سیبچه',
    icon: <SibchehIcon className="w-6" />,
    linkTo: 'https://sibche.com/applications/impomen',
    id: 'man-sibcheh',
    analyticsId: 'download_sibche_man',
  },
  {
    title: 'اناردونی',
    icon: <AnarDooniIcon className="w-6" />,
    linkTo: 'https://anardoni.com/ios/app/comhealthimpomen',
    id: 'man-anardooni',
    analyticsId: 'download_anardoni_man',
  },
  {
    title: 'سیب ایرانی',
    icon: <SibIraniIcon className="w-6" />,
    linkTo: 'https://sibirani.com/apps/-33/',
    id: 'man-sibirani',
    analyticsId: 'download_sibirani_man',
  },
  {
    title: 'سیب اپ',
    icon: <SibAppIcon className="w-6" />,
    linkTo: 'https://sibapp.com/applications/Impomen',
    id: 'man-sibapp',
    analyticsId: 'download_sibapp_man',
  },
  {
    title: 'آی اپس',
    id: 'man-iapps',
    icon: <IAppIcon className="w-6" />,
    linkTo: 'https://iapps.ir/app/%D8%A7%DB%8C%D9%85%D9%BE%D9%88-%D8%A2%D9%82%D8%A7%DB%8C%D8%A7%D9%86/566902246',
    analyticsId: 'download_iapps_man',
  },
];

export const DOWNLOAD_MODAL_QUERY_NAME = 'downloadModalOpen';
