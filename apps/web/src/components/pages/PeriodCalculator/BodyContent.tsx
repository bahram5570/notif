import periodCalculator from '@assets/images/periodCalculator.webp';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';

const BodyContent = () => {
  return (
    <div className="mt-10 space-y-6">
      <CustomTypography fontSize="Headline_Medium" tagType="h2" className="!text-impo_Neutral_OnBackground">
        نحوه محاسبه سیکل قاعدگی
      </CustomTypography>
      <CustomTypography fontSize="Body_Medium" tagType="p" className="!text-impo_Neutral_OnBackground">
        <strong>سیکل قاعدگی از روز اول خونریزی شروع می‌شود و تا روز قبل از پریود بعدی ادامه دارد.</strong> برای محاسبه،
        باید تاریخ اولین روز پریود خود را یادداشت کنید و تعداد روزها را تا شروع پریود بعدی بشمارید تا طول سیکل مشخص شود.
        این مسیر با استفاده از ابزار محاسبه سیکل قاعدگی آنلاین بسیار ساده‌تر و دقیق‌تر خواهد بود. فقط کافی است تاریخ
        آخرین پریود، طول دوره (حدودی) و طول پریود خود را ثبت کنید تا تاریخ پریود بعدی شما را پیش‌بینی کند.
      </CustomTypography>
      <CustomTypography fontSize="Body_Medium" tagType="p" className="!text-impo_Neutral_OnBackground">
        بسیاری از افراد به زمان دقیق پریود بعدی نیاز دارند تا آمار پنجرۀ باروری و روزهای تخمک‌گذاری را داشته باشند. یکی
        از ساده‌ترین راه‌ها می‌تواند
        <CustomLink href="/ovulation-calculator" className="!text-impo_Primary_Primary mx-1 inline-block">
          محاسبه زمان تخمک گذاری بعد از پریود انلاین
        </CustomLink>
        به کمک ابزار باشد.
      </CustomTypography>
      <CustomImage
        alt="نحوه محاسبه سیکل قاعدگی"
        src={periodCalculator}
        className="mx-auto my-6 max-w-[1000px] w-full rounded-2xl"
        width={9999}
      />
      <CustomTypography fontSize="Headline_Small" tagType="h3" className="!text-impo_Neutral_OnBackground">
        از کجا بفهمیم سیکل قاعدگی چند روزه است؟ (محاسبه طول سیکل قاعدگی)
      </CustomTypography>
      <CustomTypography fontSize="Body_Medium" tagType="p" className="!text-impo_Neutral_OnBackground">
        چون چرخۀ قاعدگی هر زن با دیگری فرق دارد، لازم است هر فرد طول سیکل قاعدگی خودش را به‌صورت جداگانه محاسبه کند.
        همان‌طور که در بالا اشاره کردیم، برای محاسبه سیکل قاعدگی، باید فاصله بین اولین روز خونریزی یک پریود تا اولین روز
        خونریزی پریود بعدی را محاسبه نمایید. همچنین می‌توانید تاریخ شروع پریود خود را در ایمپو ثبت کنید تا طول سیکل
        قاعدگی شما با دقت بالاتری محاسبه شود.
      </CustomTypography>

      <CustomTypography fontSize="Body_Medium" tagType="p" className="!text-impo_Neutral_OnBackground">
        <strong>اگر عدد به‌دست‌آمده بین ۲۱ تا ۳۵ روز باشد، سیکل در محدوده طبیعی قرار دارد.</strong> اگر کوتاه‌تر یا
        طولانی‌تر باشد، می‌تواند نشان‌دهنده بی‌نظمی هورمونی باشد و حتی بر شدت علائم سندروم پیش از قاعدگی یا "PMS" نیز
        اثر بگذارد. برای آشنایی بیشتر با مراحل چرخه قاعدگی و علائم PMS پیشنهاد می‌کنیم مطالعه مقالات «
        <CustomLink href="/pms" className="!text-impo_Primary_Primary mx-1 inline-block">
          PMS چیست
        </CustomLink>
        » و«
        <CustomLink href="/menstrual-cycle" className="!text-impo_Primary_Primary mx-1 inline-block">
          پریود چیست
        </CustomLink>
        » را از دست ندهید تا بیشتر متوجه اهمیت استفاده از ابزار محاسبه سیکل قاعدگی آنلاین شوید.
      </CustomTypography>
      <CustomTypography fontSize="Headline_Small" tagType="h3" className="!text-impo_Neutral_OnBackground">
        روز اول پریود را چگونه حساب کنیم؟
      </CustomTypography>
      <CustomTypography fontSize="Body_Medium" tagType="p" className="!text-impo_Neutral_OnBackground">
        <strong>اولین روزی که خونریزی واضح و فعال آغاز می‌شود،</strong> باید به‌عنوان روز اول چرخه قاعدگی یا
        <strong>تاریخ دقیق پریود شدن</strong> در نظر بگیرید. در واقع زمانی‌که لکه‌بینی خفیف یا ترشحات قهوه‌ای‌رنگ وجود
        دارد، به‌عنوان شروع در نظر گرفته نمی‌شوند و باید خونریزی قابل‌توجه باشد تا شمارش روزهای سیکل قاعدگی آغاز شود.
      </CustomTypography>
      <CustomTypography fontSize="Body_Medium" tagType="p" className="!text-impo_Neutral_OnBackground">
        ابزار محاسبه روز اول پریود آنلاین با درنظرگرفتن تاریخ آخرین پریود شما، طول دوره و طول پریود، روز اول پریود بعدی
        شما را پیش‌بینی می‌کند.
      </CustomTypography>
      <CustomTypography fontSize="Headline_Medium" tagType="h2" className="!text-impo_Neutral_OnBackground">
        محاسبه سیکل قاعدگی نامنظم
      </CustomTypography>
      <CustomTypography fontSize="Body_Medium" tagType="p" className="!text-impo_Neutral_OnBackground">
        در محاسبه سیکل قاعدگی نامنظم به‌دلیل تغییر فاصله بین پریودها در ماه‌های مختلف، پیش‌بینی زمان دقیق پریود بعدی و
        تخمک‌گذاری دشوارتر است. اگر طول سیکل کمتر از ۲۱ روز، بیشتر از ۳۵ روز یا هر ماه متغیر باشد، چرخه نامنظم است و
        تشخیص زمان باروری نیز سخت‌تر می‌شود. اگر ریتم پریود شما نامنظم است، می‌توانید ایمپو را نصب کنید و سه دوره از
        پریود خود را ثبت کنید. گزارش سلامت ایمپو طول دوره، میانگین آن و وضعیت سلامتی سیکل قاعدگی شما را محاسبه می‌کند.
      </CustomTypography>
      <CustomTypography fontSize="Body_Medium" tagType="p" className="!text-impo_Neutral_OnBackground">
        اگر بی‌نظمی شدید یا خونریزی غیرعادی دارید، باید به پزشک مراجعه کنید. مطالعه مقاله «
        <CustomLink
          href="/irregular-periods-reasons-and-treatment"
          className="!text-impo_Primary_Primary mx-1 inline-block"
        >
          چه زمانی قاعدگی نامنظم خطرناک می‌شود
        </CustomLink>
        » نیز برای کسب اطلاعات دقیق در این زمینه کاربردی است. در صورتی که دچار پریود نامنظم هستید و آگاهی از زمان دقیق
        تخمک‌گذاری برای شما مهم است، می‌توانید مقاله «
        <CustomLink href="/ovulation" className="!text-impo_Primary_Primary mx-1 inline-block">
          از کجا بفهمم تخمک آزاد شده است؟
        </CustomLink>
        » را مطالعه کنید و براساس سایر علائم، بازه باروری خود را تشخیص دهید.
      </CustomTypography>
      <CustomTypography fontSize="Headline_Medium" tagType="h2" className="!text-impo_Neutral_OnBackground">
        محاسبه سیکل قاعدگی آنلاین با ایمپو
      </CustomTypography>

      <CustomTypography fontSize="Body_Medium" tagType="p" className="!text-impo_Neutral_OnBackground">
        <CustomLink href="/landing/tracker" className="!text-impo_Primary_Primary mx-1 inline-block">
          برنامه پریودی
        </CustomLink>
        ایمپو به شما کمک می‌کند زمان دقیق پریود، دوره
        <strong>PMS و بازه تخمک‌گذاری را با دقت بالا پیش‌بینی کنید.</strong> ایمپو علاوه‌بر
        <strong>محاسبه روز اول پریود انلاین</strong>و اطلاع از زمان دقیق تخمک‌گذاری خدمات زیر را ارائه می‌دهد:
      </CustomTypography>
      <ul>
        <CustomTypography
          fontSize="Body_Medium"
          tagType="li"
          className="!text-impo_Neutral_OnBackground list-disc mr-4"
        >
          روتین‌های اختصاصی خودمراقبتی متناسب با هر فاز چرخه قاعدگی
        </CustomTypography>
        <CustomTypography
          fontSize="Body_Medium"
          tagType="li"
          className="!text-impo_Neutral_OnBackground list-disc mr-4"
        >
          ارسال پیام یادآوری به پارتنر در دوران PMS، تخمک‌گذاری و پریود برای درک و همدلی بیشتر
        </CustomTypography>
        <CustomTypography
          fontSize="Body_Medium"
          tagType="li"
          className="!text-impo_Neutral_OnBackground list-disc mr-4"
        >
          پیشنهادهای تغذیه‌ای و رژیم غذایی متناسب با مرحله سیکل قاعدگی، وضعیت سلامتی و شاخص‌هایی مانند BMI
        </CustomTypography>
        <CustomTypography
          fontSize="Body_Medium"
          tagType="li"
          className="!text-impo_Neutral_OnBackground list-disc mr-4"
        >
          ارائه توصیه‌های تخصصی با ثبت علائمی مثل شدت خونریزی، نشانه‌های جسمانی و نوع ترشحات
        </CustomTypography>
        <CustomTypography
          fontSize="Body_Medium"
          tagType="li"
          className="!text-impo_Neutral_OnBackground list-disc mr-4"
        >
          گزارش سلامت دوره‌ای پس از چند سیکل ثبت اطلاعات، همراه با آمار دقیق و تحلیل کامل چرخه قاعدگی شما
        </CustomTypography>
      </ul>
    </div>
  );
};

export default BodyContent;
