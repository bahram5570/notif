import { QuestionConfig } from './components/types';

import { SubscribtionListType } from './types';

export const SubscribtionList: SubscribtionListType[] = [
  {
    discountNumber: '55%',
    mounth: 'یک‌ساله',
    pricePerMounth: 44,
    price: '535.000',
    eventName: 'box_offer_year',
  },
  {
    discountNumber: '45%',
    mounth: '6 ماهه',
    pricePerMounth: 54,
    price: '328.000',
    eventName: 'box_offer_month',
  },
];

export const QUESTIONS: QuestionConfig[] = [
  {
    id: 'q1',
    title: 'چند وقته از ایمپو استفاده می‌کنی؟',
    options: [
      {
        label: 'از ایمپو استفاده می‌کنم',
        value: 'a',
        subOptions: [
          { label: ' کمتر از یک ماهه که از ایمپو استفاده می‌کنم', value: 'a1', number: 1 },
          { label: 'بیشتر از ۶ ماهه که از ایمپو استفاده می‌کنم', value: 'a2', number: 2 },
          { label: 'بیشتر از یکساله که از ایمپو استفاده می‌کنم', value: 'a3', number: 3 },
        ],
      },
      { label: 'قبلا از ایمپو استفاده می‌کردم', value: 'b', number: 4 },
      { label: 'از ایمپو استفاده نمی‌کنم', value: 'c', number: 5 },
    ],
  },
  {
    id: 'q2',
    title: 'بهمون بگو…',
    options: [
      { label: 'مجردم', value: '1', number: 1 },
      { label: 'در رابطه‌ام', value: '2', number: 2 },
      { label: 'باردار یا صاحب فرزندم', value: '3', number: 3 },
    ],
  },
  {
    id: 'q3',
    title: 'بهترین کاری که این روزها دلت می‌خواد برای خودت انجام بدی چیه؟',
    options: [
      { label: 'یکم آرامش پیدا کنم و ذهنم آروم بشه.', value: 'x1', number: 1 },
      { label: 'برای خودم وقت بذارم و یکم به خودم برسم.', value: 'x2', number: 2 },
      { label: 'بدنم و احساساتم رو بهتر بشناسم.', value: 'x3', number: 3 },
      { label: 'به جسمم بیشتر برسم؛ خواب بهتر، تغذیه، ورزش و چکاپ.', value: 'x4', number: 4 },
    ],
  },
];

export const SubscribtionReferal = 'https://weareimpo.ir/referal?type=10';
