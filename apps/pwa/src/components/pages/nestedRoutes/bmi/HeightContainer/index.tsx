'use client';

import { useState } from 'react';

import { CustomButton } from '@repo/core/components/ui/CustomButton';

import ActivationBackBtn from '@components/activation/ActivationBackBtn';
import ActivationHeading from '@components/activation/ActivationHeading';
import WeightHeightModule from '@components/activation/WeightHeightModule';

import useSubmit from './__hooks__/useSubmit';

const HeightContainer = () => {
  const [currentHeight, setCurrentHeight] = useState<number>(100);
  const { isLoading, submitHandler } = useSubmit();

  const valueHandler = (v: string | number) => {
    setCurrentHeight(Number(v));
  };

  const onClick = () => {
    submitHandler(currentHeight);
  };

  return (
    <div className="relative flex flex-col overflow-x-hidden min-h-[100dvh]">
      <ActivationBackBtn />

      <ActivationHeading
        scripts={{
          description: 'برای اینکه بتونیم بهتر کمکت کنیم لازمه بدونیم:',
          subtitle: '',
          title: 'در حال حاضر قدت چقدره؟',
        }}
      />

      <WeightHeightModule type="height" valueHandler={valueHandler} />

      <div className="flex mx-auto mt-auto pb-6 w-[204px] min-w-fit">
        <CustomButton
          onClick={onClick}
          isLoading={isLoading}
          fontSize="Lable_Large"
          navigationLoadingId="DatesContainer"
        >
          ادامه
        </CustomButton>
      </div>
    </div>
  );
};

export default HeightContainer;
