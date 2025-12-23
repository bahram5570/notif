import StarIcon from '@assets/icons/star2.svg';

import CustomTypography from '@components/ui/CustomTypography';

const GenderDeterminationContents = () => {
  return (
    <div className="w-full">
      {/* // # Text 1 */}
      <div className="mb-4">
        <CustomTypography
          fontSize="Lable_Large"
          className="md:inline text-center md:text-start  !text-impo_Neutral_OnBackground"
        >
          این محصول، یک پکیج آماده که همه بتونن ازش استفاده کنن نیست.
        </CustomTypography>

        <CustomTypography
          fontSize="Body_Large"
          className="md:inline text-center md:text-start !text-impo_Neutral_OnBackground"
        >
          بعد از گرفتن شرح حال و بسته به شرایط هر نفر، اقداماتی که هر نفر باید انجام بده هم متفاوته.
        </CustomTypography>
      </div>

      {/* // # Text 2 */}
      <div className="mb-8 text-center md:text-start">
        <CustomTypography
          fontSize="Body_Large"
          className="inline text-center md:text-start !text-impo_Neutral_OnBackground"
        >
          ماما مهدیه برای
        </CustomTypography>

        <CustomTypography
          fontSize="Body_Large"
          className="inline rounded-md px-[3px] ml-1 text-center md:text-start bg-impo_Blue_500 !text-impo_White"
        >
          پسردار شدن از 3 ماه قبل از اقدام
        </CustomTypography>

        <br className="md:hidden" />

        <CustomTypography className="inline text-center md:text-start !text-impo_Neutral_OnBackground">
          و برای
        </CustomTypography>

        <CustomTypography
          fontSize="Body_Large"
          className="inline rounded-md px-[3px] ml-1 text-center md:text-start bg-impo_Primary_Primary !text-impo_White"
        >
          دختردار شدن از 2 ماه قبل از اقدام به بارداری
        </CustomTypography>

        <CustomTypography
          fontSize="Body_Large"
          className="inline text-center md:text-start !text-impo_Neutral_OnBackground"
        >
          در کنارته،
        </CustomTypography>

        <br className="md:hidden" />

        <CustomTypography
          fontSize="Body_Large"
          className="inline text-center md:text-start !text-impo_Neutral_OnBackground"
        >
          بهت مشاوره می‌ده و قدم به قدم هر کاری که لازم باشه رو به خودت و همسرت یادآوری می‌کنه
        </CustomTypography>
      </div>

      {/* // # Card 1 */}
      <div className="mb-8 w-full md:w-fit rounded-2xl py-4 px-2 md:px-20 mx-auto text-center bg-impo_Blue_100">
        <CustomTypography fontSize="Lable_Large" className="inline">
          احتمال موفقیت
        </CustomTypography>

        <CustomTypography fontSize="Body_Large" className="inline">
          با این روش در بهترین حالت
        </CustomTypography>

        <CustomTypography fontSize="Lable_Large" className="inline !text-impo_Primary_Primary">
          90%
        </CustomTypography>

        <CustomTypography fontSize="Body_Large" className="inline">
          هست.
        </CustomTypography>

        <br className="md:hidden" />

        <CustomTypography fontSize="Body_Large" className="inline">
          اما این نکته رو هم در نظر بگیر
        </CustomTypography>

        <br />

        <CustomTypography fontSize="Body_Large" className="inline">
          که هیچ روش 100% برای این موضوع وجود نداره.
        </CustomTypography>
      </div>

      {/* // # Text 3 */}
      <div className="mb-8">
        <CustomTypography fontSize="Body_Large" className="inline !text-impo_Neutral_OnBackground">
          در طی مدت پشتیبانی پکیج می‌تونی
        </CustomTypography>

        <CustomTypography fontSize="Lable_Large" className="inline !text-impo_Neutral_OnBackground">
          هر هفته یک جلسه
        </CustomTypography>

        <CustomTypography fontSize="Body_Large" className="inline !text-impo_Neutral_OnBackground">
          رو با ماما مهدیه به صورت متنی یا تلفنی صحبت کنی و ازش مشاوره بگیری.
        </CustomTypography>

        <br />

        <CustomTypography fontSize="Body_Large" className="inline !text-impo_Neutral_OnBackground">
          قبل از خرید پکیج هم
        </CustomTypography>

        <CustomTypography
          fontSize="Body_Large"
          className="inline rounded-md px-[3px] ml-1  !text-impo_White bg-impo_Primary_Primary"
        >
          یک جلسه مشاوره رایگان
        </CustomTypography>

        <CustomTypography fontSize="Body_Large" className="inline  !text-impo_Neutral_OnBackground">
          برای بررسی شرایطت توسط ماما و طرح سوالات احتمالیت داری.
        </CustomTypography>
      </div>

      {/* // # Card 2 */}
      <div className="mb-6 w-fit flex items-center gap-1 py-[2px] px-2 rounded-md bg-impo_Pink_100">
        <StarIcon className="w-8 h-auto !fill-impo_Primary_Primary" />

        <CustomTypography tagType="h3" fontSize="Lable_Large">
          خدماتی که با خرید این محصول دریافت می‌کنی:
        </CustomTypography>
      </div>

      {/* // # Text 4 */}
      <ul className="mb-8 pr-5 flex flex-col gap-2">
        {ulList.map((item, index) => (
          <UlGenerator script={item} key={index} />
        ))}
      </ul>

      {/* // # Card 3 */}
      <div className="mb-8 w-full md:w-fit rounded-2xl border-[1px] py-4 px-2 md:px-20 mx-auto text-center bg-impo_Pink_100 border-impo_Primary_Primary">
        <CustomTypography fontSize="Body_Large" className="inline">
          قیمت این محصول
        </CustomTypography>

        <CustomTypography fontSize="Lable_Large" className="inline">
          1 میلیون تومان
        </CustomTypography>

        <CustomTypography fontSize="Body_Large" className="inline">
          برای
        </CustomTypography>

        <br className="md:hidden" />

        <CustomTypography fontSize="Lable_Large" className="inline !text-impo_Primary_Primary">
          3 ماه همراهی
        </CustomTypography>

        <br className="hidden md:block" />

        <CustomTypography fontSize="Lable_Large" className="inline !text-impo_Primary_Primary">
          و پشتیبانی
        </CustomTypography>

        <br className="md:hidden" />

        <CustomTypography fontSize="Body_Large" className="inline">
          قدم‌به‌قدم ماما مهدیه با شماست
        </CustomTypography>
      </div>

      {/* // # Text 5 */}
      <CustomTypography fontSize="Lable_Large" className="text-center !text-impo_Neutral_OnBackground py-4">
        هر سوال و مشکلی هم داری با پشتیبانی ایمپو (۰۹۱۵۷۰۹۷۵۰۰) تماس بگیر
      </CustomTypography>
    </div>
  );
};

