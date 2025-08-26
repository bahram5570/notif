import CustomImage from '@components/ui/CustomImage';
import useTheme from '@hooks/useTheme';

import RoutinBookmarked from './RoutinBookmarked';
import RoutinProgressBar from './RoutinProgressBar';
import { RoutinCardHeaderPropsType } from './type';

const RoutinCardHeader = ({
  completeRatio,
  completeTitle,
  isBookmarked,
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
      <CustomImage src="/assets/images/test.webp" />
      <RoutinProgressBar completeRatio={completeRatio} completeTitle={completeTitle} />
      {showBookmark && <RoutinBookmarked isBookmarked={isBookmarked} />}
    </div>
  );
};

export default RoutinCardHeader;
