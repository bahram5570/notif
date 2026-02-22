import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomLink from '@components/ui/CustomLink';

const BodyContent = () => {
  return (
    <div className="mt-10 space-y-6">
      <CustomTypography fontSize="Headline_Medium" tagType="h2" className="!text-impo_Neutral_OnBackground">
        روش محاسبه زمان تخمک‌گذاری بعد از پریود
      </CustomTypography>
      <CustomTypography fontSize="Body_Medium" tagType="p" className="!text-impo_Neutral_OnBackground">
        برای محاسبه زمان تخمک گذاری بعد از پریود انلاین شما باید ابتدا طول چرخه قاعدگی خود، یعنی فاصله بین اولین روز
        پریود تا روز قبل از شروع پریود بعدی را بدانید.
        <strong>
          در یک سیکل منظم ۲۸ روزه به‌طور معمول، تخمک‌گذاری حدود ۱۴ روز قبل از شروع پریود بعدی اتفاق می‌افتد.
        </strong>
        بدن با نشانه‌هایی مثل تغییر ترشحات دهانه رحم یا درد خفیف زیر شکم، زمان آزاد شدن تخمک را اعلام می‌کند. مطالعه
        مقاله
        <CustomLink href="/ovulation" className="!text-impo_Primary_Primary mx-1 inline-block">
          از کجا بفهمم تخمک آزاد شده
        </CustomLink>
        به شما کمک می‌کند تا علائم را بهتر بشناسید و براساس آن محاسبه روز تخمک ‌گذاری را دقیق‌تر انجام دهید.
      </CustomTypography>
      <CustomTypography fontSize="Headline_Small" tagType="h3" className="!text-impo_Neutral_OnBackground">
        نمودار زمان تخمک‌گذاری
      </CustomTypography>
      <CustomTypography fontSize="Body_Medium" tagType="p" className="!text-impo_Neutral_OnBackground">
        <strong>نمودار زمان تخمک‌گذاری</strong> بازه‌هایی که بدن شما بیشترین آمادگی برای بارداری را دارد به‌سادگی مشخص
        می‌کند. این نمودار کل چرخه قاعدگی، از روز اول پریود تا شروع پریود بعدی را نمایش می‌دهد و معمولاً زمان تخمک‌گذاری
        را در میانه چرخه مشخص می‌کند. بازه چند روز قبل از آن تا یک روز بعد نیز به‌عنوان دوره طلایی باروری مشخص می‌شود.
        این نمودار که با استفاده از ماشین‌حساب تخمک‌گذاری آنلاین تهیه می‌شود، به شما کمک می‌کند بهترین زمان برای اقدام
        به بارداری را پیدا کنید. در ادامه نمودار تخمک گذاری در یک چرخه 28 روزه را مشاهده می‌کنید:
      </CustomTypography>
      {/* تصویر */}
      <CustomTypography fontSize="Headline_Medium" tagType="h2" className="!text-impo_Neutral_OnBackground">
        تقویم تخمک‌گذاری و تعیین جنسیت
      </CustomTypography>
      <CustomTypography fontSize="Body_Medium" tagType="p" className="!text-impo_Neutral_OnBackground">
        <strong>محاسبه روز تخمک گذاری</strong> با مشخص‌کردن روزهای باروری از روی تقویم، به زوج‌ها کمک می‌کند زمان مناسب
        برای اقدام به بارداری را بشناسند. استفاده از
        <CustomLink href="/ovulation-test" className="!text-impo_Primary_Primary mx-1 inline-block">
          کیت تخمک‌ گذاری
        </CustomLink>
        می‌تواند دقت تعیین این روزها را افزایش دهد. برخی روش‌ها مانند «شتلز» معتقدند زمان نزدیکی نسبت به روز تخمک‌گذاری
        می‌تواند بر احتمال تعیین جنسیت جنین اثر بگذارد، هرچند این روش‌ها قطعیت علمی ندارند و بیشتر برای برنامه‌ریزی
        زمانی کاربرد دارند.
      </CustomTypography>
      <CustomTypography fontSize="Headline_Small" tagType="h3" className="!text-impo_Neutral_OnBackground">
        محاسبه آنلاین زمان تخمک‌گذاری برای پسردار شدن
      </CustomTypography>
      <CustomTypography fontSize="Body_Medium" tagType="p" className="!text-impo_Neutral_OnBackground">
        برخی باورهای علمی می‌گویند نزدیکی در روز تخمک‌گذاری یا نزدیک به آن می‌تواند شانس بارداری پسر را بیشتر کند! زیرا
        اسپرم‌های "Y"سرعت زیادی دارند و اگر هم‌زمان با آزاد شدن تخمک وارد رحم شوند، احتمال رسیدنشان به تخمک بیشتر
        است.گرفتن
        <CustomLink href="/how-to-conceive-a-baby-boy" className="!text-impo_Primary_Primary mx-1 inline-block">
          رژیم پسرزایی
        </CustomLink>
        نیز کمک می‌کند تا در زمان تخمک‌گذاری شرایط جسمانی برای بارداری فرزند پسر مناسب‌ باشد.
      </CustomTypography>
      <CustomTypography fontSize="Headline_Small" tagType="h3" className="!text-impo_Neutral_OnBackground">
        محاسبه آنلاین زمان تخمک‌گذاری برای دختردار شدن
      </CustomTypography>
      <CustomTypography fontSize="Body_Medium" tagType="p" className="!text-impo_Neutral_OnBackground">
        اگر می‌خواهید بدانید
        <CustomLink href="/how-to-conceive-a-baby-girl" className="!text-impo_Primary_Primary mx-1 inline-block">
          چند روز بعد از پریودی فرزند دختر می‌شود؟
        </CustomLink>
        باید بگوییم بر اساس برخی باورهای علمی مانند نظریه شتلز، برای افزایش احتمال بارداری دختر باید ۲ تا ۳ روز قبل از
        تخمک‌گذاری اقدام کنید. <strong>محاسبه زمان تخمک‌ گذاری بعد از پریود</strong> آنلاین به شما کمک می‌کند این بازه
        را بهتر شناسایی نمایید. برخی داده‌ها نیز نشان می‌دهد اسپرم‌های حامل کروموزوم "X" در این بازه ماندگاری بیشتری
        دارند و ممکن است تا زمان آزاد شدن تخمک زنده بمانند.
      </CustomTypography>
      <CustomTypography fontSize="Headline_Medium" tagType="h2" className="!text-impo_Neutral_OnBackground">
        محاسبه آنلاین زمان تخمک گذاری در پریود نامنظم
      </CustomTypography>
      <CustomTypography fontSize="Body_Medium" tagType="p" className="!text-impo_Neutral_OnBackground">
        در پریودهای نامنظم، پیش‌بینی دقیق زمان تخمک‌گذاری دشوارتر است. در این حالت ابزارهای
        <strong>محاسبه آنلاین تخمک گذاری</strong> از میانگین چند سیکل قبلی استفاده می‌کنند، اما دقت آن‌ها محدود است. در
        این شرایط ترکیب <strong>ماشین حساب تخمک گذاری آنلاین</strong> با تست‌های کیت تخمک‌گذاری (LH) و بررسی علائم بدن،
        نتیجه‌ای قابل‌اعتمادتر می‌دهد. اگر می‌خواهید بدانید
        <CustomLink
          href="/irregular-periods-reasons-and-treatment"
          className="!text-impo_Primary_Primary mx-1 inline-block"
        >
          چه زمانی قاعدگی نامنظم خطرناک می‌شود
        </CustomLink>
        و ممکن است احتمال باروری را کاهش دهد، مقاله درج شده را مطالعه کنید.
      </CustomTypography>
      <CustomTypography fontSize="Headline_Medium" tagType="h2" className="!text-impo_Neutral_OnBackground">
        محاسبه سیکل قاعدگی و تخمک گذاری آنلاین
      </CustomTypography>
      <CustomTypography fontSize="Body_Medium" tagType="p" className="!text-impo_Neutral_OnBackground">
        اگر علاوه بر تاریخ تخمک‌گذاری، دانستن زمان پریود بعدی هم برای شما اهمیت دارد، می‌توانید از ابزار
        <CustomLink href="/period-calculator" className="!text-impo_Primary_Primary mx-1 inline-block">
          محاسبه سیکل قاعدگی آنلاین
        </CustomLink>
        ایمپو استفاده کنید. این ابزار با تمرکز بر محاسبه دقیق چرخه قاعدگی، به شما کمک می‌کند فاصله بین پریودها، نظم سیکل
        و زمان تقریبی قاعدگی بعدی را بهتر بشناسید. البته نتایج این محاسبات صددرصد قطعی نیست و ممکن است خطا داشته باشد،
        بنابراین بهتر است در کنار استفاده از این ابزار به علائم بدن و شرایط جسمانی خود نیز توجه کنید.
      </CustomTypography>
      <CustomTypography fontSize="Headline_Medium" tagType="h2" className="!text-impo_Neutral_OnBackground">
        ماشین حساب تخمک‌گذاری دوقلودار شدن
      </CustomTypography>
      <CustomTypography fontSize="Body_Medium" tagType="p" className="!text-impo_Neutral_OnBackground">
        دوقلوزایی وقتی رخ می‌دهد که در یک چرخه بیش از یک تخمک آزاد یا یک تخم به‌صورت طبیعی تقسیم شود. علاوه‌بر عوامل
        ژنتیکی و سن، مصرف برخی داروهای تحریک تخمک‌گذاری نیز اگر در زمان مناسب باشد، شانس دوقلودار شدن نیز افزایش
        می‌یابد. ماشین حساب تخمک‌گذاری ایمپو به شما کمک می‌کند این زمان را محاسبه کرده و براساس آن از داروهای تجویزی
        پزشک خود استفاده کنید. در مقاله
        <CustomLink href="/how-to-conceive-twins" className="!text-impo_Primary_Primary mx-1 inline-block">
          چگونه صاحب فرزند دوقلو پسر شویم،
        </CustomLink>
        روش‌های موثر برای دوقلو زایی را بررسی کرده‌ایم.
      </CustomTypography>
      <CustomTypography fontSize="Headline_Medium" tagType="h2" className="!text-impo_Neutral_OnBackground">
        ماشین حساب تخمک گذاری ایمپو
      </CustomTypography>
      <CustomTypography fontSize="Body_Medium" tagType="p" className="!text-impo_Neutral_OnBackground">
        هرچند که آگاهی از روزهای باروری به کمک ماشین حساب تخمک‌گذاری ایمپو اقدامی هوشمندانه و موثر است؛ اما روش‌های
        دیگری هم هستند که روند بارداری را سرعت می‌بخشند. برای بالابردن درصد موفقیت در بارداری،
        <CustomLink href="/landing/intention" className="!text-impo_Primary_Primary mx-1 inline-block">
          برنامه تخمک گذاری
        </CustomLink>
        ایمپو علاوه‌بر محاسبه زمان تخمک گذاری بعد از پریود آنلاین، خدمات زیر را به شما ارائه می‌دهد:
      </CustomTypography>
      <ul>
        <CustomTypography fontSize="Body_Medium" tagType="li" className="!text-impo_Neutral_OnBackground">
          تعداد دفعات رابطه جنسی برای بارداری سریع
        </CustomTypography>
        <CustomTypography fontSize="Body_Medium" tagType="li" className="!text-impo_Neutral_OnBackground">
          بهترین پوزیشن‌ها برای افزایش احتمال بارداری
        </CustomTypography>
        <CustomTypography fontSize="Body_Medium" tagType="li" className="!text-impo_Neutral_OnBackground">
          روش‌های تقویت تخمدان و بهبود بارداری
        </CustomTypography>
        <CustomTypography fontSize="Body_Medium" tagType="li" className="!text-impo_Neutral_OnBackground">
          روش‌های تقویت اسپرم
        </CustomTypography>
        <CustomTypography fontSize="Body_Medium" tagType="li" className="!text-impo_Neutral_OnBackground">
          به‌همراه توصیه‌های تخصصی برای یک بارداری سریع و ساده
        </CustomTypography>
      </ul>
      <CustomTypography fontSize="Body_Medium" tagType="p" className="!text-impo_Neutral_OnBackground">
        در کنار تمام این روش‌ها اگر در تفسیر کیت تخمک‌گذاری خود تردید دارید، تصویر آن را در ایمپو آپلود کنید تا به‌صورت
        دقیق بررسی و تفسیر شود.
      </CustomTypography>
    </div>
  );
};

export default BodyContent;
