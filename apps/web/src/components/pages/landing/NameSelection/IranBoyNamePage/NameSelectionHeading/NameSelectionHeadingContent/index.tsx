import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

const NameSelectionHeadingContent = () => {
  return (
    <div className="flex flex-col items-center md:items-start justify-center md:justify-start">
      <CustomTypography
        tagType="h1"
        fontSize="Headline_Medium"
        className="py-2 lg:pt-2 lg:pb-1 !text-impo_Neutral_OnBackground text-center md:text-right"
      >
        لیست کامل اسم پسر ایرانی بر اساس حروف الفبا
      </CustomTypography>

      <CustomTypography
        tagType="span"
        fontSize="Body_Large"
        className="text-center lg:text-right !text-impo_Neutral_OnBackground"
      >
        انتخاب اسم یکی از هیجان‌انگیز‌ترین و قشنگ‌ترین لحظه‌های دوران بارداری و صاحب فرزند شدنه. اگه متوجه شدید که جنسیت
        فرزندتون پسره و به دنبال یک «اسم پسر ایرانی» زیبا می‌گردین، باید بدونین که اسم‌های پسرونه اصیل زیادی وجود دارن
        که هر‌کدوم پر از داستان و ریشه‌های تاریخی و ادبی هستن. در این راهنما از ایمپو، مجموعه‌ای کامل از بهترین «اسم پسر
        ایرانی اصیل لاکچری» جمع‌آوری شده که انتخاب اسم رو براتون آسون‌تر می‌کنه.
      </CustomTypography>
    </div>
  );
};

export default NameSelectionHeadingContent;
