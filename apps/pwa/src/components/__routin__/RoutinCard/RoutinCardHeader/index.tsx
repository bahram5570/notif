import PartyingFaceIcon from '@assets/icons/Partying Face.svg';
import SmilingFaceIcon from '@assets/icons/Smiling Face.svg';
import ThinkingFaceIcon from '@assets/icons/Thinking Face.svg';

import useTheme from '@hooks/useTheme';

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
  const { colors } = useTheme();

  const percentage = completeRatio * 100;

  const backgroundHandler = () => {
    if (percentage === 100) {
      return colors.Success_SuccessContainer;
    } else if (percentage > 0 && percentage < 100) {
      return colors.Yellow_100;
    } else {
      return colors.PrimaryWoman_PrimaryContainer;
    }
  };

  const circleContent = () => {
    if (percentage === 100) {
      return {
        icon: <PartyingFaceIcon className="w-4 h-4" />,
        style: {
          backgroundColor: colors.Success_Success,
        },
      };
    } else if (percentage > 0 && percentage < 100) {
      return {
        icon: <SmilingFaceIcon className="w-4 h-4" />,
        style: {
          backgroundColor: colors.Yellow_500,
        },
      };
    } else {
      return {
        icon: <ThinkingFaceIcon className="w-4 h-4" />,
        style: {
          backgroundColor: colors.Pink_400,
        },
      };
    }
  };

  const { icon, style } = circleContent();

  return (
    <div
      style={{ backgroundColor: backgroundHandler() }}
      className="w-full h-14 rounded-t-2xl flex flex-row-reverse items-center px-4 py-3 gap-2  mb-2"
    >
      <div
        className="flex justify-center items-center w-8 h-8 rounded-full aspect-square"
        style={{ backgroundColor: style.backgroundColor, border: `1px solid ${colors.Neutral_Background}` }}
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
