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
      className="fixed top-0 left-0 right-0 h-[100vh] flex flex-col items-center mx-auto z-[100] overflow-hidden"
    >
      <div className="relative w-full flex flex-col justify-center items-center pt-4">
        <CustomImage src="/assets/images/heartShallow.webp" className="!w-full aspect-square -translate-x-[4%]" />

        <ImpoNameIcon className="w-[100px] h-auto -translate-y-12" style={{ fill: colors.White }} />
      </div>

      <div className="w-full pt-4 px-4 flex flex-col gap-4">
        <SplashContentsProgress splashStatushHandler={splashStatushHandler} splashStatus={splashStatus} />
        <SplashContentsMessages />
      </div>
    </div>
  );
};

export default SplashContents;
