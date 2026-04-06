'use client';

import { useState } from 'react';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { CreateMemoryForm } from '@repo/core/components/partner/CreateMemoryForm';
import { DateHeaderSection } from '@repo/core/components/partner/DateHeaderSection';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';
import { useCalendarDateFormat } from '@repo/core/hooks/useCalendarDateFormat';
import moment from 'moment-jalaali';

import useSubmit from './__hooks__/useSubmit';
import { initialValue } from './constants';
import { InputValueType } from './type';

const CreateMemoryPage = () => {
  const [inputValue, setInputValue] = useState<InputValueType>(initialValue);
  const { createMemoryHandler, isLoading } = useSubmit();
  const gregorianMoment = moment(new Date().toISOString(), 'YYYY-MM-DD');
  const { currentDate } = useCalendarDateFormat({ date: gregorianMoment.format('YYYY-MM-DD') });

  const onChangeHandler = (v: string, name?: string) => {
    if (name) {
      setInputValue({ ...inputValue, [name]: v });
    }
  };

  const onClick = () => {
    if (inputValue.text.trim() !== '' || inputValue.title.trim() !== '') createMemoryHandler(inputValue);
  };

  return (
    <MainPageLayout rightElement="BackButton" rightElementScript="خاطره بازی" leftElement1="Profile" paddingTop={0}>
      <div
        className="flex relative z-0 w-full flex-col  gap-3 pb-6  min-h-[100dvh]   px-3"
        style={{ paddingTop: HEADER_HEIGHT + 20 }}
      >
        <div className="flex items-center w-full justify-center">
          <CustomTypography fontSize="Title_Small" className="text-impo_PrimaryMan_PrimaryMan text-center">
            ایجاد خاطره جدید
          </CustomTypography>
        </div>
        <DateHeaderSection currentDate={`امروز ${currentDate} `} />
        <CreateMemoryForm inputValue={inputValue} onChangeHandler={onChangeHandler} isMan={true} />

        <div className="mt-auto">
          <CustomButton
            className="px-6 py-2 !bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan"
            onClick={onClick}
            isDisable={!inputValue.title}
            isLoading={isLoading}
          >
            <CustomTypography fontSize="Title_Small" className="text-impo_PrimaryMan_OnPrimaryMan">
              ثبت خاطره
            </CustomTypography>
          </CustomButton>
        </div>
      </div>
    </MainPageLayout>
  );
};

export default CreateMemoryPage;
