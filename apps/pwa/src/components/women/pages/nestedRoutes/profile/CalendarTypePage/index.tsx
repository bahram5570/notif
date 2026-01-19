'use client';

import Dark_Button from '@components/ui/Dark_Button';
import Dark_RadioButton from '@components/ui/Dark_RadioButton';
import Dark_Typography from '@components/ui/Dark_Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';

import useCalendarTypeSelect from './__hooks__/useCalendarTypeSelect';
import useCalendarTypeSubmit from './__hooks__/useCalendarTypeSubmit';
import { CHANGE_CALENDAR_TYPE_LIST } from './constants';

const CalendarTypePage = () => {
  const { selectedType, selectedTypeHandler, isDisable } = useCalendarTypeSelect();

  const { submitHandler, isLoading } = useCalendarTypeSubmit(selectedType);

  return (
    <WomenPageLayout
      paddingBottom={24}
      rightElement="BackButton"
      className="px-4 bg-impo_Neutral_Surface"
      rightElementScript="نوع نمایش تقویم"
    >
      <div className="w-full mt-5 p-4 rounded-lg bg-impo_Neutral_Background" style={{ direction: 'rtl' }}>
        <Dark_Typography fontSize="Body_Small" className="pb-4 text-impo_Surface_InverseSurface">
          نوع تقویم خود را انتخاب کنید
        </Dark_Typography>

        {CHANGE_CALENDAR_TYPE_LIST.map((item, index) => {
          const isSelected = item.value === selectedType;

          return (
            <div
              key={index}
              onClick={() => selectedTypeHandler(item.value)}
              className={`w-full h-12 flex items-center gap-2 border-t-[1px] `}
              // ${borderTopColor: index > 0 ?'border-t-impo_Neutral_Surface":"border-t-impo_Transparent'}
            >
              <Dark_RadioButton isChecked={isSelected} />

              <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnSurface">
                {item.text}
              </Dark_Typography>
            </div>
          );
        })}
      </div>

      <Dark_Button
        isDisable={isDisable}
        isLoading={isLoading}
        onClick={submitHandler}
        className="!w-[204px] mx-auto mt-auto"
        fontSize="Lable_Large"
      >
        ویرایش
      </Dark_Button>
    </WomenPageLayout>
  );
};

export default CalendarTypePage;
