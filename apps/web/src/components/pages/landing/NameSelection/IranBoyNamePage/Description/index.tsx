'use client';

import { useEffect, useRef, useState } from 'react';

import ArrowIcon from '@assets/icons/arrow2.svg';
import { textShorter } from '@utils/scripts';

import { ItemGenerator, TitleGenerator } from '@components/SelectName/Description';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

const Description = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const el = ref.current;

    setTimeout(() => {
      if (el) {
        setMaxHeight(el.scrollHeight);
      }
    }, 2000);
  }, []);

  const firstLineScript =
    'انتخاب اسم برای فرزند یک‌ کار ساده نیست؛ در واقع این اولین هدیه‌ای هست که شما به‌عنوان والدین به فرزندتون میدین و تا آخر عمر همراه اونه. اسم‌هایی که ریشه اصیل ایرانی دارن، نشون‌دهنده فرهنگ و تاریخ ما هستن و حس تعلق به کشور و اصالت رو در فرزندانمون تقویت می‌کنن. ';

  return (
    <div className="w-full rounded-2xl p-6 bg-impo_Surface_SurfaceVariant">
      <CustomTypography fontSize="Headline_Medium" tagType="h2" className="pb-7 !text-impo_Neutral_OnBackground">
        در انتخاب اسم پسر ایرانی باید به چه نکاتی توجه کرد؟
      </CustomTypography>

      <CustomTypography fontSize="Body_Large" className="pb-3 !text-impo_Neutral_OnBackground">
        یکی از اولین چیزایی که مادر و پدر‌ها با اولین
        <CustomLink href="/pregnancy-symptoms" className="!text-impo_PrimaryMan_PrimaryMan">
          علائم بارداری
        </CustomLink>
        به ذهنشون میاد، این که اسم بچم رو چی بذارم! اگه شما هم این دغدغه رو دارین، باید بگیم که اگرچه انتخاب اسم برای
        فرزند یه موضوع سلیقه‌ایه، اما بهتره در انتخاب اسم پسر ایرانی، به چند نکته و اصول مهم توجه کنین!
      </CustomTypography>
      <CustomTypography fontSize="Body_Large" className="pb-3 !text-impo_Neutral_OnBackground">
        برای مثال، توجه به معنای نام و ارتباطش با فرهنگ، تاریخ و ارزش‌های خانوادگی، سادگی و آهنگ تلفظ نام برای استفاده
        روزمره، هماهنگی با نام خانوادگی و تناسب نام با دوران تولد فرزند، از جمله نکاتی هستن که بهتره موقع انتخاب اسم پسر
        خاص و تک ایرانی به اون‌ها توجه کنید.
      </CustomTypography>

      <TitleGenerator tagType="h3">اهمیت توجه به ریشه و معنی در انتخاب اسم پسر ایرانی</TitleGenerator>
      <CustomTypography fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
        اگه
        <CustomLink href="/pregnancy-symptoms-of-having-a-girl" className="!text-impo_PrimaryMan_PrimaryMan">
          علائم صد در صد جنین دختر
        </CustomLink>
        یا پسر دارین، حتماً به دنبال اسامی دختر و پسر زیبا و پر‌معنی هستین!
      </CustomTypography>
      <CustomTypography fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
        {isOpen ? firstLineScript : textShorter(firstLineScript, 120)}
      </CustomTypography>

      <div
        ref={ref}
        style={{ maxHeight: isOpen ? maxHeight : 0 }}
        className="w-full h-fit flex flex-col duration-500 overflow-hidden"
      >
        <CustomTypography fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
          وقتی که شما تصمیم به انتخاب اسم می‌گیرین، بهتره به معنی اون هم توجه داشته باشین. اسم‌هایی با معانی مثبت و
          زیبا، حامل انرژی خوبی هستن و حتی می‌تونن در تعاملات اجتماعی آینده هم تأثیر مثبتی داشته باشن. برای همینه که
          می‌گیم وقتی برای پسرتون اسم پسر جدید و شیک ایرانی انتخاب می‌کنین، بهتره خوب تحقیق کنین و ریشه‌ها و معنی که
          داره رو بدونین. با این کار مطمئن می‌شین اسمی که انتخاب کردین هم زیباست و هم معنی مثبتی داره!
        </CustomTypography>

        <CustomTypography fontSize="Headline_Medium" tagType="h2" className="pt-7 !text-impo_Neutral_OnBackground">
          اسم پسر ایرانی بین‌المللی
        </CustomTypography>

        <CustomTypography fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
          اگه دوست دارین اسم پسرتون علاوه بر اینکه ریشه اصیل پارسی داره، بین‌المللی هم باشه، باید بگیم که اسم‌های زیبا و
          خوش‌آوایی وجود داره که به دلیل تلفظ ساده، معنای جهانی یا شباهت به نام‌های بین‌المللی، در کشور‌های دیگه هم
          قابل‌استفاده هستن. در ادامه، چند اسم پسر فارسی خاص بین‌المللی رو بیان کردیم.
        </CustomTypography>

        <div className="pt-4">
          <ItemGenerator>آیین: روش، رسم، شيوه‌ مناسب و مطلوب</ItemGenerator>
          <ItemGenerator>راما: منسوب به رام، مأنوس، موافق</ItemGenerator>
          <ItemGenerator>اروند: شأن و شوكت و شكوه</ItemGenerator>
          <ItemGenerator>نامی: سرشناس، مشهور، محبوب</ItemGenerator>
          <ItemGenerator>کاوان: صخره</ItemGenerator>
          <ItemGenerator>مانی: اندیشمند، جاودانگی</ItemGenerator>
          <ItemGenerator>رهام: نام پسر گودرز پهلوان ایرانی، پرنده شکست ناپذیر، لطافت باران</ItemGenerator>
          <ItemGenerator>مانیار: یار ماندگار</ItemGenerator>
          <ItemGenerator>آرِن: دلاور</ItemGenerator>
          <ItemGenerator>رایان: شاه کوچک، درخشان، نامی، ممتاز</ItemGenerator>
          <ItemGenerator>داریان: هدیه، یک اسم پسر ترکی و بین‌المللی</ItemGenerator>
          <ItemGenerator>داریو: معنی در ایتالیایی اسم داریوش</ItemGenerator>
          <ItemGenerator>آریو: در زبان اسپانیایی به معنی جنگجو</ItemGenerator>
          <ItemGenerator>لیام: اراده و آرزو</ItemGenerator>
          <ItemGenerator>دانیال: خداوند دادرس من است</ItemGenerator>
          <ItemGenerator>آدرین: به معنی دریا و آب</ItemGenerator>
          <ItemGenerator>شان: معنی در ایرلندی هدیه خدا</ItemGenerator>
          <ItemGenerator>آریا: نجیب، شریف، متعلق به قوم آریایی</ItemGenerator>
          <ItemGenerator>کیان: پادشاه، نسل پادشاهان</ItemGenerator>
        </div>
        <CustomTypography fontSize="Headline_Medium" tagType="h2" className="pt-7 !text-impo_Neutral_OnBackground">
          اسم پسر ایرانی اصیل لاکچری کردی
        </CustomTypography>

        <CustomTypography fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
          اسم‌هایی با ریشه پارسی و کردی خیلی زیبا هستن. اگه دوست دارین برای پسرتون بهترین اسم پسر ایرانی که ریشه کردی
          داره انتخاب کنین، پیشنهاد ما گزینه‌های زیره:
        </CustomTypography>

        <div className="pt-4">
          <ItemGenerator>آران: دشت وسیع و سرسبز، نام منطقه‌ای باستانی در آذربایجان</ItemGenerator>
          <ItemGenerator>آریو: نجیب و شریف، متعلق به قوم آریایی</ItemGenerator>
          <ItemGenerator>ژیار: شهرنشینی، تمدن و زندگی شهری پیشرفته</ItemGenerator>
          <ItemGenerator>ژوان: میعادگاه عاشق و معشوق</ItemGenerator>
          <ItemGenerator>ژیوار: زندگی پربار، نام کوهی مقدس در اورامان</ItemGenerator>
          <ItemGenerator>زانیار: یار دانشمند و دانا</ItemGenerator>
          <ItemGenerator>سروش: پیام‌آور الهی، فرشته اطاعت و الهام</ItemGenerator>
          <ItemGenerator>سیروان: رود خروشان، رودخانه پرآب، فردی سرشار از زندگی و قدرت</ItemGenerator>
          <ItemGenerator>شوان: شبان قدرتمند، نگهبان گله و طبیعت</ItemGenerator>
        </div>

        <CustomTypography fontSize="Headline_Medium" tagType="h2" className="pt-7 !text-impo_Neutral_OnBackground">
          اسم پسر ایرانی اوستایی
        </CustomTypography>

        <CustomTypography fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
          اوستایی، به زبان باستانی ایران اشاره داره که در متون مقدس زرتشتیان، به‌ویژه اوستا (کتاب مقدس آیین زرتشت)، به
          کار می‌رفته. بسیاری از اسم‌های اوستایی به مفاهیم معنوی و زرتشتی اشاره دارن و امروزه هم به‌عنوان اسم پسر و
          <CustomLink href="/landing/iran-girl-name" className="!text-impo_PrimaryMan_PrimaryMan">
            اسم دختر ایرانی
          </CustomLink>
          اصیل شناخته میشن.
        </CustomTypography>
        <CustomTypography fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
          چندتا اسم پسر فارسی خاص و تک که ریشه اوستایی دارن، در ادامه آورده شده:
        </CustomTypography>

        <div className="pt-4">
          <ItemGenerator>آرتین: مقدس، پاک</ItemGenerator>
          <ItemGenerator>آرش: درخشان، روشنایی</ItemGenerator>
          <ItemGenerator>آریامن: دوست شریف، یار نجیب</ItemGenerator>
          <ItemGenerator>بهرام: پیروز، فاتح</ItemGenerator>
          <ItemGenerator>پرهام: فرشته خوبی</ItemGenerator>
          <ItemGenerator>پِشوتن: فداکار</ItemGenerator>
          <ItemGenerator>جاماسب: دارنده اسب درخشان</ItemGenerator>
          <ItemGenerator>خشایار: پادشاه قهرمان</ItemGenerator>
          <ItemGenerator>زرتشت: دارنده شتر زرین</ItemGenerator>
          <ItemGenerator>سپنتا: مقدس و پاک</ItemGenerator>
          <ItemGenerator>فرشید: درخشش شکوهمند</ItemGenerator>
          <ItemGenerator>فرامرز: نگهبان مرزها، نام پسر رستم</ItemGenerator>
          <ItemGenerator>مهراب: پیمان خورشید، نام شخصیتی در شاهنامه</ItemGenerator>
          <ItemGenerator>بهمن: نیک‌اندیش، نام یکی از امشاسپندان زرتشتی</ItemGenerator>
          <ItemGenerator>تیر: ستاره، ایزد تیر</ItemGenerator>
        </div>

        <CustomTypography fontSize="Headline_Medium" tagType="h2" className="pt-7 !text-impo_Neutral_OnBackground">
          اسم پسر ایرانی در شاهنامه
        </CustomTypography>

        <CustomTypography fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
          اسم پسر فارسی که توی شاهنامه اومدن، علاوه بر اینکه زیبا و منحصربه‌فردن، معنا و داستان متفاوتی هم دارن. وقتی که
          تصمیم می‌گیریم اسم پسرمون رو از دل این تاریخ کهن انتخاب کنیم، درواقع داریم بخشی از فرهنگ و تاریخ هزارساله
          کشورمون رو بهش هدیه می‌دیم. انواع اسم پسر فارسی خاص مثل سهراب، رستم، کاوه، کیان، کارن و … یادآور شجاعت و‌
          وفاداری هستن و حس غرور و تعلق به هویت ایرانی رو در فرزندمون تقویت می‌کنن. انتخاب اسم پسر فارسی اصیل از شاهنامه
          علاوه بر اینکه زیباست، همینطور باعث می‌شه فرزندتون با افتخار بزرگ شه و همواره احساس ارزشمندی داشته باشه.
        </CustomTypography>

        <CustomTypography fontSize="Headline_Medium" tagType="h2" className="pt-7 !text-impo_Neutral_OnBackground">
          سخن پایانی
        </CustomTypography>

        <CustomTypography fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
          در این راهنما انتخاب اسم، تلاش کردیم فهرست کاملی از اسم پسر ایرانی شیک و جدید رو جمع‌آوری کنیم. امیدواریم این
          لیست بتونه به شما کمک کنه تا اسمی اصیل و پرمعنا برای پسرتون انتخاب کنین. اگه اسم پسر فارسی جدید دیگه‌ای هم
          می‌دونین که در این لیست بهش اشاره نشده، می‌تونین در بخش تالار گفتگو اپلیکیشن ایمپو، قسمت انتخاب نام فرزند، با
          کاربرای دیگه به اشتراک بذارین.
        </CustomTypography>
      </div>

      <div className="w-full flex items-center justify-center gap-2 pt-6" onClick={() => setIsOpen(!isOpen)}>
        <CustomTypography fontSize="Title_Small" color={'PrimaryMan_PrimaryMan'}>
          {isOpen ? 'بستن' : 'خواندن اطلاعات بیشتر'}
        </CustomTypography>

        <ArrowIcon
          className="w-4 duration-100"
          style={{ fill: COLORS_LIST.PrimaryMan_PrimaryMan, transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)' }}
        />
      </div>
    </div>
  );
};

export default Description;
