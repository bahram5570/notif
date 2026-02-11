import ArrowIcon from '@assets/shared/icons/calendarArrow.svg';

import { useRouter } from 'next/navigation';

import useNameSelectorActivationSteps from '../../__hooks__/useNameSelectorActivationSteps';

const NameSelectorActivationProgressBar = () => {
  const router = useRouter();
  const { stepInfo } = useNameSelectorActivationSteps();

  const progressPercent = stepInfo.progressPercent;

  return (
    <>
      {progressPercent !== null && (
        <div className="w-full flex items-center">
          <div className="w-[40px] h-[30px] pl-[12px] cursor-pointer" onClick={() => router.back()}>
            <ArrowIcon className="w-full h-full -rotate-180 ml-auto stroke-impo_Neutral_OnBackground" />
          </div>

          <div className="relative w-full h-1 rounded-full overflow-hidden bg-impo_White">
            <div
              className="w-full h-full rounded-full bg-impo_Primary_Primary"
              style={{ transform: `translateX(${100 - progressPercent}%)` }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default NameSelectorActivationProgressBar;
