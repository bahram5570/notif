'use client';

import { useState } from 'react';

import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { WheelPicker } from '@repo/core/components/ui/WheelPicker';

import ActivationBackBtn from '@components/activation/ActivationBackBtn';
import ActivationHeading from '@components/activation/ActivationHeading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import useSubmit from './__hooks__/useSubmit';

const AddWeightContainer = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const weight = getQueryParams('currentWeight');

  const [currentWeight, setCurrentWeight] = useState<number>(Number(weight) || 20);
  const { isLoading, submitHandler } = useSubmit(currentWeight);

  const generateList = (start: number, end: number, step: number): { value: number; title: string }[] => {
    const list = [];
    for (let value = start; value <= end; value += step) {
      list.push({ value, title: `${value}` });
    }
    return list;
  };

  const weightList = generateList(20, 200, 1);

  return (
    <div className="relative flex flex-col overflow-x-hidden min-h-[100dvh]">
      <ActivationBackBtn />

      <ActivationHeading
        scripts={{
          subtitle: '',
          title: 'در حال حاضر وزنت چقدره؟',
          description: 'برای اینکه بتونیم بهتر کمکت کنیم لازمه بدونیم:',
        }}
      />

      <div className="relative grid grid-cols-1 place-items-center w-full px-4">
        <>
          <span className="absolute left-0 right-0 h-10 bg-impo_Neutral_Surface pointer-events-none rounded-full mx-5">
            <div className="flex justify-center items-center h-full ml-20">
              <CustomTypography fontSize="Title_Medium" className="text-impo_Neutral_OnBackground">
                kg
              </CustomTypography>
            </div>
          </span>

          <div className="flex gap-2 relative">
            <WheelPicker
              list={weightList}
              defaultValue={currentWeight}
              valueHandler={(v) => setCurrentWeight(Number(v))}
            />
          </div>
        </>
      </div>

      <div className="flex mx-auto mt-auto pb-6 w-[204px] min-w-fit">
        <CustomButton
          isLoading={isLoading}
          fontSize="Lable_Large"
          navigationLoadingId="DatesContainer"
          onClick={submitHandler}
        >
          ثبت اطلاعات
        </CustomButton>
      </div>
    </div>
  );
};

export default AddWeightContainer;
