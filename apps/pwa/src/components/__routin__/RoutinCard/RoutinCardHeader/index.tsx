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

  const backgroundHandler = () => {
    if (completeRatio === 100) {
      return colors.Success_SuccessContainer;
    } else if (completeRatio > 0 && completeRatio < 100) {
      return colors.Yellow_100;
    } else {
      return colors.PrimaryWoman_PrimaryContainer;
    }
  };

  return (
    <div
      style={{ backgroundColor: backgroundHandler() }}
      className="w-full h-14 rounded-t-2xl flex flex-row-reverse items-center px-4 py-3 gap-2  mb-2"
    >
      <div
        className="flex justify-center items-center w-8 h-8 rounded-full"
        style={{ backgroundColor: colors.Pink_400 }}
      >
        <PartyingFaceIcon />
      </div>

      {/* <div className="relative w-6 h-6 bg-gray-200">
        <CustomImage src="/assets/images/1.webp" className="w-full h-full object-cover" />
      </div> */}
      {/* <CustomImage src="/assets/images/test.webp" /> */}

      <RoutinProgressBar completeRatio={completeRatio} completeTitle={completeTitle} />
      {showBookmark && <RoutinBookmarked isBookmarked={isBookmarked} programId={programId} />}
    </div>
  );
};

export default RoutinCardHeader;
