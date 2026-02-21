import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';

import CalendarOfPregnancySeperator from '../CalendarOfPregnancySeperator';

const CalendarOfPregnancyTable = () => {
  return (
    <>
      <CustomTypography
        tagType="h2"
        fontSize="Headline_Medium"
        className="pb-2 text-center !text-impo_Neutral_OnBackground"
      >
        جدول ماه‌های بارداری
      </CustomTypography>

      <CustomTypography className="!text-center pt-2 pb-6 !text-impo_Neutral_OnBackground">
        جدول زیر به شما کمک می‌کند بدانید، هر هفته بارداری معادل کدام ماه است:
      </CustomTypography>

      <CustomImage src="/assets/images/tabelOfPregnancy.webp" alt="" width={600} height={0} className="mx-auto" />

      <CalendarOfPregnancySeperator />
    </>
  );
};

export default CalendarOfPregnancyTable;
