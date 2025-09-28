import ImpoNameIcon from '@assets/icons/impoNameEnglish.svg';

import CustomImage from '@components/ui/CustomImage';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

import SplashContentsMessages from './SplashContentsMessages';
import SplashContentsProgress from './SplashContentsProgress';
import useSplashPageObserver from './__hooks__/useSplashPageObserver';
import { SplashContentsProps } from './types';

const SplashContents = ({ splashStatus, splashStatushHandler }: SplashContentsProps) => {
  const { colors } = useTheme();
  useSplashPageObserver({ splashStatushHandler });

  return (
    <div
      style={{ backgroundColor: colors.PrimaryWoman_Primary, maxWidth: MAX_SCREEN_WIDTH, direction: 'rtl' }}
      className="fixed top-0 left-0 right-0 h-[100vh] mx-auto z-[100] overflow-hidden"
    >
      <div className="relative h-full w-full flex flex-col items-center justify-center">
        <CustomImage
          src="/assets/images/heartShallow.webp"
          className="absolute top-5 -left-5 !w-[100%] aspect-square"
        />
        <ImpoNameIcon className="w-[100px] h-auto" style={{ fill: colors.White }} />

        <div className="absolute left-0 right-0 bottom-0 w-full h-[35vh] px-4 flex flex-col gap-4">
          <SplashContentsProgress splashStatushHandler={splashStatushHandler} splashStatus={splashStatus} />
          <SplashContentsMessages />
        </div>
      </div>
    </div>
  );
};

export default SplashContents;