export default GenderDeterminationContents;

const UlGenerator = (props: { script: string }) => {
  return (
    <CustomTypography tagType="li" className="list-disc !text-impo_Surface_InverseSurface">
      {props.script}
    </CustomTypography>
  );
};

const ulList = [
  'پکیج شخصی‌سازی شده مخصوص شرایط خودت و همسرت',
  'گرفتن شرح حال',
  'پشتیبانی در طی مدت اقدام (3ماه برای پسردار شدن و 2 ماه برای دختردار شدن)',
  'مزاج‌شناسی خودت و همسرت',
  'رژیم غذایی مناسب خودت و همسرت',
  'درخواست و تفسیر سونوگرافی و آزمایش‌های لازم',
  'تجویز مکمل‌های مناسب',
  'آموزش اصلاح سبک زندگی مناسب خودت و همسرت',
  'راهکارهای کاهش استرس',
  'آموزش گرم‌کردن رحم و تخمدان',
  'آموزش ورزش‌های مناسب قبل از بارداری',
  'آموزش پاکسازی کبد در صورت نیاز',
  'آموزش راه‌کارهای رفع عفونت و زخم دهانه رحم',
  'آموزش نکات مهم ماه و روز اقدام بصورت کامل',
  'آموزش شستشوی واژن با جدیدترین متد',
  'آموزش نکات بعد از اقدام برای لانه‌گزینی بهتر',
];
