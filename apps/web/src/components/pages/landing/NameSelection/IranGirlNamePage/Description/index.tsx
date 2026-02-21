'use client';

import { useEffect, useRef, useState } from 'react';

import ArrowIcon from '@assets/icons/arrow2.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { textShorter } from '@utils/scripts';

import CustomLink from '@components/ui/CustomLink';

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
    'انتخاب اسم برای فرشته کوچکی که منتظرش هستین، قطعاً پرچالش‌تر از چیزیه که گمان می‌کردین. اسم فرزندتون، اولین و ماندگارترین هدیه شماست و تا پایان عمرش هم روی او تاثیر می‌ذاره. در فرهنگ غنی ایران، که دختران و اسم‌ها با تاریخ، ادبیات و اساطیر درآمیخته‌، اسم دختر ایرانی تضمین‌کننده‌ی زیبایی و اصالتش خواهد بود. این اسم دختر ایرانی اصیل لاکچری به دختر شما این اعتماد به نفس می‌ده که در هر مسیری با اقتدار و غرور قدم بذاره.در ادامه قراره با مهم‌ترین نکات زمان انتخاب اسم دختر ایرانی خاص آشنا بشیم:';

  return (
    <div className="w-full rounded-2xl p-6 bg-impo_Surface_SurfaceVariant">
      <CustomTypography fontSize="Headline_Medium" tagType="h2" className="!text-impo_Neutral_OnBackground">
        نکات مهمی که در انتخاب اسم دخترانه ایرانی باید توجه کنید
      </CustomTypography>

      <CustomTypography fontSize="Body_Large" className="pb-3 !text-impo_Neutral_OnBackground">
        {isOpen ? firstLineScript : textShorter(firstLineScript, 300)}
      </CustomTypography>

      <div
        ref={ref}
        style={{ maxHeight: isOpen ? maxHeight : 0 }}
        className="w-full h-fit flex flex-col duration-500 overflow-hidden"
      >
        <CustomTypography fontSize="Body_Large" className="pb-3 !text-impo_Neutral_OnBackground">
          اسم کوچیک بهتره هم از نظر آوایی و هم از نظر معنایی، با فامیلی تناسب داشته باشه. این هماهنگی زمان صدا زدن دختر
          خوشگل شما در محیط کار یا مدرسه فوق‌العاده مهمه. برای همین اگه دنبال یک اسم دخترانه فارسی جدید برای فرزندتون
          هستین، برای اطمینان اسم و فامیل کامل را با صدای بلند تکرار کنین.
        </CustomTypography>
        <CustomTypography fontSize="Body_Large" className="pb-3 !text-impo_Neutral_OnBackground">
          بعضی از اسم‌های ایرانی جدید و زیبا با اینکه باکلاس هستن اما تلفظ سختی دارن. اسم‌های دخترانه ایرانی شیک زیادی
          وجود داره که تلفظ ساده و روان دارن. یک اسم دختر ایرانی اصیل لاکچری مثل «یارا» هم راحت صدا می‌شه هم خوب تو خاطر
          می‌مونه. یادتو باشه که یک اسم دخترانه فارسی جدید باید برای سال‌های سال قابل تلفظ و قابل درک باشه. خاص بودن
          باید در زیبایی و عمق معنا باشه. اسم دخترانه فارسی با معنی زیبا در ادبیات ما کم نیست اما قبل انتخاب اسم دختر
          ایرانی مطمئن شین که اسم انتخابی شما، با اینکه کهن و اصیله اما منسوخ نباشه. تو ایمپو می‌تونین مجمموعه‌ای از اسم
          دختر ایرانی جدید رو پیدا کنین که هم اصیل و لاکچری‌ هستن هم مدرن و خاص.
        </CustomTypography>
        <CustomTypography fontSize="Headline_Medium" tagType="h3" className="!text-impo_Neutral_OnBackground">
          اهمیت توجه به ریشه و معنی اسم دختر ایرانی
        </CustomTypography>
        <CustomTypography fontSize="Body_Large" className="pb-3 !text-impo_Neutral_OnBackground">
          اسم بخشی از هویت و روح آدمه. وقتی ریشه و معنی اسم ما زیبا و پرمفهومه، دختر خوشگل شما احساس ارزشمندی و افتخار
          می‌کنه. اسم در ذهن دیگران اولین برداشت رو شکل می‌ده. به طوری که اسم دختر ایرا نی خاص با ریشه و معنی نیکو
          می‌تونه احترام، اعتماد و علاقه ایجاد کنه.
        </CustomTypography>
        <CustomTypography fontSize="Body_Large" className="pb-3 !text-impo_Neutral_OnBackground">
          علاوه بر اینا، اسم‌هایی که ریشه و معنای اصیلی دارن معمولا از نظر موسیقی و آوا هم دلنشین‌ترن و در گذر زمان هم
          قدیمی و متروک نمی‌شن.پس یادت باشه، معنی و ریشه اسم دخترانه فارسی به دختر کوچولوی قشنگت هویتی منحصر به فرد و
          نیکو می‌ده که همیشه همراهش هست.
        </CustomTypography>
        <CustomTypography fontSize="Body_Large" className="pb-3 !text-impo_Neutral_OnBackground">
          اگه هنوز درمورد جنسیت فرزند عزیزت مطمئن نیستی، حتما راهنما انتخاب
          <CustomLink href="/landing/iran-boy-name" className="!text-impo_Primary_Primary mx-[3px] inline-block">
            اسم پسر ایرانی
          </CustomLink>
          رو امتحان کن تا نام‌های اصیل و با معنی زیبا رو از دست ندی.
        </CustomTypography>
        <CustomTypography fontSize="Headline_Medium" tagType="h2" className="!text-impo_Neutral_OnBackground">
          اسم دختر ایرانی اصیل باستانی
        </CustomTypography>
        <CustomTypography fontSize="Body_Large" className="pb-3 !text-impo_Neutral_OnBackground">
          انتخاب یه اسم دختر ایرانی اصیل لاکچری یعنی یه دنیا شکوه و تمدن و فرهنگ رو به دختر شگفت‌انگیزت گره بزنی. طوری
          که انگار به عنوان کادوی تولد بهش یک گنج از دل تاریخ، شاهنامه یا شعرهای عاشقانه‌ هدیه بدی. نام دخترانه فارسی
          اصیلی مثل آذرخش که نمادی از قدرت و درخششه، فقط یک کلمه نیست بلکه یه احساس غرور پشتشه که به دختر ایرانی تو قدرت
          و شجاعت هر کاری رو می‌ده. وقتی این اسم های دخترانه ایرانی شیک رو صدا می‌زنی، انگار داری تاریخ رو یادآوری
          می‌کنی. دختر تو حالا ادامه‌دهنده‌ی داستان سرزمین شه.
        </CustomTypography>
        <CustomTypography fontSize="Headline_Medium" tagType="h2" className="!text-impo_Neutral_OnBackground">
          اسم دختر اصیل ایرانی شاهنامه
        </CustomTypography>
        <CustomTypography fontSize="Body_Large" className="pb-3 !text-impo_Neutral_OnBackground">
          شاهنامه فردوسی گنجینه‌ فرهنگ و هویت ایرانه که تموم این سال‌ها تمدن و اصالتش رو در خودش نگه داشته. شاهنامه پر
          از اسم دخترانه فارسی با معنی زیبا که هر کدوم یه دنیا قصه و حماسه دارن. مثلاً کتایون، همسر گشتاسب، نماد وقار و
          خرد زنانه‌ست یا فرنگیس، مادر سیاوش، که مظهر نجابت و صبوریه. منیژه، دختر افراسیاب، که به‌خاطر دلدادگی و
          فداکاریش نماد عشقی پاک و پرشکوهه که امروزه کمتر پیدا می‌شه.
        </CustomTypography>
        <CustomTypography fontSize="Body_Large" className="pb-3 !text-impo_Neutral_OnBackground">
          هر کدوم از این اسم های دخترانه ایرانی شیک و با اصالت تکه‌ای از ادبیات ما هستن که وقتی روی دختران سرزمینمون
          می‌ذاریم، انگار روح شاهنامه، قدرت و تاریخ غنیمون رو زنده نگه می‌داریم.
        </CustomTypography>
        <CustomTypography fontSize="Headline_Medium" tagType="h2" className="!text-impo_Neutral_OnBackground">
          اسم دختر ایرانی اوستایی
        </CustomTypography>
        <CustomTypography fontSize="Body_Large" className="pb-3 !text-impo_Neutral_OnBackground">
          اسم‌های دختر ایرانی با ریشه اوستایی و زرتشتی حال‌ و هوای خاص و رویایی دارن؛ چون هم باستانی‌ان، هم پرمعنی و
          انگار از دل نیایش‌ها و اسطوره‌های کهن میان. این اسم‌ها شخصیتی ویژه و افسانه‌ای به دختر شگفت‌انگیز و زیبای شما
          می‌دن و اونو از بقیه متمایز می‌کنن.
        </CustomTypography>
        <CustomTypography fontSize="Body_Large" className="pb-3 !text-impo_Neutral_OnBackground">
          مثلا اسم دختر ایرانی اصیل لاکچری آناهیتا، ایزدبانوی آب‌ها و نماد پاکی یا میترا، خدای پیمان و دوستی، که اسمش
          همیشه یادآور روشناییه. حتی اسمایی مثل ویستا که به نظر غربی میان، بوی اصالت و ریشه‌های کهن سرزمین پر رمز و راز
          ما رو می‌دن. وقتی دختر کوچولوی شما با این اسم‌ها صدا زده می‌شه، انگار یه تکه از تاریخ و فرهنگ اوستایی دوباره
          جون می‌گیره و همراهش میاد توی زندگی امروز؛ حالا دیگه همه می‌دونن این دختر پرافتخار ایرانی، یک دنیا قصه و تاریخ
          پشتشه.
        </CustomTypography>
        <CustomTypography fontSize="Headline_Medium" tagType="h2" className="!text-impo_Neutral_OnBackground">
          سخن پایانی
        </CustomTypography>
        <CustomTypography fontSize="Body_Large" className="pb-3 !text-impo_Neutral_OnBackground">
          انتخاب اسم دختر ایرانی چیزی فراتر از یک تصمیم سادست؛ چرا که قراره بخشی از تاریخ سرزمینش و ادامه‌دهنده راه
          زن‌های پرافتخار ایرانی بشه. علاوه بر این‌ها اسم دخترانه فارسی اولین و ماندگارترین هدیه شما به دختر کوچولوتونه.
          شما با اسم دختر ایرانی اصیل لاکچری روی هویت فرزند قشنگتون تاثیر میذارین. برای مثال اسم دخترانه فارسی با معنی
          زیبا مانند یارا با آوایی دلنشین و لطیف، هم توانایی و قدرت را یادآوری می‌کند و هم در خاطرها ماندگار هست. ابزار
          انتخاب اسم دخترانه فارسی ایمپو بهت کمک می‌کنه اسم‌های اصیل و لاکچری رو گلچین کنی و با خیال راحت قشنگ‌ترین اسم
          دخترانه فارسی ۱۴۰۴ رو انتخاب کنی. اسمی که به دختر کوچولوت هویت و اعتماد به نفس هدیه می‌ده.
        </CustomTypography>
      </div>

      <div className="w-full flex items-center justify-center gap-2 pt-6" onClick={() => setIsOpen(!isOpen)}>
        <CustomTypography fontSize="Title_Small" className="!text-impo_Primary_Primary">
          {isOpen ? 'بستن' : 'خواندن اطلاعات بیشتر '}
        </CustomTypography>

        <ArrowIcon
          className="w-4 duration-100 fill-impo_Primary_Primary"
          style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)' }}
        />
      </div>
    </div>
  );
};

export default Description;
