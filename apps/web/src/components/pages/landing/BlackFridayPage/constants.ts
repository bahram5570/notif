import { QuestionConfig } from './components/types';

import { SubscribtionListType } from './types';

export const SubscribtionList: SubscribtionListType[] = [
  {
    discountNumber: '30%',
    mounth: 4,
    pricePerMounth: 80,
    price: '320.000',
  },
  {
    discountNumber: '30%',
    mounth: 1,
    pricePerMounth: 80,
    price: '320.000',
  },
  {
    discountNumber: '30%',
    mounth: 6,
    pricePerMounth: 80,
    price: '320.000',
  },
];

export const QUESTIONS: QuestionConfig[] = [
  {
    id: 'q1',
    title: 'چند وقته از ایمپو استفاده می‌کنی؟',
    options: [
      {
        label: 'در حال استفاده از ایمپو هستم',
        value: 'a',
        subOptions: [
          { label: ' کمتر از یک ماهه که از ایمپو استفاده می‌کنم', value: 'a1' },
          { label: 'بیشتر از ۶ ماهه که از ایمپو استفاده می‌کنم', value: 'a2' },
          { label: 'بیشتر از یکساله که از ایمپو استفاده می‌کنم', value: 'a3' },
        ],
      },
      { label: 'در گذشته از ایمپو استفاده می‌کردم', value: 'b' },
      { label: 'از ایمپو استفاده نمی‌کنم', value: 'c' },
    ],
  },
  {
    id: 'q2',
    title: 'بهمون بگو…',
    options: [
      { label: 'مجردم', value: '1' },
      { label: 'در رابطه‌ام', value: '2' },
      { label: 'باردار یا صاحب فرزندم', value: '3' },
    ],
  },
  {
    id: 'q3',
    title: 'بهترین کاری که این روزها دلت می‌خواد برای خودت انجام بدی چیه؟',
    options: [
      { label: 'یکم آرامش پیدا کنم و ذهنم آروم بشه.', value: 'x1' },
      { label: 'برای خودم وقت بذارم و یکم به خودم برسم.', value: 'x2' },
      { label: 'بدنم و احساساتم رو بهتر بشناسم.', value: 'x3' },
      { label: 'به جسمم بیشتر برسم؛ خواب بهتر، تغذیه، ورزش و چکاپ.', value: 'x4' },
    ],
  },
];
