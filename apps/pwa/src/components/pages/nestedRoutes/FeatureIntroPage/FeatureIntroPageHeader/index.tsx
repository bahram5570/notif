import CancelIcon from '@assets/icons/cancel.svg';
import ArrowIcon from '@assets/shared/icons/calendarArrow.svg';

import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';

import { FeatureIntroPageHeaderPropsType } from './type';

const FeatureIntroPageHeader = ({ IsLastItem, progress, totalPages }: FeatureIntroPageHeaderPropsType) => {
  const router = useCustomRouter();
  const progressPercent = Math.min(((progress + 1) / totalPages) * 100, 100);

  const cancelHandler = () => {
    router.push('/protected/cycle');
  };

  const backHandler = () => {
    router.back();
  };

  return (
    <div className="flex flex-row items-center px-4 pt-12 gap-2">
      {IsLastItem && (
        <div className="w-10 h-10 flex justify-center" onClick={cancelHandler}>
          <CancelIcon className="w-6 h-auto stroke-impo_Surface_OnSurfaceVariant" />
        </div>
      )}
      {/* progressbar */}
      <div
        className="w-full rounded-full h-1 bg-impo_Neutral_Background"
        style={{
          transform: `rotate(180deg)`,
        }}
      >
        <div
          className=" h-1 rounded-full transition-all duration-300 bg-impo_Pink_500"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      <div className="w-10 h-10 flex justify-center" onClick={backHandler}>
        <ArrowIcon className="w-6 h-auto rotate-180 stroke-impo_Neutral_OnBackground" />
      </div>
    </div>
  );
};

export default FeatureIntroPageHeader;
