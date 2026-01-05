import PartyingFaceIcon from '@assets/icons/Partying Face.svg';
import SmilingFaceIcon from '@assets/icons/Smiling Face.svg';
import ThinkingFaceIcon from '@assets/icons/Thinking Face.svg';

import RoutinBookmarked from './RoutinBookmarked';
import RoutinProgressBar from './RoutinProgressBar';
import { RoutinCardHeaderPropsType } from './type';

const RoutinCardHeader = ({
  completeRatio,
  completeTitle,
  isBookmarked,
  programId,
  showBookmark = false,
}: RoutinCardHeaderPropsType) => {
  const percentage = completeRatio * 100;

  const backgroundHandler = () => {
    if (percentage === 100) {
      return 'bg-impo_Success_SuccessContainer dark:bg-impo_Success_OnSuccessContainer';
    } else if (percentage > 0 && percentage < 100) {
      return 'bg-impo_Yellow_100 dark:bg-impo_Yellow_800';
    } else {
      return 'bg-impo_Primary_Primary dark:bg-impo_Pink_900';
    }
  };

  const circleContent = () => {
    if (percentage === 100) {
      return {
        icon: <PartyingFaceIcon className="w-4 h-4  " />,
        style: {
          backgroundColor: 'bg-impo_Success_Success',
        },
      };
    } else if (percentage > 0 && percentage < 100) {
      return {
        icon: <SmilingFaceIcon className="w-4 h-4" />,
        style: {
          backgroundColor: 'bg-impo_Yellow_500',
        },
      };
    } else {
      return {
        icon: <ThinkingFaceIcon className="w-4 h-4" />,
        style: {
          backgroundColor: 'bg-impo_Pink_400',
        },
      };
    }
  };

  const { icon, style } = circleContent();

  return (
    <div
      className={`w-full h-14 rounded-t-2xl flex flex-row-reverse items-center px-4 py-3 gap-2   mb-2 ${backgroundHandler()}`}
    >
      <div
        className={`flex justify-center items-center w-8 h-8 rounded-full aspect-square border border-impo_Neutral_Background dark:border-impo_White ${style.backgroundColor}`}
      >
        {icon}
      </div>

      <RoutinProgressBar completeRatio={completeRatio} completeTitle={completeTitle} />
      {showBookmark && (
        <div className="pointer-events-none w-12 h-12 flex justify-center items-center">
          <RoutinBookmarked isBookmarked={isBookmarked} programId={programId} />
        </div>
      )}
    </div>
  );
};

export default RoutinCardHeader;
