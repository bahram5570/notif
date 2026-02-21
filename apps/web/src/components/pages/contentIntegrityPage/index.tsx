import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import HeaderFooterContainer from '@components/HeaderFooterContainer';
import CustomLink from '@components/ui/CustomLink';

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
            استانداردهای تولید محتوای سلامت در ایمپو
          </CustomTypography>
        </div>
        <div className="md:px-[156px] px-[30px] mb-20 grid gap-y-9">
          <CustomTypography
            tagType="p"
            className="mb-10 mt-4 inline-block md:!text-[18px] !text-impo_Neutral_OnBackground"
          >
            در ایمپو، ما باور داریم <strong>سلامت یعنی افزایش آگاهی،برای کاهش ترس</strong> و نگرانی. محتوایی که تولید
            می‌کنیم قرار نیست جای پزشک را بگیرد؛ قرار است کنار شما باشد تا بدن‌تان را بهتر بشناسید، تصمیم‌های
            آگاهانه‌تری بگیرید و احساس امنیت بیشتری داشته باشید. ما کنار شما هستیم تا با
            <strong>اطلاعات علمی، زبان همدلانه و بازبینی مسئولانه</strong> کمک‌تان کنیم بدن‌تان را بهتر بشناسید و
            تصمیم‌های آگاهانه‌تری بگیرید.
          </CustomTypography>

          <CustomTypography className=" md:!text-[16px] !text-impo_Neutral_OnBackground" tagType="p">
            این صفحه توضیح می‌دهد محتوای ایمپو <strong>چطور، با چه استانداردی و توسط چه تیمی</strong> تولید می‌شود.
          </CustomTypography>

          <CustomTypography tagType="h2" fontSize="Title_Large" className=" !text-impo_Neutral_OnBackground">
            اصول ما در تولید محتوای سلامت
          </CustomTypography>

          <CustomTypography tagType="p" fontSize="Title_Small" className=" !text-impo_Neutral_OnBackground">
            ما در ایمپو متعهدیم که:
          </CustomTypography>

          <ul className=" list-disc">
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              محتوای سلامت را <strong>بر پایه شواهد علمی معتبر</strong> تولید کنیم.
            </CustomTypography>
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              از زبان <strong>همدلانه، غیرقضاوت‌گر و قابل‌فهم</strong> استفاده کنیم.
            </CustomTypography>
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              <strong>از ترساندن، اغراق یا وعده‌های قطعی درمانی</strong> پرهیز کنیم.
            </CustomTypography>
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              <strong>تفاوت بدن‌ها، تجربه‌ها و شرایط زنان</strong> را در نظر بگیریم.
            </CustomTypography>
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              <strong>سلامت کاربران را بالاتر از اهداف تبلیغاتی یا تجاری قرار دهیم.</strong>
            </CustomTypography>
          </ul>

          <CustomTypography
            tagType="h2"
            fontSize="Title_Large"
            className="pt-4 sm:!text-4xl !text-impo_Neutral_OnBackground"
          >
            منابع و استانداردهای علمی مورد استفاده در تولید محتوا
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground mt-4">
            در ایمپو، محتوای سلامت بر اساس منابع معتبر و به‌روز تهیه می‌شود؛ از جمله
          </CustomTypography>
          <ul className=" list-disc">
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              راهنماهای بالینی و توصیه‌های سازمان‌های رسمی سلامت
            </CustomTypography>
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              مرورهای سیستماتیک و مطالعات علمی قابل استناد در
              <CustomLink href={'https://scholar.google.com/'} target="_blank" className="!text-impo_Primary_Primary">
                گوگل اسکولار
              </CustomLink>
              بعد از سال 2022
            </CustomTypography>
          </ul>
          <CustomTypography tagType="p" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground mt-4">
            منابع پزشکی معتبر بین‌المللی مانند
            <CustomLink href={'https://www.healthline.com/'} target="_blank" className="!text-impo_Primary_Primary">
              health line
            </CustomLink>
            ,
            <CustomLink href={'https://www.webmd.com/'} target="_blank" className="!text-impo_Primary_Primary">
              webmed
            </CustomLink>
            و
            <CustomLink href={'https://www.mayoclinic.org/'} target="_blank" className="!text-impo_Primary_Primary">
              Mayo Clinic
            </CustomLink>
            <strong>
              ، این سایت‌ها وب‌سایت‌هایی هستند که اطلاعات سلامت را بر پایه شواهد علمی و با بازبینی پزشکان ارائه می‌کنند
              و معمولاً برای آگاهی اولیه بیماران و عموم مردم استفاده می‌شوند.
            </strong>
          </CustomTypography>

          <CustomTypography tagType="p" fontSize="Title_Small" className=" !text-impo_Neutral_OnBackground">
            اولویت ما در ایمپو استفاده از <strong>شواهد علمی به‌روز</strong> است به همین دلیل اطلاعات قدیمی به‌صورت
            دوره‌ای اصلاح یا حذف می‌شوند.
          </CustomTypography>
          <CustomTypography
            tagType="h2"
            fontSize="Title_Large"
            className="pt-4 sm:!text-4xl !text-impo_Neutral_OnBackground"
          >
            به‌روزرسانی محتوا بر اساس جدیدترین اطلاعات پزشکی و سلامتی
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Title_Small" className=" !text-impo_Neutral_OnBackground">
            اطلاعات پزشکی هر ساله دچار تغییراتی می‌شوند و برای دسترسی به جدیدترین یافته‌های پزشکی باید به‌طور مرتب مورد
            بازبینی قرار بگیرند. تیم تولید محتوای ایمپو یافته‌های پزشکی را زیر نظر می‌گیرد و اگر شواهد علمی تغییر کند یا
            اطلاعات جدیدی منتشر شود:
          </CustomTypography>
          <ul className=" list-disc">
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              محتوا به‌روزرسانی می‌شود.
            </CustomTypography>
            <CustomTypography tagType="li" fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              تاریخ آخرین بازبینی در صفحه مقاله نمایش داده خواهد شد.
            </CustomTypography>
          </ul>
          <CustomTypography
            tagType="h2"
            fontSize="Title_Large"
            className="pt-4 sm:!text-4xl !text-impo_Neutral_OnBackground"
          >
            فرآیند تولید محتوا در ایمپو
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Title_Small" className=" !text-impo_Neutral_OnBackground">
            هر محتوای سلامت در ایمپو یک مسیر مشخص را طی می‌کند:
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Title_Small" className=" !text-impo_Neutral_OnBackground">
            1. انتخاب موضوع بر اساس نیاز واقعی کاربران
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            موضوع مقالات ایمپو بر پایه دغدغه‌های واقعی زنان، نیاز کاربران و جست‌وجوهای پرتکرار انتخاب می‌شود تا محتوا
            پاسخ‌گوی سوالات رایج و کاربردی باشد.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Title_Small" className=" !text-impo_Neutral_OnBackground">
            2. تحقیق و بررسی منابع علمی معتبر
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            پیش از نگارش، منابع معتبر علمی و پزشکی بررسی می‌شوند تا محتوای ارائه‌شده بر شواهد به‌روز و قابل‌اعتماد
            استوار باشد.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Title_Small" className=" !text-impo_Neutral_OnBackground">
            3. نگارش محتوا توسط نویسنده تخصصی سلامت
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            هر مقاله، توسط نویسنده آشنا با حوزه سلامت و محتوای پزشکی نوشته می‌شود تا دقت علمی و انسجام محتوا حفظ شود.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Title_Small" className=" !text-impo_Neutral_OnBackground">
            4. ویرایش تیم بازبینی با تمرکز بر شفافیت و همدلی
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            پس از نگارش، محتوا از نظر شفافیت، سادگی بیان و لحن همدلانه ویرایش می‌شود تا برای عموم کاربران با هر سطح
            سوادی، قابل‌فهم و خوانا باشد.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Title_Small" className=" !text-impo_Neutral_OnBackground">
            بازبینی علمی یا پزشکی محتوا
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            تمامی مقالات پیش از انتشار از نظر صحت علمی توسط تیم پزشکی یا متخصصان مرتبط بازبینی می‌شوند.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Title_Small" className=" !text-impo_Neutral_OnBackground">
            6.بررسی نهایی و حذف ادعاهای گمراه‌کننده
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            در مرحله نهایی، دقت محتوا بررسی شده و هرگونه ادعای نادرست، اغراق‌آمیز یا گمراه‌کننده حذف می‌شود.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Title_Small" className=" !text-impo_Neutral_OnBackground">
            7. انتشار محتوا
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            پس از تکمیل مراحل علمی و بازبینی، محتوا منتشر می‌شود و در دسترس کاربران قرار می‌گیرد.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Title_Small" className=" !text-impo_Neutral_OnBackground">
            8.به‌روزرسانی دوره‌ای بر اساس تغییرات علمی
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            مقالات ایمپو به‌صورت دوره‌ای و متناسب با تغییرات علمی و دستورالعمل‌های پزشکی به‌روزرسانی می‌شوند.
          </CustomTypography>
          <CustomTypography
            tagType="h2"
            fontSize="Title_Large"
            className="pt-4 sm:!text-4xl !text-impo_Neutral_OnBackground"
          >
            محتوای سلامت ایمپو، با زبانی مسئولانه و بدون قضاوت
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            در ایمپو، ما باور داریم زبان محتوا به‌اندازه خودِ اطلاعات مهم است. لحن محتواهای آکادمیک غالبا پیچیدگی‌های
            خاص خودش را دارد؛ اما ما در تیم ایمپو تلاش می‌کنیم تا لحن ساده و قابل‌درک باشد.به همین دلیل محتوای سلامت را
            با <strong>لحنی محترمانه، همدلانه و قابل‌فهم</strong> می‌نویسیم؛ بدون قضاوت، بدون ترساندن و بدون ایجاد حس
            شرم یا گناه.
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            ما در ایمپو تلاش می‌کنیم با افزایش آگاهی درباره بدن، پذیرش تغییرات و چالش‌ها را ساده‌تر کنیم تا هر فرد
            بتواند هماهنگ با ریتم بدن خود پیش برود.
          </CustomTypography>
          <CustomTypography
            tagType="h2"
            fontSize="Title_Large"
            className="pt-4 sm:!text-4xl !text-impo_Neutral_OnBackground"
          >
            تعهد ما به اعتماد شما
          </CustomTypography>
          <CustomTypography tagType="p" fontSize="Body_Small" className=" !text-impo_Neutral_OnBackground">
            اعتماد کاربران برای ایمپو یک شعار نیست؛ <strong>یک مسئولیت مداوم است.</strong> سیاست تولید محتوا در ایمپو
            (content integrity) به نحوی است که کیفیت و سلامت اطلاعات همیشه در اولویت قرار دارد و هر محتوا بارها بررسی و
            در صورت نیاز به‌روزرسانی می‌شود. ما می‌دانیم اعتماد به‌تدریج ساخته می‌شود؛ برای همین تلاش می‌کنیم در هر
            مرحله از تولید محتوا، پاسخ‌گو، شفاف و متعهد باقی بمانیم.
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
