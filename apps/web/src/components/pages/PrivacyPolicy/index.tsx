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
            اصلاح محتوا و نقش کاربران
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            در ایمپو، بازخورد کاربران نقش مهمی در بهبود کیفیت محتوا دارد. اگر در هر یک از مقالات نکته‌ای مشاهده کردید که
            نیاز به اصلاح، به‌روزرسانی یا توضیح بیشتر دارد، در قسمت نظرات هر مقاله، دیدگاه خود را ثبت کنید و به ما اطلاع
            دهید. این اطمینان را به شما می‌دهیم که موضوع را به‌صورت دقیق بررسی و در صورت تایید پزشک، اصلاح کنیم.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            در صورت نیاز، محتوای مربوطه بر اساس منابع معتبر علمی اصلاح یا به‌روزرسانی شده و
            <strong>تاریخ آخرین ویرایش</strong> به‌صورت شفاف ثبت می‌گردد. تمامی انتقادات، پیشنهادات و گزارش‌های کاربران
            درباره محتوای منتشرشده در ایمپو با دقت بررسی می‌شود و
            <strong>نتیجه بررسی از طریق همان مسیر اطلاع‌رسانی خواهد شد</strong>.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            بازخورد شما بخشی از فرآیند بهبود مستمر محتوای ایمپو است و به ما کمک می‌کند اطلاعات دقیق‌تر و قابل‌اعتماد‌تری
            ارائه دهیم.
          </CustomTypography>
          <CustomTypography
            tagType="h2"
            fontSize="Title_Large"
            className="pt-4 sm:!text-4xl !text-impo_Neutral_OnBackground"
          >
            شفافیت در مورد همکاری‌ها در ایمپو
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            شفافیت در مورد همکاری‌ها در ایمپو
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            <strong>محتوای سلامت در ایمپو مستقل از همکاری‌های تجاری تولید می‌شود.</strong> اگر محتوایی شامل معرفی محصول
            یا همکاری خاصی باشد، این موضوع <strong>به‌صورت شفاف</strong> به کاربران اعلام خواهد شد.
          </CustomTypography>
          <CustomTypography
            tagType="h2"
            fontSize="Title_Large"
            className="pt-4 sm:!text-4xl !text-impo_Neutral_OnBackground"
          >
            یادآوری مهم
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            <strong>
              محتوای ایمپو با هدف افزایش آگاهی عمومی تهیه شده و جایگزین تشخیص، درمان یا مراقبت پزشکی تخصصی نیست.
            </strong>
            در موارد ضروری یا اورژانسی، مراجعه به پزشک یا متخصص الزامی است.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            <strong>این صفحه بخشی از تعهد ایمپو به تولید محتوای سلامت مسئولانه، همدلانه و قابل اعتماد است.</strong>
          </CustomTypography>
          <CustomTypography
            tagType="h2"
            fontSize="Title_Large"
            className="pt-4 sm:!text-4xl !text-impo_Neutral_OnBackground"
          >
            پرسش‌های متداول
          </CustomTypography>
          <CustomTypography tagType="h3" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            1. آیا محتوای ایمپو جایگزین پزشک است؟
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            خیر. محتوای ایمپو آموزشی و آگاهی‌بخش است و جایگزین تشخیص یا درمان پزشکی تخصصی نیست.
          </CustomTypography>
          <CustomTypography tagType="h3" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            محتوای ایمپو هر چند وقت یک‌بار به‌روزرسانی می‌شود؟
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            محتواها به‌صورت دوره‌ای و در صورت تغییر شواهد علمی یا توصیه‌های پزشکی بازبینی و به‌روزرسانی می‌شوند.
          </CustomTypography>
          <CustomTypography tagType="h3" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            3. چه کسی صحت علمی محتوا را بررسی می‌کند؟
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            برای موضوعات حساس سلامت، محتوای ایمپو توسط بازبین علمی یا پزشکی بررسی می‌شود
          </CustomTypography>
          <CustomTypography tagType="h3" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            4. اگر خطایی در محتوا ببینم چه کار می‌توانم بکنم؟
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            می‌توانید از طریق راه‌های ارتباطی ایمپو بازخورد یا گزارش خطا ارسال کنید تا بررسی و اصلاح شود.
          </CustomTypography>
        </div>
      </div>
    </HeaderFooterContainer>
  );
};

export default PrivacyPolicy;
