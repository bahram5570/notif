import HeaderFooterContainer from '@components/HeaderFooterContainer';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

const PrivacyPolicy = () => {
  return (
    <HeaderFooterContainer>
      <div className="w-full h-full">
        <div className="bg-[url(/assets/images/termsHero.webp)] w-full h-full py-24 sm:pt-44 sm:pb-40 px-4 bg-no-repeat mb-8">
          <CustomTypography
            tagType="h1"
            fontSize="Title_Large"
            className="text-center pt-4 sm:!text-4xl !text-impo_Neutral_OnBackground"
          >
            سیاست حریم خصوصی ایمپو
          </CustomTypography>
        </div>
        <div className="md:px-[156px] px-[30px] mb-20 grid gap-y-9">
          <CustomTypography
            tagType="p"
            className="mb-10 mt-4 inline-block md:!text-[18px] !text-impo_Neutral_OnBackground"
          >
            <strong>
              در ایمپو، حریم خصوصی فقط یک الزام قانونی نیست؛ بخشی از تعهد ما به مراقبت آگاهانه، محترمانه و همدلانه از
              کاربران است.
            </strong>
            از آن‌جا که بخشی از اطلاعاتی که در ایمپو ثبت می‌کنید به سلامت جسمی و احساسی شما مربوط می‌شود، ما خود را
            امانت‌دار این داده‌ها می‌دانیم.
          </CustomTypography>

          <CustomTypography className=" md:!text-[16px] !text-impo_Neutral_OnBackground" tagType="p">
            سیاست حریم خصوصی ایمپو برای تمامی خدمات آن از جمله وب سایت impo.app و اپلیکیشن ایمپو بانوان و آقایان اعمال
            می‌شود. استفاده از هر یک از خدمات ایمپو به‌منزله پذیرش این سیاست حریم خصوصی است.
          </CustomTypography>
          <CustomTypography className=" md:!text-[16px] !text-impo_Neutral_OnBackground" tagType="p">
            این سیاست توضیح می‌دهد ایمپو چه اطلاعاتی را جمع‌آوری می‌کند، چرا و چگونه از آن‌ها استفاده می‌کند و چه حقوقی
            برای شما به‌عنوان کاربر در نظر گرفته شده است. لازم به ذکر است که سیاست حریم خصوصی حداقل سالانه یک‌بار
            بازبینی می‌شود و در صورت نیاز، برای اطمینان از صحت و به‌روز بودن آن، اصلاحات لازم انجام می‌شود.
          </CustomTypography>

          <CustomTypography tagType="h2" fontSize="Title_Large" className=" !text-impo_Neutral_OnBackground">
            چه اطلاعاتی در ایمپو ثبت و جمع‌آوری می‌شود؟
          </CustomTypography>

          <CustomTypography tagType="p" fontSize="Title_Small" className=" !text-impo_Neutral_OnBackground">
            وقتی از خدمات ایمپو استفاده می‌کنید، ممکن است اطلاعاتی درباره شما جمع‌آوری شود. این اطلاعات یا
            <strong>مستقیماً توسط خود شما</strong> در اختیار ما قرار می‌گیرد، یا در برخی موارد، از
            <strong>منابع فنی</strong> دریافت می‌شود.
          </CustomTypography>

          <CustomTypography tagType="p" fontSize="Title_Small" className=" !text-impo_Neutral_OnBackground">
            <strong>
              ما فقط اطلاعاتی را جمع‌آوری می‌کنیم که برای ارائه تجربه‌ای امن، مفید و متناسب با نیازهای شما ضروری است
            </strong>
          </CustomTypography>

          <CustomTypography tagType="h3" fontSize="Title_Large" className=" !text-impo_Neutral_OnBackground">
            1. اطلاعاتی که شما مستقیماً ثبت می‌کنید.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Title_Small" className=" !text-impo_Neutral_OnBackground">
            اطلاعاتی که هنگام ثبت نام در ایمپو یا استفاده از آن جمع‌آوری می‌شود به شرح زیر است:
          </CustomTypography>
          <ul className=" list-disc">
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              اطلاعات عمومی حساب کاربری
            </CustomTypography>
            <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground my-1">
              هنگام ثبت‌نام یا استفاده از خدمات ایمپو، ممکن است اطلاعاتی مانند نام، ایمیل، ماه و سال تولد و رمز عبور
              وارد کنید. در صورت تمایل، می‌توانید نام کوچک یا نام دلخواه خود را وارد کنید. این موضوع کاملاً اختیاری است
              و اگر ترجیح بدهید آن را ثبت نکنید، هیچ محدودیتی در استفاده از خدمات ایمپو برای شما ایجاد نخواهد شد.
            </CustomTypography>
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              اطلاعات مربوط به سلامت
            </CustomTypography>
            <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground my-1">
              <strong>ایمپو برای کمک به خودمراقبتی آگاهانه طراحی شده است.</strong> به همین دلیل، شما می‌توانید اطلاعاتی
              درباره وضعیت جسمی و احساسی خود ثبت کنید.
            </CustomTypography>
          </ul>

          <CustomTypography tagType="p" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground mt-4">
            این اطلاعات می‌تواند شامل مواردی مانند <strong>وزن، قد، شاخص توده بدنی (BMI) و جزئیات چرخه قاعدگی</strong>
            باشد. اگر حالت بارداری را فعال کنید، امکان ثبت و پیگیری اطلاعات مرتبط با بارداری نیز وجود دارد.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground mt-4">
            همچنین می‌توانید
            <strong>علائم مرتبط با چرخه قاعدگی، بارداری، پیش‌یائسگی یا یائسگی و وضعیت کلی سلامت</strong> را ثبت کنید.
            این اطلاعات ممکن است شامل جزئیاتی درباره خواب، مصرف آب، سلامت جسمی و روانی و در صورت انتخاب شما، برخی
            جنبه‌های زندگی جنسی باشد.
          </CustomTypography>

          <CustomTypography
            tagType="h3"
            fontSize="Title_Large"
            className="pt-4 sm:!text-4xl !text-impo_Neutral_OnBackground"
          >
            اطلاعاتی که به‌صورت خودکار جمع‌آوری می‌شوند.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Title_Small" className=" !text-impo_Neutral_OnBackground">
            در هنگام استفاده از خدمات ایمپو، برخی اطلاعات به‌صورت خودکار و فنی جمع‌آوری می‌شود:
          </CustomTypography>
          <ul className=" list-disc">
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              اطلاعات دستگاه
            </CustomTypography>
            <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground my-1">
              مانند مدل دستگاه، نوع و نسخه سیستم‌عامل، شناسه‌های فنی دستگاه، قابلیت‌های دسترس‌پذیری فعال‌شده (مثلاً
              تنظیمات نمایش یا حرکتی)، اطلاعات شبکه و اپراتور تلفن همراه، و اطلاعات مربوط به نسخه نرم‌افزاری دستگاه.
            </CustomTypography>
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              اطلاعات مکانی تقریبی
            </CustomTypography>
            <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground my-1">
              مانند آدرس IP، کشور، منطقه زمانی یا اطلاعات کلی ارائه‌دهنده خدمات تلفن همراه. ایمپو
              <strong>موقعیت مکانی دقیق شما را جمع‌آوری نمی‌کند</strong> و از این اطلاعات صرفاً برای ارائه بهتر خدمات
              استفاده می‌شود.
            </CustomTypography>
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              نحوه استفاده از خدمات
            </CustomTypography>
            <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground my-1">
              از جمله دفعات استفاده، بخش‌ها و قابلیت‌هایی که از آن‌ها استفاده می‌کنید، و اطلاعات مربوط به پرداخت‌ها
              (به‌جز جزئیات کامل کارت بانکی).
            </CustomTypography>
            <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground my-2">
              برای جمع‌آوری این داده‌ها ممکن است از کوکی‌ها و فناوری‌های مشابه استفاده شود.
            </CustomTypography>
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              اطلاعات ارتباطی و پشتیبانی
            </CustomTypography>
            <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground my-1">
              در صورتی که با تیم پشتیبانی ایمپو تماس بگیرید یا از طریق پیام، ایمیل یا فرم‌های ارتباطی با ما در ارتباط
              باشید، اطلاعات ارائه‌شده برای پاسخ‌گویی و پیگیری ذخیره می‌شود.
            </CustomTypography>
          </ul>
          <CustomTypography
            tagType="h2"
            fontSize="Title_Large"
            className="pt-4 sm:!text-4xl !text-impo_Neutral_OnBackground"
          >
            ما چطور از اطلاعات شما استفاده
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Title_Small" className=" !text-impo_Neutral_OnBackground">
            <strong>
              برای این‌که بتوانیم خدمات ایمپو را به‌درستی در اختیار شما بگذاریم، لازم است برخی اطلاعات شخصی‌تان را
              پردازش کنیم.
            </strong>
            این موضوع شامل کارهایی مثل مدیریت حساب کاربری، ارائه قابلیت‌های اپلیکیشن و انجام امور اجرایی و پشتیبانی
            مرتبط با استفاده شما از ایمپو می‌شود.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Title_Small" className=" !text-impo_Neutral_OnBackground">
            <strong> به طور کلی ایمپو از اطلاعات کاربران برای اهداف مشخص و محدود زیر استفاده می‌کند:</strong>
          </CustomTypography>
          <ul className="list-disc">
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              <strong>ارائه، مدیریت و بهبود خدمات و قابلیت‌های اپلیکیشن</strong>
            </CustomTypography>
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              <strong> شخصی‌سازی محتوا و تجربه کاربری</strong>
            </CustomTypography>
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              <strong> افزایش دقت تحلیل‌ها و پیشنهادها</strong>
            </CustomTypography>
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              <strong> پشتیبانی و پاسخ‌گویی به کاربران</strong>
            </CustomTypography>
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              <strong> تحلیل‌های آماری برای بهبود کیفیت خدمات</strong>
            </CustomTypography>
          </ul>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            در بعضی موارد، ما از اطلاعات شخصی شما استفاده می‌کنیم تا بتوانیم خدمات ایمپو را بهتر، امن‌تر و قابل اعتمادتر
            نگه داریم. این استفاده‌ها همیشه با در نظر گرفتن حقوق و منافع شما انجام می‌شود. برای مثال، ممکن است از
            داده‌ها برای موارد زیر استفاده کنیم:
          </CustomTypography>
          <ul className="list-disc">
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              <strong> شناسایی و رفع خطاها و مشکلات فنی</strong>
            </CustomTypography>
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              <strong> اطمینان از این‌که تعامل با خدمات توسط کاربران واقعی انجام می‌شود، نه ربات‌ها</strong>
            </CustomTypography>
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              <strong>بررسی عملکرد، پایداری و کیفیت اپلیکیشن</strong>
            </CustomTypography>
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              <strong>اطلاع‌رسانی درباره وضعیت اشتراک‌ها یا تغییرات مهم مرتبط با حساب کاربری</strong>
            </CustomTypography>
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              <strong> بررسی‌های امنیتی برای شناسایی آسیب‌پذیری‌ها و محافظت از خدمات</strong>
            </CustomTypography>
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              <strong> تحلیل روندهای کلی و تجمیعی استفاده از اپلیکیشن (بدون تمرکز روی هویت فردی کاربران)</strong>
            </CustomTypography>
          </ul>
          <CustomTypography tagType="p" fontSize="Title_Small" className=" !text-impo_Neutral_OnBackground">
            در این موارد، ابتدا بررسی می‌کنیم که آیا این پردازش واقعاً برای مدیریت مسئولانه خدمات ایمپو ضروری است یا نه.
            سپس تأثیر احتمالی آن بر شما و حقوق‌تان را می‌سنجیم تا
            <strong>مطمئن شویم هیچ‌وقت منافع ایمپو بر حریم خصوصی شما اولویت پیدا نکند.</strong>
          </CustomTypography>

          <CustomTypography
            tagType="h2"
            fontSize="Title_Large"
            className="pt-4 sm:!text-4xl !text-impo_Neutral_OnBackground"
          >
            پردازش داده‌های سلامت و اطلاعات حساس
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            برخی از اطلاعاتی که در ایمپو ثبت می‌کنید، به‌عنوان <strong>داده‌های سلامت یا اطلاعات حساس</strong> شناخته
            می‌شوند. ایمپو این داده‌ها را با سطح بالاتری از مراقبت، امنیت و دسترسی محدود، مدیریت می‌کند.
          </CustomTypography>
          <ul className="list-disc">
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              این داده‌ها صرفاً برای ارائه خدمات آموزشی، تحلیلی و شخصی‌سازی تجربه کاربر استفاده می‌شوند.
            </CustomTypography>
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              داده‌های سلامت جایگزین تشخیص، درمان یا توصیه پزشکی تخصصی نیستند.
            </CustomTypography>
          </ul>
          <CustomTypography
            tagType="h2"
            fontSize="Title_Large"
            className="pt-4 sm:!text-4xl !text-impo_Neutral_OnBackground"
          >
            مبنای قانونی پردازش اطلاعات
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            پردازش اطلاعات شخصی کاربران در ایمپو بر اساس یکی از مبانی زیر انجام می‌شود:
          </CustomTypography>
          <ul className="list-disc">
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              رضایت آگاهانه کاربر
            </CustomTypography>
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              اجرای خدمات و تعهدات ناشی از استفاده از ایمپو
            </CustomTypography>
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              رعایت الزامات قانونی و مقررات قابل اعمال
            </CustomTypography>
          </ul>

          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            توصیه می‌کنیم در کنار این صفحه،
            <CustomLink href={'/terms'} className="!text-impo_Primary_Primary">
              قوانین و مقررات استفاده از ایمپو
            </CustomLink>
            را نیز مطالعه کنید.
          </CustomTypography>

          <CustomTypography
            tagType="h2"
            fontSize="Title_Large"
            className="pt-4 sm:!text-4xl !text-impo_Neutral_OnBackground"
          >
            داده‌های شما فروخته نمی‌شوند!
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            ایمپو به‌طور شفاف متعهد است که داده‌های شخصی و سلامت کاربران را نمی‌فروشد. استفاده از اطلاعات کاربران صرفاً
            در چارچوب اهداف اعلام‌شده در این سیاست و با رعایت حقوق کاربران انجام می‌شود.
          </CustomTypography>
          <CustomTypography
            tagType="h2"
            fontSize="Title_Large"
            className="pt-4 sm:!text-4xl !text-impo_Neutral_OnBackground"
          >
            حقوق حریم خصوصی کاربران در ایمپو
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            در ایمپو، ما متعهدیم همان سطح از حقوق حریم خصوصی را برای شما در نظر بگیریم که در سخت‌گیرانه‌ترین
            استانداردهای جهانی حفاظت از داده‌ها تعریف شده‌اند. چون باور داریم
            <strong>کنترل اطلاعات شخصی، به‌ویژه داده‌های سلامت، باید همیشه در اختیار خود شما باشد</strong>.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            • دسترسی به اطلاعات شخصی
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            فقط <strong>خود شما یا شخصی که به‌صورت رسمی از طرف شما اجازه دارد</strong> می‌تواند به داده‌های شخصیتان
            دسترسی پیدا کند.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            • درخواست اصلاح اطلاعات شخصی
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            اگر فکر می‌کنید اطلاعاتی که از شما نگهداری می‌کنیم نادرست یا ناقص است، می‌توانید از ما بخواهید آن را اصلاح
            کنیم. ما این درخواست‌ها را با دقت بررسی می‌کنیم.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            • حذف حساب کاربری
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            شما می‌توانید از طریق تماس یا تیکیت با تیم پشتیبانی ایمپو درخواست حذف حساب کاربری را ثبت کنید.
            <strong>قبل از درخواست حذف، این نکته را در نظر داشته باشید که</strong> پس از شروع فرآیند حذف حساب کاربری،
            <strong>امکان بازگشت وجود ندارد</strong>.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            • حذف اطلاعات شخصی
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            شما می‌توانید هر زمان درخواست حذف اطلاعات شخصی خود را ثبت کنید. البته توجه داشته باشید که حذف برخی داده‌ها
            ممکن است باعث شود بعضی قابلیت‌هایی که به اطلاعات گذشته وابسته‌اند، برایتان غیرفعال شوند.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            • محدود کردن پردازش اطلاعات
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            در برخی شرایط، می‌توانید درخواست کنید که پردازش اطلاعات شخصی شما به‌طور موقت محدود شود. مثلاً اگر نسبت به
            صحت یک داده تردید دارید، می‌توانید از ما بخواهید تا زمان بررسی، از استفاده از آن داده خودداری کنیم.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            • دسترسی به اطلاعات شخصی
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            شما حق دارید بدانید چه اطلاعاتی درباره شما در ایمپو پردازش می‌شود. می‌توانید درخواست دسترسی به همه داده‌های
            شخصی خود و دریافت یک نسخه از آن‌ها را داشته باشید، در قالبی ساخت‌یافته و قابل‌انتقال.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            هدف ما این است که شفافیت، فقط یک شعار نباشد؛ شما واقعاً بتوانید به داده‌های خود دسترسی داشته باشید.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            • حق انتقال‌پذیری داده‌ها
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            اگر بخواهید، می‌توانید داده‌های شخصی خود را در قالبی دریافت کنید که امکان انتقال یا استفاده از آن‌ها در
            سرویس‌های دیگر برایتان فراهم باشد.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            • اعتراض به پردازش اطلاعات
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            اگر با نحوه استفاده از اطلاعات شخصی خود موافق نیستید، مثلاً در مواردی مانند ارتباطات یا اطلاع‌رسانی‌های
            مستقیم، می‌توانید به این نوع پردازش اعتراض کنید و درخواست توقف آن را بدهید.
          </CustomTypography>
          <CustomTypography
            tagType="h2"
            fontSize="Title_Large"
            className="pt-4 sm:!text-4xl !text-impo_Neutral_OnBackground"
          >
            چطور می‌توانید از حقوق حریم خصوصی خود استفاده کنید؟
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            در ایمپو، اعمال حقوق حریم خصوصی قرار نیست پیچیده یا مبهم باشد. اگر درباره اطلاعات شخصی‌تان سوالی دارید یا
            می‌خواهید یکی از حقوق خود را اعمال کنید، می‌توانید از طریق تماس با تیم پشتیبانی ایمپو از طریق مسیرهای
            ارتباطی اعلام‌شده در وب‌سایت درخواست خود را ثبت کنید.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            ما تلاش می‌کنیم درخواست‌های مربوط به حریم خصوصی را حداکثر <strong>تا یک ماه پس از دریافت</strong> بررسی و
            اجرا کنیم.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            در برخی موارد مثلاً زمانی که حذف کامل داده‌های ذخیره‌شده در نسخه‌های پشتیبان (Backup) لازم باشد، ممکن است
            این فرآیند تا ۹۰ روز زمان ببرد. اگر برای رسیدگی به درخواست شما به زمان بیشتری نیاز داشته باشیم، حتماً موضوع
            را به شما اطلاع می‌دهیم و دلیل آن را شفاف توضیح می‌کنیم.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            <strong>پردازش داده‌های سلامت در ایمپو فقط با رضایت شما انجام می‌شود.</strong> شما می‌توانید هر زمان که
            بخواهید این رضایت را از طریق تماس با تیم ایمپو پس بگیرید ما به انتخاب شما احترام می‌گذاریم، چه بخواهید ادامه
            دهید، چه تصمیم بگیرید اطلاعاتتان حذف شود.
          </CustomTypography>
          <CustomTypography
            tagType="h2"
            fontSize="Title_Large"
            className="pt-4 sm:!text-4xl !text-impo_Neutral_OnBackground"
          >
            امنیت اطلاعات کاربران{' '}
          </CustomTypography>

          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            ایمپو از اقدامات فنی و سازمانی متناسب برای حفاظت از اطلاعات کاربران استفاده می‌کند، از جمله کنترل دسترسی و
            تدابیر امنیتی معقول. با این حال، هیچ سیستم دیجیتالی کاملاً مصون از خطر نیست و امنیت مطلق قابل تضمین
            نیست.{' '}
          </CustomTypography>
          <CustomTypography tagType="h2" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            مدت نگهداری اطلاعات{' '}
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            اطلاعات شخصی کاربران تنها تا زمانی نگهداری می‌شود که برای ارائه خدمات ایمپو یا رعایت الزامات قانونی ضروری
            باشد. پس از آن، داده‌ها به‌صورت امن حذف یا ناشناس‌سازی می‌شوند.{' '}
          </CustomTypography>
          <CustomTypography tagType="h2" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            عدم اشتراک داده‌ها با اشخاص ثالث{' '}
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            ما اطلاعات شخصی شما را با اشخاص ثالث به اشتراک نمی‌گذاریم.ایمپو{' '}
            <strong>هرگز داده‌های سلامت شما را برای اهداف تبلیغاتی یا بازاریابی</strong> با اشخاص ثالث به اشتراک
            نمی‌گذارد.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            اطلاعات مربوط به سلامت، مثل داده‌های چرخه، علائم یا وضعیت جسمی و احساسی به هیچ‌وجه در اختیار ابزارهای
            بازاریابی یا پلتفرم‌های تبلیغاتی قرار نمی‌گیرد.
          </CustomTypography>
          <CustomTypography tagType="h2" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            حریم خصوصی کودکان{' '}
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            <strong>خدمات ایمپو برای استفاده کودکان طراحی نشده است.</strong> در صورت اطلاع از جمع‌آوری ناخواسته اطلاعات
            مربوط به کودکان، ایمپو اقدامات لازم برای حذف این اطلاعات را انجام خواهد داد.{' '}
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            <strong>همچنین، در ایمپو نمایش محتوا با توجه به سن محدود و شخصی سازی می‌شود؛</strong> به این معنی که برخی از
            محتواها که برای سنین پایین مناسب نیستند، نمایش داده نمی‌شود.{' '}
          </CustomTypography>
          <CustomTypography tagType="h2" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            انتقال و پردازش بین‌المللی اطلاعات{' '}
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            در صورت استفاده از زیرساخت‌ها یا سرویس‌دهندگان خارجی، ممکن است اطلاعات کاربران در خارج از کشور محل اقامت
            آن‌ها پردازش شود. ایمپو متعهد است در هر مکان، سطح حفاظت از داده‌ها را مطابق با این سیاست حفظ کند.{' '}
          </CustomTypography>
          <CustomTypography tagType="h2" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            حریم خصوصی در بخش همدلی و ایمپو آقایان{' '}
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            در ایمپو، چه در نسخه بانوان و چه در ایمپو آقایان، ما به تفاوت تجربه‌ها، بدن‌ها و احساسات کاربران احترام
            می‌گذاریم. طراحی خدمات ایمپو به‌گونه‌ای انجام شده که:{' '}
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            • از قضاوت، شرم یا ایجاد فشار روانی پرهیز شود.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            • اطلاعات شخصی کاربران با نهایت احترام و محرمانگی مدیریت شود.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            • تجربه‌ای امن، همدلانه و قابل اعتماد برای همه کاربران فراهم گردد.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            • ایمپو، هیچ‌گونه دسترسی به پیام‌های خصوصی در بخش همدلی ندارد.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            ما باور داریم مراقبت از داده‌های سلامت، بخشی از مراقبت از خودِ انسان‌هاست.{' '}
          </CustomTypography>
          <CustomTypography tagType="h2" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            حریم خصوصی در بخش کلینیک ایمپو{' '}
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            ایمپو هیچ‌گونه دسترسی به اطلاعات بخش کلینیک ندارد و این اطلاعات را پردازش نمی‌کند. هر آنچه که در بخش کلینیک
            با پزشک درمیان می‌گذارید کاملا محرمانه محسوب می‌شود و ایمپو هیچ‌‍گونه دسترسی به این ‌پیام‌ها ندارد.{' '}
          </CustomTypography>
          <CustomTypography tagType="h2" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            تغییرات سیاست حریم خصوصی{' '}
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            ایمپو ممکن است این سیاست را به‌روزرسانی کند. تغییرات مهم از طریق وب‌سایت یا اپلیکیشن اطلاع‌رسانی شده و تاریخ
            آخرین به‌روزرسانی در ابتدای این صفحه درج خواهد شد.{' '}
          </CustomTypography>
          <CustomTypography tagType="h2" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            ارتباط با ایمپو درباره حریم خصوصی{' '}
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            در صورت داشتن هرگونه سوال، درخواست یا نگرانی درباره حریم خصوصی یا اطلاعات شخصی، می‌توانید از طریق راه‌های
            ارتباطی رسمی اعلام‌شده در وب‌سایت ایمپو با ما در تماس باشید.{' '}
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            <strong>
              این سیاست حریم خصوصی بخشی از تعهد ایمپو به شفافیت، مسئولیت‌پذیری و مراقبت محترمانه از داده‌های سلامت
              کاربران است.
            </strong>
          </CustomTypography>
        </div>
      </div>
    </HeaderFooterContainer>
  );
};

export default PrivacyPolicy;
