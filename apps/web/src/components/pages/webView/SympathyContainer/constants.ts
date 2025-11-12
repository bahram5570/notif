import { FaqItemType, StoryItemType } from './type';

export const HEADER_TIP_LIST: { text1: string; text2: string }[] = [
  { text1: ' موضوع گفتگو:', text2: ' هر روز یه چالش جذاب' },
  { text1: 'فضای خصوصی دونفره:', text2: ' آلبوم مشترک عکس‌ها و خاطره‌ها' },

  { text1: ' آگاهی از حال روزانه همدیگه:', text2: ' آگاهی از وضعیت روزانه سیکل و حال روحی جسمی همدیگه' },
];

export const FAG_LIST: FaqItemType[] = [
  {
    question: 'همدلی با پارتنرم به چه دردی می‌خوره؟',
    answer:
      ' با همدلی ایمپو پارتنرت از زمان های مهم چرخه‌ت با خبر میشه و بهش میگیم تو هر دوره‌ای با توجه به روحیات و شرایطتت چطور باهات رفتار کنه و هوات رو داشته باشه',
  },
  {
    question: 'چه اطلاعاتی از من با پارتنرم به‌اشتراک گذاشته می‌شه؟',
    answer: ' فقط اطلاعات مربوط به چرخه قاعدگیت، بیوریتمت و چالش‌ها و خاطره‌های دونفره‌تون',
  },
  {
    question: 'هر هدف نصبی داشته باشم میتونم با پارتنرم از همدلی استفاده کنیم؟',
    answer:
      ' بله. چه بارداری باشی چه در حال اقدام برای بارداری، چه بخوای از بارداری پیشگیری کنی و چه رابطه جنسی با پارتنرت نداشته باشی. تو همه حالت‌ها می‌تونید  به هم وصل بشید و بسته به شرایطتون محتوای متناسب بگیرید',
  },
  {
    question: 'هر وقت بخوام میتونم پارتنرم رو از همدلی حذف کنم؟',
    answer: ': بله. کافیه از قسمت پروفایل، همدل رو انتخاب کنی و حذف همدل رو بزنی. فقط کار 3 ثانیه‌ست 😉',
  },
];

export const STORY_LIST: StoryItemType[] = [
  {
    coverImage: '/assets/images/webView/sympathy/4.webp',
    id: '0',
    title: 'همدلی ایمپو چیه؟',
    stories: [{ type: 'video', url: '/assets/images/webView/sympathy/videoTest.webm' }],
  },
  {
    coverImage: '/assets/images/webView/sympathy/5.webp',
    id: '1',
    title: 'چطور وصل بشیم؟',
    stories: [{ type: 'video', url: '/assets/images/webView/sympathy/videoTest.webm' }],
  },
];
