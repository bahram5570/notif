import { PREGNANCY_TEST_ONLINE_QUESTION_LIST } from '../constants';
import { TestOnlineProgressBarTypes } from './types';

const TestOnlineProgressBar = ({ currentStep }: TestOnlineProgressBarTypes) => {
  const totalSteps = Object.entries(PREGNANCY_TEST_ONLINE_QUESTION_LIST).length;
  const percent = 100 - ((Number(currentStep) + 1) * 100) / totalSteps;

  return (
    <div className="relative w-full h-1 rounded-full mb-10 sm:mt-6 bg-impo_White overflow-hidden">
      <div
        style={{ transform: `translateX(${percent}%)` }}
        className="w-full h-full rounded-full block bg-impo_Pink_500"
      />
    </div>
  );
};

export default TestOnlineProgressBar;
