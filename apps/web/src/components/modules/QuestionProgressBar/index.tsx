'use client';

import ArrowBack from '@assets/images/genetic/arrowBack.svg';

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
      <div className="relative w-full h-1 rounded-full overflow-hidden bg-impo_White">
        <div
          className="w-full h-full rounded-full block bg-impo_Pink_500"
          style={{ transform: `translateX(${percent}%)` }}
        />
      </div>
    </div>
  );
};

export default QuestionProgressBar;
