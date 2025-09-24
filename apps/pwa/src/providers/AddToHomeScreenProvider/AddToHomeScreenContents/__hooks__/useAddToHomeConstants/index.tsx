import AndroidIcon from '@assets/icons/android.svg';
import AppleIcon from '@assets/icons/apple.svg';
import ShareIcon from '@assets/icons/share.svg';

import { AddToHomeBrowserContentDataTypes, AddToHomeMainContentDataTypes } from '../../types';

const useAddToHomeConstants = () => {
  const mainData: AddToHomeMainContentDataTypes = {
    ios: {
      title: 'وب اپلیکیشن ایمپو',
      subTitle: 'بهترین راه برای دسترسی آیفون...',
      items: ['بدون نیاز به نصب', 'بدون نیاز به اشتراک استورها', 'بدون تحریم و محدودیت‌های آیفون'],
      icon: AppleIcon,
      btnScript: 'نصب وب اپلیکیشن',
    },
    android: {
      title: 'وب اپلیکیشن ایمپو',
      subTitle: 'بهترین راه برای دسترسی به اپلیکیشن ایمپو...',
      items: ['بدون نیاز به نصب', 'بدون نیاز به اشتراک استورها', 'دسترسی آسان و سریع'],
      icon: AndroidIcon,
      btnScript: 'نصب وب اپلیکیشن',
    },
    windows: {
      title: '',
      subTitle: '',
      items: [],
      icon: AndroidIcon,
      btnScript: '',
    },
  };

  const browserData: AddToHomeBrowserContentDataTypes = {
    safariOld: {
      type: 'ios',
      title: 'نصب اپلیکیشن ایمپو برای آیفون',
      items: [
        {
          no: 1,
          script: [
            'در منوی مرورگر (نوار پایین صفحه)',
            <ShareIcon className="w-6 h-auto inline mx-2" style={{ stroke: '#1C274C' }} key={''} />,
            'انتخاب کنید',
          ],
          image: '/assets/images/addToHomeScreen/safariOld_1.webp',
        },
        {
          no: 2,
          script: ['به پایین رفته و گزینه Add to homescreen را لمس کنید'],
          image: '/assets/images/addToHomeScreen/safariOld_2.webp',
        },
        { no: 3, script: ['حالا دیگه ایمپو کنار بقیه اپلیکیشن های شماست!'] },
      ],
    },

    safariNew: {
      type: 'ios',
      title: 'نصب اپلیکیشن ایمپو برای آیفون',
      items: [
        {
          no: 1,
          script: ['روی منوی پایین سافاری و گزینه سه نقطه کلیک کنید'],
          image: '/assets/images/addToHomeScreen/safariNew_1.webp',
        },
        {
          no: 2,
          script: ['از منوی باز شده، روی گزینه share کلیک کنید'],
          image: '/assets/images/addToHomeScreen/safariNew_2.webp',
        },
        {
          no: 3,
          script: ['به پایین رفته و گزینه Add to homescreen را لمس کنید'],
          image: '/assets/images/addToHomeScreen/safariNew_3.webp',
        },
        {
          no: 4,
          script: ['حالا دیگه ایمپو کنار بقیه اپلیکیشن های شماست!'],
        },
      ],
    },

    chromeIos: {
      type: 'ios',
      title: 'نصب اپلیکیشن ایمپو برای آیفون',
      items: [
        {
          no: 1,
          script: [
            'در منوی مرورگر (نوار بالای صفحه)',
            <ShareIcon className="w-6 h-auto inline mx-2" style={{ stroke: '#1C274C' }} key={''} />,
            'انتخاب کنید',
          ],
          image: '/assets/images/addToHomeScreen/chromeIos_1.webp',
        },
        {
          no: 2,
          script: ['به پایین رفته و گزینه Add to homescreen را لمس کنید'],
          image: '/assets/images/addToHomeScreen/chromeIos_2.webp',
        },
        {
          no: 3,
          script: ['حالا دیگه ایمپو کنار بقیه اپلیکیشن های شماست!'],
        },
      ],
    },

    chromeAndroid: {
      type: 'android',
      title: 'نصب وب اپلیکیشن ایمپو',
      items: [
        {
          no: 1,
          script: ['در نوار بالای صفحه گزینه سه نقطه را انتخاب کنید'],
          image: '/assets/images/addToHomeScreen/chromeAndroid_1.webp',
        },
        {
          no: 2,
          script: ['به پایین رفته و گزینه Add to homescreen را لمس کنید'],
          image: '/assets/images/addToHomeScreen/chromeAndroid_2.webp',
        },
        {
          no: 3,
          script: ['حالا دیگه ایمپو کنار بقیه اپلیکیشن های شماست!'],
        },
      ],
    },

    other: {
      title: '',
      type: 'windows',
      items: [],
    },
  };

  return { mainData, browserData };
};

export default useAddToHomeConstants;
