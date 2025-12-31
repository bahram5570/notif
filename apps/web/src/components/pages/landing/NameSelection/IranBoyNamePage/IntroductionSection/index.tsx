import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

const IntroductionSection = () => {
  return (
    <div className="flex justify-start flex-col">
      <CustomTypography tagType="h2" fontSize="Headline_Medium" className="pb-5 !text-impo_Neutral_OnBackground">
        انتخاب اسم پسر ایرانی اصیل لاکچری با ابزار آنلاین اپلیکیشن ایمپو
      </CustomTypography>
      <CustomTypography fontSize="Body_Large" className="!text-impo_Surface_InverseSurface">
        اپلیکیشن ایمپو علاوه بر قابلیت‌هایی مثل
        <CustomLink href="/calendarOfPregnancy" className="!text-impo_PrimaryMan_PrimaryMan">
          محاسبه سن بارداری
        </CustomLink>
        ، کلینیک سلامت و
        <CustomLink href="/landing/clinic" className="!text-impo_PrimaryMan_PrimaryMan">
          دکتر آنلاین
        </CustomLink>
        ، توصیه‌های پزشکی مفید، یادآوری آزمایشات و مراقبت‌های بارداری، یه ابزار کاربردی دیگه هم برای انتخاب
        <CustomLink href="/landing/girl-name" className="!text-impo_PrimaryMan_PrimaryMan">
          اسم دختر
        </CustomLink>
        و
        <CustomLink href="/landing/boy-name" className="!text-impo_PrimaryMan_PrimaryMan">
          اسم پسر
        </CustomLink>
        داره.
      </CustomTypography>
      <CustomTypography fontSize="Body_Large" className="!text-impo_Surface_InverseSurface">
        برای اینکه پروسه انتخاب اسم پسر ایرانی آسون‌تر، سریع‌تر و بهتر باشه، یک ابزار آنلاین انتخاب اسم پسر در اپلیکیشن
        ایمپو وجود داره که انتخاب کردن اسم رو خیلی لذت‌بخش‌تر کرده.
      </CustomTypography>
      <CustomTypography fontSize="Body_Large" className="!text-impo_Surface_InverseSurface">
        در این اپلیکیشن، زمانی‌که وارد بخش «بارداری» بشین، یه بنر جذاب با عنوان «انتخاب اسم نوزاد» وجود داره. با کلیک بر
        روی این بخش، وارد صفحه‌ای می‌شین که چند تا سوال ساده ازتون می‌پرسه تا بدون پیچیدگی، بفهمه دنبال چه نوع اسمی
        هستین. با انتخاب فیلترهای موردنظرتون مثل جنسیت و ریشه اسم، ایمپو یه لیست از اسم‌های پسرانه ایرانی اصیل، خوش‌آوا
        و با معنی، متناسب با سلیقه و معیارهاتون بهتون پیشنهاد می‌ده.
      </CustomTypography>
      <CustomTypography fontSize="Body_Large" className="!text-impo_Surface_InverseSurface">
        در زمان استفاده از این ابزار آنلاین، می‌تونی فیلترها رو تغییر بدی یا کلی اسم دیگه ببینی و بینشون بچرخی. یه ویژگی
        خوب دیگه هم اینه که اسامی بر اساس حروف الفبا دسته‌بندی شدن و انتخاب از بینشون خیلی ساده‌تره. کافیه روی یه حرف
        بزنی تا کلی اسم متنوع ببینی. هر اسمی رو هم که دوست داشتی، می‌تونی لایک یا ذخیره کنی تا بعداً بتونی راحت‌تر بری
        سراغش. با اپلیکیشن ایمپو، پیدا کردن اسم پسر ایرانی مورد‌علاقه‌ات به یه کار خیلی ساده و شیرین تبدیل می‌شه.
      </CustomTypography>
    </div>
  );
};

export default IntroductionSection;
