import { SensitiveQuestionDataType } from './type';

export const SENSITIVE_POINTS_BODY_QUESTION_STEP_QUERY_NAME = 'step';
export const SENSITIVE_POINTS_BODY_QUESTION_Total_SCORE = 'totalScore';

export const SENSITIVE_POINTS_BODY_QUESTION_DATA: SensitiveQuestionDataType[] = [
  {
    image: '/assets/images/sensitive/1.webp',
    question: 'هنگامی که بخشی از بدنم لمس می‌شود، می‌توانم به‌وضوح تغییرات حس بدنم را تشخیص دهم.',
    answers: [
      { answer: ' اصلاً درست نیست', score: 1 },
      { answer: 'کمی درست است', score: 2 },
      { answer: 'بیشتر اوقات درست است', score: 3 },
      { answer: ' کاملاً درست است', score: 4 },
    ],
  },
  {
    image: '/assets/images/sensitive/2.webp',
    question: 'وقتی به بدنم توجه می‌کنم، به‌راحتی متوجه مناطق گرم‌تر، سردتر یا حساس‌تر می‌شوم.',
    answers: [
      { answer: 'هرگز', score: 1 },
      { answer: 'گاهی', score: 2 },
      { answer: 'معمولاً', score: 3 },
      { answer: 'همیشه ', score: 4 },
    ],
  },
  {
    image: '/assets/images/sensitive/3.webp',
    question: 'می‌دانم در چه بخش‌هایی از بدنم لمس آرام، لذت‌بخش‌تر از لمس سریع است.',
    answers: [
      { answer: 'نمی‌دانم', score: 1 },
      { answer: 'تا حدی می‌دانم', score: 2 },
      { answer: 'اغلب می‌دانم', score: 3 },
      { answer: 'دقیق می‌دانم ', score: 4 },
    ],
  },
  {
    image: '/assets/images/sensitive/4.webp',
    question: 'از تجربه نوع جدیدی از تماس یا لمس لذت می‌برم، حتی اگر متفاوت باشد.',
    answers: [
      { answer: 'اصلاً', score: 1 },
      { answer: 'گاهی', score: 2 },
      { answer: 'معمولاً', score: 3 },
      { answer: 'همیشه', score: 4 },
    ],
  },
  {
    image: '/assets/images/sensitive/5.webp',
    question: 'برایم هیجان‌انگیز است اگر لمس بدنم با فشار یا ریتم متفاوت امتحان شود.',
    answers: [
      { answer: 'بی‌تفاوتم', score: 1 },
      { answer: 'کمی هیجان‌انگیز است', score: 2 },
      { answer: ' اغلب لذت‌بخش است', score: 3 },
      { answer: 'بسیار لذت‌بخش است', score: 4 },
    ],
  },
  {
    image: '/assets/images/sensitive/13.webp',
    question: ' بیشتر به لمس آرام، طولانی و تدریجی پاسخ بدنی مثبت نشان می‌دهم.',
    answers: [
      { answer: 'نه', score: 1 },
      { answer: 'تا حدودی', score: 2 },
      { answer: 'بله', score: 3 },
      { answer: 'قطعاً بله', score: 4 },
    ],
  },
  {
    image: '/assets/images/sensitive/7.webp',
    question: 'از لمس در نواحی غیر جنسی (مثل گردن، پشت، بازو یا ران) بیشتر از نواحی جنسی  لذت می‌برم.',
    answers: [
      { answer: 'نه', score: 1 },
      { answer: 'گاهی', score: 2 },
      { answer: 'معمولاً', score: 3 },
      { answer: 'زیاد ', score: 4 },
    ],
  },
  {
    image: '/assets/images/sensitive/8.webp',
    question: 'می‌توانم تشخیص دهم که در کدام قسمت بدن تماس باعث آرامش عمیق‌تر می‌شود.',
    answers: [
      { answer: 'نمی‌دانم', score: 1 },
      { answer: 'کمی می‌دانم', score: 2 },
      { answer: 'اغلب تشخیص می‌دهم', score: 3 },
      { answer: 'کاملاً آگاه هستم ', score: 4 },
    ],
  },
  {
    image: '/assets/images/sensitive/9.webp',
    question: 'اگر شریکم از روش یا وسیله جدید برای لمس استفاده کند، احساس کنجکاوی و هیجان دارم.',
    answers: [
      { answer: 'نه', score: 1 },
      { answer: 'کمی', score: 2 },
      { answer: 'زیاد', score: 3 },
      { answer: 'خیلی زیاد', score: 4 },
    ],
  },
  {
    image: '/assets/images/sensitive/10.webp',
    question: 'وقتی تمرکز می‌کنم، می‌توانم حتی تغییرات ظریف در واکنش بدنم به لمس را حس کنم.',
    answers: [
      { answer: 'هرگز', score: 1 },
      { answer: 'گاهی', score: 2 },
      { answer: 'معمولاً', score: 3 },
      { answer: 'همیشه ', score: 4 },
    ],
  },
  {
    image: '/assets/images/sensitive/11.webp',
    question: 'لمس با دماهای متفاوت (مثل گرم یا خنک) برایم جذاب است',
    answers: [
      { answer: ' اصلاً نه', score: 1 },
      { answer: 'کمی', score: 2 },
      { answer: 'زیاد', score: 3 },
      { answer: 'خیلی زیاد', score: 4 },
    ],
  },
  {
    image: '/assets/images/sensitive/12.webp',
    question: 'در زمان لمس یا تحریک، توجه دارم که کدام ناحیه واکنش شدیدتر نشان می‌دهد؟',
    answers: [
      { answer: 'نه', score: 1 },
      { answer: 'گاهی', score: 2 },
      { answer: 'اغلب', score: 3 },
      { answer: 'همیشه', score: 4 },
    ],
  },
  {
    image: '/assets/images/sensitive/13.webp',
    question: 'برایم مهم است که لمس بدن با احساس صمیمیت یا نگاه همراه باشد',
    answers: [
      { answer: 'اصلاً', score: 1 },
      { answer: 'کمی', score: 2 },
      { answer: 'زیاد', score: 3 },
      { answer: 'خیلی زیاد', score: 4 },
    ],
  },
  {
    image: '/assets/images/sensitive/14.webp',
    question: 'وقتی بدنم را نوازش می‌شود، می‌توانم نواحی را پیدا کنم که در آن‌ها حس گرما یا لرزش بیشتری دارم',
    answers: [
      { answer: 'نه', score: 1 },
      { answer: 'کمی', score: 2 },
      { answer: 'معمولاً', score: 3 },
      { answer: 'همیشه', score: 4 },
    ],
  },
  {
    image: '/assets/images/sensitive/15.webp',
    question: ' با تمرین لمس آرام و آگاهانه، می‌توانم شدت لذت یا آرامش را در بدنم افزایش دهم.',
    answers: [
      { answer: 'نه اصلا', score: 1 },
      { answer: 'خیلی کم', score: 2 },
      { answer: 'زیاد', score: 3 },
      { answer: 'خیلی زیاد', score: 4 },
    ],
  },
];
