'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import RadioButton from '@components/ui/RadioButton';

import useCalendarTypeSelect from './__hooks__/useCalendarTypeSelect';
import useCalendarTypeSubmit from './__hooks__/useCalendarTypeSubmit';
import { CHANGE_CALENDAR_TYPE_LIST } from './constants';

const CalendarTypePage = () => {
  const { selectedType, selectedTypeHandler, isDisable } = useCalendarTypeSelect();

  const { submitHandler, isLoading } = useCalendarTypeSubmit(selectedType);

  return (
    <MainPageLayout
      paddingBottom={24}
      rightElement="BackButton"
      className="px-4 bg-impo_Neutral_Surface"
      rightElementScript="نوع نمایش تقویم"
    >
      <div className="w-full mt-5 p-4 rounded-lg bg-impo_Neutral_Background" style={{ direction: 'rtl' }}>
        <CustomTypography fontSize="Body_Small" className="pb-4 text-impo_Surface_InverseSurface">
          نوع تقویم خود را انتخاب کنید
        </CustomTypography>

        {CHANGE_CALENDAR_TYPE_LIST.map((item, index) => {
          const isSelected = item.value === selectedType;

          return (
            <div
              key={index}
              onClick={() => selectedTypeHandler(item.value)}
              className={`w-full h-12 flex items-center gap-2 border-t-[1px] ${index > 0 ? 'border-t-impo_Neutral_Surface' : 'border-t-impo_Transparent'}`}
            >
              <RadioButton isChecked={isSelected} />

              <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnSurface">
                {item.text}
              </CustomTypography>
            </div>
          );
        })}
      </div>

      <CustomButton
        isDisable={isDisable}
        isLoading={isLoading}
        onClick={submitHandler}
        className="!w-[204px] mx-auto mt-auto"
        fontSize="Lable_Large"
      >
        ویرایش
      </CustomButton>
    </MainPageLayout>
  );
};

export default CalendarTypePage;
