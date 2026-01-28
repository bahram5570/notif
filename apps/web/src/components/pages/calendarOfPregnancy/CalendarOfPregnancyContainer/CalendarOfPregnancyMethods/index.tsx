import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

const CalendarOfPregnancyMethods = () => {
  return (
    <>
      <CustomTypography
        tagType="h2"
        fontSize="Headline_Medium"
        className="pb-2 text-center !text-impo_Neutral_OnBackground"
      >
        روش‌های دیگر تعیین سن بارداری
      </CustomTypography>

      <CustomTypography className=" pt-2 pb-6 text-center !text-impo_Neutral_OnBackground">
        محاسبه هفته بارداری و تاریخ زایمان به چند روش انجام می‌شود. این روش‌ها عبارتند از:
      </CustomTypography>
      <CustomTypography fontSize="Headline_Medium" tagType="h3" className="pb-2 !text-impo_Neutral_OnBackground">
        1.محاسبه سن دقیق بارداری بر اساس تاریخ آخرین پریود
      </CustomTypography>

      <CustomTypography className=" pt-2 pb-6 !text-impo_Neutral_OnBackground">
        در این روش تاریخ زایمان شما حدود 40 هفته پس از اولین روز از آخرین
        <CustomLink
          href="https://impo.app/menstrual-cycle"
          className="!text-impo_Primary_Primary mx-[3px] inline-block"
        >
          پریود
        </CustomLink>
        شما خواهد بود. اپلیکیشن ایمپو پیش از اقدام به بارداری می‌تواند به شما در ثبت تاریخ پریود کمک کند. اگر
        <CustomLink
          href="https://impo.app/irregular-periods-reasons-and-treatment"
          className="!text-impo_Primary_Primary mx-[3px] inline-block"
        >
          پریود نامنظم
        </CustomLink>
        دارید، انجام سونوگرافی برای محاسبه سن بارداری، روش دقیق‌تری است.
      </CustomTypography>

      <CustomTypography fontSize="Headline_Medium" tagType="h3" className="pb-2 !text-impo_Neutral_OnBackground">
        2.محاسبه سن بارداری با روز تخمک گذاری و تاریخ لقاح
      </CustomTypography>

      <CustomTypography className=" pt-2 pb-6 !text-impo_Neutral_OnBackground">
        اگر تاریخ دقیق
        <CustomLink href="https://impo.app/ovulation" className="!text-impo_Primary_Primary mx-[3px] inline-block">
          تخمک گذاری
        </CustomLink>
        را می‌دانید کافیست 38 هفته به آن اضافه کنید تا تاریخ زایمان و تولد فرزندتان را بدست آورید.
      </CustomTypography>

      <CustomTypography fontSize="Headline_Medium" tagType="h3" className="pb-2 !text-impo_Neutral_OnBackground">
        3.محاسبه هفته بارداری و تاریخ زایمان با آزمایش خون بتا
      </CustomTypography>

      <CustomTypography className=" pt-2 pb-6 !text-impo_Neutral_OnBackground">
        آزمایش خون بتا یا
        <CustomLink href="https://impo.app/hcg-blood-test" className="!text-impo_Primary_Primary mx-[3px] inline-block">
          آزمایش خون بارداری
        </CustomLink>
        با بررسی سطح فاکتوری به نام هورمون hCG به تشخیص بارداری کمک می‌کند.
      </CustomTypography>

      <CustomTypography fontSize="Headline_Medium" tagType="h3" className="pb-2 !text-impo_Neutral_OnBackground">
        4. محاسبه سن بارداری با سونوگرافی
      </CustomTypography>

      <CustomTypography className=" pt-2 pb-6 !text-impo_Neutral_OnBackground">
        انجام سونوگرافی شاید به عنوان بهترین روش محاسبه سن بارداری، به خصوص پیش از هفته بیستم بارداری، شناخته شود. در
        این روش، هفته بارداری بر اساس اندازه طول سر تا نوک پای جنین محاسبه می‌‌شود.
      </CustomTypography>

      <CustomTypography fontSize="Headline_Medium" tagType="h3" className="pb-2 !text-impo_Neutral_OnBackground">
        5. تشخیص سن دقیق جنین بر اساس اندازه‌گیری رحم
      </CustomTypography>

      <CustomTypography className=" pt-2 pb-6 !text-impo_Neutral_OnBackground">
        پس از حدود هفته هجدهم بارداری، فاصله بین استخوان شرمگاهی و دیواره رحم احتمالاً به اندازه تعداد هفته‌های پس از
        آخرین قاعدگی شما خواهد بود. در هفته بیستم، انتهای رحم تقریباً نزدیک به ناف شما است.
      </CustomTypography>
    </>
  );
};

export default CalendarOfPregnancyMethods;
