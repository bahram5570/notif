import chromeStep1 from '@assets/images/downloadPage/chromeStep1.webp';
import chromeStep2 from '@assets/images/downloadPage/chromeStep2.webp';
import chromeStep3 from '@assets/images/downloadPage/chromeStep3.webp';
import samsungStep1 from '@assets/images/downloadPage/sumsungStep1.webp';
import samsungStep2 from '@assets/images/downloadPage/sumsungStep2.webp';

import { HelpDataType } from './types';

export const HelpData: HelpDataType = {
  chrome: [
    { img: chromeStep1, title: 'اول روی این پیام کلیک کن' },
    { img: chromeStep2, title: 'یا روی نوتیفیکیشن بالای صفحه کلیک کن' },
    { img: chromeStep3, title: 'وارد صفحه دانلود شو و روی فایل نصب کلیک کن' },
  ],
  samsungbrowser: [
    { img: samsungStep1, title: 'روی نوتیفیکیشن بالای صفحه کلیک کن' },
    { img: samsungStep2, title: 'وارد صفحه دانلود شو و روی فایل نصب کلیک کن' },
  ],
  other: [],
};

export const getBrowser = (): 'chrome' | 'samsungbrowser' | 'other' => {
  if (typeof window === 'undefined') return 'other';

  const ua = navigator.userAgent.toLowerCase();

  if (ua.includes('samsungbrowser')) return 'samsungbrowser';

  if (
    (ua.includes('chrome') || ua.includes('crios')) &&
    !ua.includes('samsungbrowser') &&
    !ua.includes('edg') &&
    !ua.includes('opr')
  ) {
    return 'chrome';
  }

  return 'other';
};
