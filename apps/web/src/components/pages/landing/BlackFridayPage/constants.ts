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
    title: 'آیا با ایمپو آشنا هستی؟',
    options: [
      {
        label: 'بله یه مدته که آشنا هستم',
        value: 'a',
        subOptions: [
          { label: 'سه ماه', value: 'a1' },
          { label: 'شش ماه', value: 'a2' },
          { label: 'یک سال', value: 'a3' },
        ],
      },
      { label: 'نه استفاده نکردم', value: 'b' },
      { label: 'قبلا استفاده میکردم ولی الان نه', value: 'c' },
    ],
  },
  {
    id: 'q2',
    title: 'سؤال دوم',
    options: [
      { label: 'گزینه ۱', value: '1' },
      { label: 'گزینه ۲', value: '2' },
      { label: 'گزینه ۳', value: '3' },
    ],
  },
  {
    id: 'q3',
    title: 'سؤال سوم',
    options: [
      { label: 'X1', value: 'x1' },
      { label: 'X2', value: 'x2' },
      { label: 'X3', value: 'x3' },
    ],
  },
];
