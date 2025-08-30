import ArrowBack from '@assets/images/genetic/arrowBack.svg';

import { COLORS_LIST } from '@theme/colors';

import { QuestionProgressBarTypes } from './types';

const QuestionProgressBar = ({ currentStep, questionListLength }: QuestionProgressBarTypes) => {
  const totalSteps = questionListLength || 0;
  const percent = 100 - ((Number(currentStep) + 1) * 100) / totalSteps;

  return (
    <div className="flex gap-x-2 items-center">
      <ArrowBack />
      <div
        className="relative w-full h-1 rounded-full sm:mt-6 overflow-hidden"
        style={{ backgroundColor: COLORS_LIST.White }}
      >
        <div
          className="w-full h-full rounded-full block"
          style={{ backgroundColor: COLORS_LIST.Primary_Primary, transform: `translateX(${percent}%)` }}
        />
      </div>
    </div>
  );
};

export default QuestionProgressBar;
