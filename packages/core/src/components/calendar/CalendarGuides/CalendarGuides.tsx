import { useEffect, useState } from 'react';

import { CustomSlider } from '../../ui/CustomSlider';
import { CustomTypography } from '../../ui/CustomTypography';
import { CalendarGuidesProps, GuideListTypes } from './type';

export const CalendarGuides = ({ calendarGuideInfo }: CalendarGuidesProps) => {
  const [guideList, setGuideList] = useState<GuideListTypes>([]);

  useEffect(() => {
    const list: GuideListTypes = [];
    <div className="bg-impo_Neutral_Background" />;

    if (calendarGuideInfo?.haveBreastfeeding) {
      list.push({ text: 'روزهای شیردهی', backgroundColor: 'bg-impo_Calendar_Breastfeeding_Background1' });
    }
    if (calendarGuideInfo?.havePregnency) {
      list.push({ text: 'روز بارداری', backgroundColor: 'bg-impo_Calendar_Pregnancy_Background1' });
    }

    list.push(
      { backgroundColor: 'bg-impo_Grey_200', text: 'روزهای تاخیر' },
      { backgroundColor: 'bg-impo_Surface_SurfaceVariant', text: 'روزهای عادی' },
      { backgroundColor: 'bg-impo_Calendar_PMS_Background', text: 'روزهای pms' },
      { backgroundColor: 'bg-impo_Calendar_Period_Background', text: 'روزهای پریود' },
      { backgroundColor: 'bg-impo_Calendar_Fertility_Background', text: 'دوره باروری' },
      { backgroundColor: 'bg-impo_Calendar_Fertility_Ovulation', text: 'روزهای تخمک‌گذاری' },
      {
        backgroundColor: 'bg-impo_Neutral_Background',
        borderColor: 'border-impo_Neutral_OnBackground',
        text: 'روز انتخاب شده',
      },
    );

    setGuideList(list);
  }, [calendarGuideInfo]);

  return (
    <CustomSlider sidePadding={16} className="py-4 mb-4">
      {guideList.map((item, index) => (
        <div className="min-w-fit flex items-center gap-1" key={index}>
          <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
            {item.text}
          </CustomTypography>

          <div
            className={`
                        w-4 
                        h-4 
                        rounded-full 
                        border-[1px] 
                        border-dotted
                        ${item.backgroundColor}
                        ${item.borderColor || 'border-impo_Transparent'}
                      `}
          />
        </div>
      ))}
    </CustomSlider>
  );
};
