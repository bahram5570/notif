import CalendarOfPregnancyContainer from '@components/pages/calendarOfPregnancy/CalendarOfPregnancyContainer';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'محاسبه سن بارداری آنلاین و تقویم بارداری هفتگی و ماهانه',
  description:
    'محاسبه سن بارداری با سونوگرافی، آزمایش خون و تاریخ آخرین پریود انجام می‌‌شود. در ایمپو به راحتی سن بارداری و تقویم بارداری خود را مشاهده کنید',
  robots: { follow: true, index: true },
  alternates: {
    canonical: `${HOST_URL}/calendarOfPregnancy`,
  },
};

const CalendarOfPregnancy = () => {
  return <CalendarOfPregnancyContainer />;
};

export default CalendarOfPregnancy;
