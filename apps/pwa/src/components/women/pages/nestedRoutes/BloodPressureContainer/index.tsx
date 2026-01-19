'use client';

import { useState } from 'react';

import Dark_Button from '@components/ui/Dark_Button';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';

import BloodPressureBtn from './BloodPressureBtn';
import BloodPressureHeader from './BloodPressureHeader';
import BloodPressureModal from './BloodPressureModal';
import TestResult from './TestResult/TestResult';
import useSubmit from './__hooks__/useSubmit';
import { initailValue } from './constants';
import { InputValueType } from './type';

const BloodPressureContainer = () => {
  const [inputValue, setInputValue] = useState<InputValueType>(initailValue);
  const { isLoading, submitHandler } = useSubmit();

  const onChangeHandler = (v: InputValueType) => {
    setInputValue(v);
  };

  const onClick = () => {
    submitHandler({ high: inputValue.high, low: inputValue.low });
  };

  return (
    <WomenPageLayout rightElement="BackButton" paddingTop={0}>
      <div
        style={{ paddingTop: HEADER_HEIGHT }}
        className="min-h-[100dvh] relative flex flex-col gap-3 bg-impo_Neutral_Surface"
      >
        <BloodPressureHeader />
        <div style={{ paddingTop: HEADER_HEIGHT + 10 }} className="px-3">
          <div className="flex flex-col gap-4  bg-impo_Neutral_Surface">
            <div className="p-3 w-full divide-y-[1px] flex flex-col gap-2 rounded-xl mt-4 bg-impo_Neutral_Background">
              <BloodPressureBtn value={inputValue} />
            </div>
            <TestResult high={inputValue.high} low={inputValue.low} />
          </div>

          <BloodPressureModal onChange={onChangeHandler} value={inputValue} />
        </div>
        <footer className="mt-auto">
          <div className="flex flex-col justify-center items-center p-4">
            <Dark_Button
              onClick={onClick}
              className="h-10"
              fontSize="Lable_Large"
              isDisable={!inputValue.high && !inputValue.low}
              isLoading={isLoading}
            >
              ثبت اطلاعات
            </Dark_Button>
          </div>
        </footer>
      </div>
    </WomenPageLayout>
  );
};

export default BloodPressureContainer;
