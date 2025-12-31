import ArrowIcon from '@assets/icons/arrow2.svg';

import { ProgressBarTypes } from './types';

const ProgressBar = ({ onBack, progressPercent, isLoading }: ProgressBarTypes) => {
  return (
    <div className="w-full flex items-center gap-4 pb-10">
      <ArrowIcon
        onClick={onBack}
        className={`w-5 h-auto rotate-90 cursor-pointer ${isLoading ? '!opacity-30' : '!opacity-100'}`}
      />

      <div className="relative w-full h-1 flex rounded-full overflow-hidden bg-impo_Neutral_Surface">
        <div
          className="w-full h-full rounded-full bg-impo_Primary_Primary"
          style={{ transform: `translateX(${100 - progressPercent}%)` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
