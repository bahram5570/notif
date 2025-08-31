import { GeneticTestOnlineQuestionListTypes, GeneticTestOnlineResultListTypes } from './types';

export const GENETIC_TEST_ONLINE_STEP_QUERY_NAME = 'step';
export const GENETIC_TEST_ONLINE_STEP_SESSION_SCORE_NAME = 'testOnlineScore';
export const GENETIC_TEST_ONLINE_STEP_SESSION_DESCRIPTION_NAME = 'testOnlineDescription';

export const GENETIC_TEST_ONLINE_QUESTION_LIST: GeneticTestOnlineQuestionListTypes = {
  0: {
    step: 0,
    title: 'سن شما (مادر آینده) چند سال است؟',
    items: [
      { title: 'کمتر از ۳۰ سال', score: 0 },
      { title: '۳۰ تا ۳۵ سال', score: 1 },
      { title: 'بالای ۳۵ سال', score: 3 },
    ],
  },
  1: {
    step: 1,
    title: 'سن همسر/پدر آینده چند سال است؟',
    items: [
      { title: 'کمتر از ۴۰ سال', score: 0 },
      { title: '۴۰ تا ۵۰ سال', score: 1 },
      { title: 'بالای ۵۰ سال', score: 2 },
    ],
  },
  2: {
    step: 2,
    title: 'آیا شما و همسرتان خویشاوند هستید؟',
    items: [
      { title: 'خیر', score: 0 },
      { title: 'بله، فامیل درجه یک یا دو', score: 4 },
      { title: 'بله، فامیل دورتر', score: 2 },
    ],
  },
  3: {
    step: 3,
    title: 'آیا در خانواده شما یا همسرتان سابقه بیماری ژنتیکی وجود دارد؟',
    items: [
      { title: 'خیر', score: 0 },
      { title: 'بله، بیماری مندلی', score: 5 },
      { title: 'بله، سایر بیماری‌ها', score: 3 },
    ],
  },
  4: {
    step: 4,
    title: 'آیا در خانواده شما یا همسرتان سابقه سقط مکرر وجود دارد؟',
    items: [
      { title: 'خیر', score: 0 },
      { title: 'بله', score: 3 },
    ],
  },
  5: {
    step: 5,
    title: 'آیا در خانواده شما یا همسرتان سابقه بیماری‌های کروموزومی وجود دارد؟',
    items: [
      { title: 'خیر', score: 0 },
      { title: 'بله', score: 9 },
    ],
  },
  6: {
    step: 6,
    title: 'آیا شما یا همسرتان سابقه بیماری مزمن دارید؟',
    items: [
      { title: 'خیر', score: 0 },
      { title: 'بله', score: 2 },
    ],
  },
  7: {
    step: 7,
    title: 'آیا شما یا همسرتان آزمایش ژنتیکی انجام داده‌اید؟',
    items: [
      { title: 'خیر', score: 0 },
      { title: 'بله، نتیجه نرمال', score: 0 },
      { title: 'بله، ناقل یا مبتلا', score: 5 },
    ],
  },
  8: {
    step: 8,
    title: 'آیا شما یا همسرتان سابقه مشکلات باروری دارید؟',
    items: [
      { title: 'خیر', score: 0 },
      { title: 'بله', score: 2 },
    ],
  },
  9: {
    step: 9,
    title: 'آیا شما یا همسرتان سیگار، الکل یا مواد مخدر مصرف می‌کنید؟',
    items: [
      { title: 'خیر', score: 0 },
      { title: 'بله', score: 2 },
    ],
  },
  10: {
    step: 10,
    title: 'آیا شما یا همسرتان در معرض مواد شیمیایی یا اشعه هستید؟',
    items: [
      { title: 'خیر', score: 0 },
      { title: 'بله', score: 2 },
    ],
  },
  11: {
    step: 11,
    title: 'آیا مکمل اسید فولیک مصرف می‌کنید؟',
    items: [
      { title: 'بله', score: 0 },
      { title: 'خیر', score: 1 },
    ],
  },
  12: {
    step: 12,
    title: 'آیا در خانواده شما یا همسرتان سابقه تولد نوزاد با ناهنجاری مادرزادی وجود دارد؟',
    items: [
      { title: 'خیر', score: 0 },
      { title: 'بله', score: 4 },
    ],
  },
  13: {
    step: 13,
    title: 'آیا مورد خاصی وجود دارد که نگران آن هستید؟',
    items: [
      { title: 'خیر', score: 0 },
      { title: 'بله (لطفاً توضیح دهید)', score: 2 },
    ],
  },
};

export const GENETIC_TEST_ONLINE_RESULTS_LIST: GeneticTestOnlineResultListTypes = {
  result1: {
    title: 'ریسک ژنتیکی/باروری بالا',
    message:
      'پیشنهاد می‌شود برای مشاوره ژنتیک قبل از بارداری اقدام کنید. بررسی‌های ناقلی، کاریوتایپ و برنامه‌ریزی درمان بیماری‌های زمینه‌ای اهمیت دارد.',
  },
  result2: {
    title: 'ریسک متوسط',
    message:
      'بهتر است درباره برخی عوامل خطر با پزشک یا مشاور ژنتیک صحبت کنید و برخی آزمایش‌ها یا غربالگری‌های هدفمند انجام دهید.',
  },
  result3: {
    title: 'ریسک پایین',
    message: 'وضعیت کلی مناسب است. رعایت مراقبت‌های پیش از بارداری و مشاوره اولیه مفید است.',
  },
};
