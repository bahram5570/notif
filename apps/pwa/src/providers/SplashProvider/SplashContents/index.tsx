import ImpoNameIcon from '@assets/icons/impoNameEnglish.svg';

import CustomImage from '@components/ui/CustomImage';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

import { SplashContentsProps } from './types';

const SplashContents = ({ splashStatus, onComplete }: SplashContentsProps) => {
  const { colors } = useTheme();

  return (
    <div
      style={{ backgroundColor: colors.PrimaryWoman_Primary, maxWidth: MAX_SCREEN_WIDTH }}
      className="fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center mx-auto z-50 overflow-hidden"
    >
      <div className="relative w-full flex flex-col justify-center items-center">
        <CustomImage
          src="/assets/images/heartShallow.webp"
          className="!w-[108%] !h-auto -translate-x-[4%] translate-y-6"
        />

        <ImpoNameIcon className="w-[100px] h-auto" style={{ fill: colors.White }} />
      </div>
    </div>
  );
};

export default SplashContents;
