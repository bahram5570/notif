'use client';

import ArrowBack from '@assets/images/geneticMarketing/arrowBack.svg';

import { COLORS_LIST } from '@theme/colors';
import { useRouter } from 'next/navigation';

import { QuestionProgressBarTypes } from './types';

const QuestionProgressBar = ({ currentStep, questionListLength }: QuestionProgressBarTypes) => {
  const totalSteps = questionListLength || 0;
  const percent = 100 - ((Number(currentStep) + 1) * 100) / totalSteps;
  const router = useRouter();

  return (
    <div className="flex gap-x-2 items-center w-full">
      <span onClick={() => router.back()}>
        <ArrowBack />
      </span>
      <div className="relative w-full h-1 rounded-full overflow-hidden" style={{ backgroundColor: COLORS_LIST.White }}>
        <div
          className="w-full h-full rounded-full block"
          style={{ backgroundColor: COLORS_LIST.Primary_Primary, transform: `translateX(${percent}%)` }}
        />
      </div>
    </div>
  );
};

export default QuestionProgressBar;
