import ArrowIcon from '@assets/icons/calendarArrow.svg';
import CancelIcon from '@assets/icons/cancel.svg';

import useTheme from '@hooks/useTheme';
import { useRouter } from 'next/navigation';

import { FeatureIntroPageHeaderPropsType } from './type';

const FeatureIntroPageHeader = ({ IsLastItem, progress, totalPages }: FeatureIntroPageHeaderPropsType) => {
  const { colors } = useTheme();
  const router = useRouter();
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
          <CancelIcon className="w-6 h-auto" style={{ stroke: colors.Surface_OnSurfaceVariant }} />
        </div>
      )}
      {/* progressbar */}
      <div
        className="w-full rounded-full h-1"
        style={{
          backgroundColor: colors.Neutral_Background,
          transform: `rotate(180deg)`,
        }}
      >
        <div
          className=" h-1 rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%`, backgroundColor: colors.Pink_500 }}
        ></div>
      </div>

      <div className="w-10 h-10 flex justify-center" onClick={backHandler}>
        <ArrowIcon className="w-6 h-auto rotate-180" style={{ stroke: colors.Neutral_OnBackground }} />
      </div>
    </div>
  );
};

export default FeatureIntroPageHeader;
