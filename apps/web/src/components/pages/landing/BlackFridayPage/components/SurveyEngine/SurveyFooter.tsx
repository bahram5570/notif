'use client';

import { FC } from 'react';

import CustomButton from '@components/ui/CustomButton';
import Spinner from '@components/ui/Spinner';

type Props = {
  ready: boolean;
  onNext: () => void;
  isLoading?: boolean | undefined;
};

const SurveyFooter: FC<Props> = ({ ready, onNext, isLoading }) => {
  return (
    <div className="flex justify-center items-center mt-8">
      <CustomButton
        varient="fill"
        className="!w-[216px] h-[48px]"
        onClick={onNext}
        isDisable={!ready}
        fontSize="Title_Small"
      >
        {isLoading ? <Spinner className="!border-impo_White" size={18} /> : 'ادامه'}
      </CustomButton>
    </div>
  );
};

export default SurveyFooter;
