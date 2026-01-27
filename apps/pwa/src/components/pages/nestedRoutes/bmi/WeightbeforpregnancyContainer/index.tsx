'use client';

import { useState } from 'react';

import ActivationBackBtn from '@components/activation/ActivationBackBtn';
import ActivationHeading from '@components/activation/ActivationHeading';
import WeightHeightModule from '@components/activation/WeightHeightModule';
import Dark_Button from '@components/ui/Dark_Button';

import useSubmit from './__hooks__/useSubmit';

const WeightbeforpregnancyContainer = () => {
  const [currentWeight, setCurrentWeight] = useState<number>(20);
  const { isLoading, submitHandler } = useSubmit();

  const valueHandler = (v: string | number) => {
    setCurrentWeight(Number(v));
  };

  const onClick = () => {
    submitHandler(currentWeight);
  };

  return (
    <div className="relative flex flex-col overflow-x-hidden min-h-[100dvh]">
      <ActivationBackBtn />

      <ActivationHeading
        scripts={{
          subtitle: '',
          title: 'وزنت در ابتدای بارداری چقدر بوده ؟',
          description: 'برای اینکه بتونیم بهتر کمکت کنیم لازمه بدونیم:',
        }}
      />

      <WeightHeightModule type="weight" valueHandler={valueHandler} />

      <div className="flex mx-auto mt-auto pb-6 w-[204px] min-w-fit">
        <Dark_Button
          onClick={onClick}
          isLoading={isLoading}
          fontSize="Lable_Large"
          navigationLoadingId="DatesContainer"
        >
          ادامه
        </Dark_Button>
      </div>
    </div>
  );
};

export default WeightbeforpregnancyContainer;
