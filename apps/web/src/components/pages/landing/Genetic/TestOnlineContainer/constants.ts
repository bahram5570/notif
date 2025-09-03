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
    header: {
      title: 'ریسک بالا',
      description: 'مشاوره با متخصص ژنتیک و انجام آزمایشات پیشرفته',
      color: 'Error_Error',
    },
    section1: {
      intro:
        ' نتیجه‌ای که بر اساس پاسخ‌های شما به‌دست اومده، نشون می‌ده که ریسک ژنتیکی‌ات در سطح نسبتاً بالا قرار داره.',
      title: '',
      text: '',
      items: [],
      textBottom: '',
    },
    section2: [
      {
        title: '',
        icon: '',
        text: '',
      },
    ],
    section3: [
      {
        title: '',
        icon: '',
        text: '',
      },
    ],
    footer: {
      note: 'نگران نباشید! توصیه‌های فوق به شما کمک می‌کند ...',
      buttonText: 'مشاوره شوم',
    },
  },
  result2: {
    header: {
      title: 'ریسک متوسط',
      description: 'مشاوره با متخصص ژنتیک و انجام آزمایشات پیشرفته',
      color: 'Warning_Warning',
    },
    section1: {
      intro:
        ' نتیجه‌ای که بر اساس پاسخ‌های شما به‌دست اومده، نشون می‌ده که ریسک ژنتیکی‌ات در سطح نسبتاً بالا قرار داره.',
      title: '',
      text: '',
      items: [],
      textBottom: '',
    },
    section2: [
      {
        title: '',
        icon: '',
        text: '',
      },
    ],
    section3: [
      {
        title: '',
        icon: '',
        text: '',
      },
    ],
    footer: undefined,
  },
  result3: {
    header: {
      title: 'ریسک پایین',
      description: 'مشاوره با متخصص ژنتیک و انجام آزمایشات پیشرفته',
      color: 'Success_Success',
    },
    section1: {
      intro:
        'خیالت راحت باشه، ریسک ژنتیکی‌ات فعلاً پایینه و این یعنی احتمال مشکل ژنتیکی جدی برای بارداریت خیلی کمه. حاﻻ برات خیلی خلاصه و ساده توضیح می‌دم که چرا اینطوره و چیکار کنی!',
      title: 'چرا ریسکت پایینه؟',
      text: 'با توجه به موارد ریسکی که برای باردار شدن اهمیت دارن مثل :',
      items: [
        {
          title: 'سابقه‌ی خانوادگی',
          icon: '/assets/images/genetic/result/family.webp',
        },
        {
          title: 'سن',
          icon: '/assets/images/genetic/result/age.webp',
        },
        {
          title: 'سبک زندگی‌ات',
          icon: '/assets/images/genetic/result/lifeStyle.webp',
        },
      ],
      textBottom:
        'یه سری فاکتورها هستن که ریسک رو یه کم باﻻ می‌برن. ولی این اصلاً به معنی ایجاد یک مشکل حتمی در فرزند تو یا اختلال در بارداری نیست! درواقع فقط با مراقبت‌هایی که مشاور ژنتیک بهت گوشزد می‌کنه می‌تونی خیالت رو بابت داشتن یک بارداری عالی و سالم راحت کنی.',
    },
    section2: [
      {
        title: 'مشاوره',
        icon: '/assets/images/genetic/lowRisk/1.webp',
        text: 'اگه سوالی داری، با دکتر زنان یا مشاور ژنتیک حرف بزن.',
      },
      {
        title: 'اسید فولیک',
        icon: '/assets/images/genetic/lowRisk/2.webp',
        text: 'روزی 400 میکروگرم از ۱ ماه قبل از اقدام شروع کن (اگر تاﻻسمی مینور هستی دوز ۵ برای ۳ ماه توصیه میشه)، برای سلامت جنین و کاهش احتمال نقص در لوله عصبی عالیه..',
      },
      {
        title: 'زندگی سالم',
        icon: '/assets/images/genetic/lowRisk/3.webp',
        text: 'سیگار، قلیان و الکل رو کنار بذار (از دود آن‌ها هم دوری کن)، تغذیه خوب و ورزش رو ادامه بده.',
      },
    ],
    section3: [
      {
        title: 'آزمایش خاصی هست که انجام بدم؟',
        icon: '/assets/images/genetic/lowRisk/4.webp',
        text: 'این فقط یه ارزیابی اولیه‌ست، پس آزمایش‌ها و مشورت با مشاور ژنتیک رو جدی بگیر حتی اگر فرزند سالم داری و هیچوقت مشکل ژنتیکی‌ای متوجه‌تون نبوده. با خیال راحت برو جلو و اگه چیزی ذهنت رو مشغول کرد از ما بپرس تا کمکت کنیم!',
      },
      {
        title: 'آزمایش ساده',
        icon: '/assets/images/genetic/lowRisk/5.webp',
        text: 'قبل بارداری، یه چکاپ خون روتین و سونوگرافی انجام بده.',
      },
      {
        title: ' بررسی اسپرم',
        icon: '/assets/images/genetic/lowRisk/5.webp',
        text: 'همسرت حتماً  یک یا نهایتاً دو هفته قبل از اقدام یک آزمایش آنالیز اسپرم انجام بده.',
      },
    ],
    footer: undefined,
  },
};
