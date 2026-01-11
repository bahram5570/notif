import { FaqItemType, StoryItemType } from './type';

// export const HEADER_TIP_LIST: { text1: string; text2: string }[] = [
//   { text1: 'موضوع گفتگو:', text2: ' هر روز یه چالش جذاب' },
//   { text1: 'فضای خصوصی دونفره:', text2: ' آلبوم مشترک عکس‌ها و خاطره‌ها' },

//   { text1: 'آگاهی از حال روزانه همدیگه:', text2: ' آگاهی از وضعیت روزانه سیکل و حال روحی جسمی همدیگه' },
// ];

export const HEADER_TIP_LIST: { text1: string }[] = [
  { text1: 'تو هر شرایطی بهم پیام بدید' },
  { text1: 'از حال هم بی خبر نمونید' },

  { text1: 'تو قسمت چالش به سوالات مشترک جواب بدید' },
];
export const FAG_LIST: FaqItemType[] = [
  {
    question: ' برای استفاده از همدل، پارتنرم باید چه اپی نصب کنه؟',
    answer: 'پارتنرت باید ایمپو آقایان رو از سایت impo.app دانلود کنه',
  },
  {
    question: ' اگر اینترنت قطع باشه؛ همدل ایمپو کار می‌کنه؟',
    answer: 'بله؛ ایمپو چون اپلیکیشن ایرانی هست، با قطعی نت این روزها هم کار می‌کنه',
  },
  {
    question: ' همدل ایمپو چه امکاناتی داره؟',
    answer:
      'امکان ارسال پیام متنی، ذخیره عکس در بخش خاطره‌بازی و دسترسی به سوال‌های چالش برای شناخت بیشتر و همچنین اطلاع از وضعیت چرخه و تقویم خانم ',
  },
  {
    question: 'اگر حین نصب، کد فعال‌سازی رو دریافت نکردم، چکار کنم؟',
    answer: 'در این شرایط با پشتیبان ایمپو و با شماره 09157097500 تماس بگیر، تا همکارانم راهنماییت کنن',
  },
];

export const STORY_LIST: StoryItemType[] = [
  {
    coverImage: '/assets/images/webView/sympathy/4.webp',

    title: 'همدلی ایمپو چیه؟',
    stories: [
      { type: 'Image', url: 'https://s3.ir-tbz-sh1.arvanstorage.ir/impo/1.1.webp' },
      { type: 'Image', url: 'https://s3.ir-tbz-sh1.arvanstorage.ir/impo/1.2.webp' },
    ],
  },
  {
    coverImage: '/assets/images/webView/sympathy/5.webp',

    title: 'چطور وصل بشیم؟',
    stories: [
      { type: 'Image', url: 'https://s3.ir-tbz-sh1.arvanstorage.ir/impo/2.1.webp' },
      { type: 'Image', url: 'https://s3.ir-tbz-sh1.arvanstorage.ir/impo/2.2.webp' },
      { type: 'Image', url: 'https://s3.ir-tbz-sh1.arvanstorage.ir/impo/2.3.webp' },
    ],
  },
];
