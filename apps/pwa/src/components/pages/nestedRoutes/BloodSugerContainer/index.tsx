'use client';

import { useState } from 'react';

import MainPageLayout from '@components/MainPageLayout';
import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';
import Dark_Button from '@components/ui/Dark_Button';

import BloodSugerBtnGenerator from './BloodSugerBtnGenerator';
import BloodSugerHeader from './BloodSugerHeader';
import BloodSugerModal from './BloodSugerModal';
import TestResult from './TestResult/TestResult';
import useSubmit from './__hooks__/useSubmit';
import { BLOOD_SUGER_INPUT_GENERATOR_LIST, initailValue } from './constants';
import { InputValueType } from './type';

const BloodSugerContainer = () => {
  const { isLoading, submitHandler } = useSubmit();
  const [inputValue, setInputValue] = useState<InputValueType>(initailValue);

  const onChangeHandler = (v: string | number | null, name: string) => {
    setInputValue({ ...inputValue, [name]: v });
  };

  const onClick = () => {
    submitHandler({ condition: inputValue.condition, value: inputValue.value });
  };

  return (
    <MainPageLayout rightElement="BackButton" paddingTop={0}>
      <div
        style={{ paddingTop: HEADER_HEIGHT }}
        className="min-h-[100dvh] relative flex flex-col gap-3 bg-impo_Neutral_Surface"
      >
        <BloodSugerHeader />

        <div style={{ paddingTop: HEADER_HEIGHT }} className="px-3">
          <div className="flex flex-col gap-4 ">
            <div className="p-3 w-full flex flex-col gap-2 rounded-xl mt-4 bg-impo_Neutral_Background">
              {BLOOD_SUGER_INPUT_GENERATOR_LIST.map((item, index) => {
                return <BloodSugerBtnGenerator {...item} value={inputValue[item.name]} index={index} key={index} />;
              })}
            </div>

            <TestResult condition={inputValue.condition} value={inputValue.value} />
          </div>

          <BloodSugerModal onChange={onChangeHandler} value={inputValue} />
        </div>

        <div className="flex flex-col justify-center items-center p-4 mt-auto">
          <Dark_Button fontSize="Lable_Large" onClick={onClick} isLoading={isLoading} isDisable={!inputValue.value}>
            ثبت اطلاعات
          </Dark_Button>
        </div>
      </div>
    </MainPageLayout>
  );
};

export default BloodSugerContainer;
