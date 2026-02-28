import { SupportLinkGeneratorType } from './type';

export const SUPPORT_LINK_LIST: SupportLinkGeneratorType[] = [
  {
    discription: 'سوال یا مشکلت رو اینجا بنویس تا پشتیبان‌های ایمپو در اولین فرصت بهت پاسخ بدن',
    title: 'تیکت به پشتیبانی',
    link: '/protected/supportTicket',
    typeLink: 'internal',
  },
  {
    discription:
      'جهت ارائه شکایات و گزارش ها میتونید از ساعات پاسخگویی: شنبه تا چهارشنبه: 8 تا 24\nپنجشنبه ، جمعه و تعطیلات رسمی: 8 تا 16:30',
    title: 'تماس تلفنی',
    typeLink: 'external',
    supportPhone: '',
  },
];
