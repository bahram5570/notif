import CustomTypography from '@components/ui/CustomTypography';

import CalendarOfPregnancySeperator from '../CalendarOfPregnancySeperator';

const CalendarOfPregnancyInfo = () => {
  return (
    <>
      <CustomTypography fontSize="Body_Large" className="text-justify !text-impo_Neutral_OnBackground">
        تقویم بارداری آنلاین ایمپو، در هر هفته بارداری، اطلاعات تخصصی زیر را در اختیار شما قرار می‌دهد:
      </CustomTypography>

      <ul className="flex flex-col gap-1 pr-6 pt-3 pb-8">
        <CustomTypography tagType="li" className="list-disc !text-impo_Neutral_OnBackground">
          تغییراتی بدن مادر و جنین
        </CustomTypography>
        <CustomTypography tagType="li" className="list-disc !text-impo_Neutral_OnBackground">
          آزمایشات ضروری
        </CustomTypography>
        <CustomTypography tagType="li" className="list-disc !text-impo_Neutral_OnBackground">
          مراقبت‌های تخصصی
        </CustomTypography>
        <CustomTypography tagType="li" className="list-disc !text-impo_Neutral_OnBackground">
          رژیم غذایی مناسب
        </CustomTypography>
        <CustomTypography tagType="li" className="list-disc !text-impo_Neutral_OnBackground">
          بایدها و نبایدهای بارداری
        </CustomTypography>
      </ul>

      <CustomTypography fontSize="Body_Small" className="text-center !text-impo_Surface_Outline">
        برای دسترسی به این اطلاعات تخصصی تنها کافیست بر روی هفته یا ماه مورد نظر خود در بخش زیر کلیک کنید.
      </CustomTypography>

      <CalendarOfPregnancySeperator />
    </>
  );
};

export default CalendarOfPregnancyInfo;
