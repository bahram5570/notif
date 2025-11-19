'use client';

import { FC } from 'react';

import CustomButton from '@components/ui/CustomButton';

type Props = {
  ready: boolean;
  onNext: () => void;
};

const SurveyFooter: FC<Props> = ({ ready, onNext }) => {
  return (
    <div className="flex justify-center items-center mt-8">
      <CustomButton
        varient="fill"
        className="!w-[216px] h-[48px]"
        onClick={onNext}
        isDisable={!ready}
        fontSize="Title_Small"
      >
        ادامه
      </CustomButton>
    </div>
  );
};

export default SurveyFooter;
