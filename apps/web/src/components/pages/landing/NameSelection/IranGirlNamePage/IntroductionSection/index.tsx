import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

const IntroductionSection = () => {
  return (
    <div className="flex justify-start flex-col">
      <CustomTypography tagType="h2" fontSize="Headline_Medium" className="pb-5 !text-impo_Neutral_OnBackground">
        انتخاب اسم دختر ایرانی اصیل لاکچری با ابزار آنلاین اپلیکیشن ایمپو
      </CustomTypography>
      <CustomTypography fontSize="Body_Large" className="!text-impo_Surface_InverseSurface">
        انتخاب اسم برای این فرشته کوچولو مسافر، یکی از شیرین‌ترین دغدغه‌های مامانای بارداره. بعضی‌ از پدر و مادرها تو
        تک‌تک
        <CustomLink href="/pregnancy-symptoms" className="!text-impo_Primary_Primary mx-[3px] inline-block">
          علائم بارداری
        </CustomLink>
        به دنبال
        <CustomLink
          href="/pregnancy-symptoms-of-having-a-boy"
          className="!text-impo_Primary_Primary mx-[3px] inline-block"
        >
          علائم صد در صد جنین پسر
        </CustomLink>
        و دختر می‌گردن اما خیلی‌ها منتظر نتیجه سونوگرافی میمونن تا اسم مسافر کوچولوشونو انتخاب کنن.
      </CustomTypography>
      <CustomTypography fontSize="Body_Large" className="!text-impo_Surface_InverseSurface">
        اپلیکیشن ایمپو که همدم و راهنمای دوران بارداریه، برای این دغدغه هم یک چاره‌ی اساسی در نظر گرفته؛ کافیه وارد
        اپلیکیشن شی و روی بنر انتخاب اسم نوزاد کلیک کنی. ابزار آنلاین انتخاب اسم اپلیکیشن ایمپو اسم‌ها رو بر اساس
        فیلترهای مختلف مثل ریشه اسم و ترتیب حروف الفبا دسته بندی کرده. فقط کافیه فیلترهای مورد نظرت رو انتخاب کنی تا
        دیگه بین صدها اسم سردرگم نشی. مثلا میتونی فیلتر اسم‌های کردی، ترکی، گیلکی و... رو انتخاب کنی و اسم‌های دخترانه
        ایرانی شیک از فرهنگ‌های مختلف رو ببینی.
      </CustomTypography>
      <CustomTypography fontSize="Body_Large" className="!text-impo_Surface_InverseSurface">
        این طوری هیچ انتخابی رو از دست نمیدی و هر اسمی که دلت رو برد، کافیه لایک کنی تا در لیست علاقه‌مندی‌هات ذخیره
        بشه. انتخاب نهایی اینطوری خیلی آسون‌تر می‌شه. اپلیکیشن ایمپو، همراه مطمئن و مهربون شما برای تمام لحظه‌های
        بارداری، از
        <CustomLink href="/calendarOfPregnancy" className="!text-impo_Primary_Primary mx-[3px] inline-block">
          محاسبه سن بارداری،
        </CustomLink>
        یادآوری آزمایشات و بررسی علائم تا انتخاب اسم فرشته کوچولوی شماست. اگه هنوز جنسیت فرزند زیبات مشخص نشده، پیشنهاد
        می‌کنیم راهنما انتخاب
        <CustomLink href="/landing/boy-name" className="!text-impo_Primary_Primary mx-[3px] inline-block">
          اسم پسر
        </CustomLink>
        رو هم امتحان کنی.
      </CustomTypography>
    </div>
  );
};

export default IntroductionSection;
