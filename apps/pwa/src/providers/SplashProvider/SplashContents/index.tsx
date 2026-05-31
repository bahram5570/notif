import ImpoNameIcon from '@assets/icons/impoNameEnglish.svg';
import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';

import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';

import SplashContentsMessages from './SplashContentsMessages';
import SplashContentsProgress from './SplashContentsProgress';
import useSplashPageObserver from './__hooks__/useSplashPageObserver';
import { SplashContentsProps } from './types';

const SplashContents = ({ splashStatus, splashStatushHandler }: SplashContentsProps) => {
  useSplashPageObserver({ splashStatushHandler });

  return (
    <div
      style={{ maxWidth: MAX_SCREEN_WIDTH, direction: 'rtl' }}
      className="fixed top-0 left-0 right-0 h-[100vh] mx-auto bg-impo_Primary_Primary dark:bg-impo_Neutral_Surface z-[100] overflow-hidden"
    >
      <div className="relative h-full w-full flex flex-col items-center justify-center">
        <div className="absolute top-5 -left-5 w-full aspect-square">
          <CustomImage_NEW
            fill={true}
            hasImageLoading={false}
            src="/assets/images/heartShallow.webp"
            className="absolute top-5 -left-5 object-cover"
          />
        </div>

        <ImpoNameIcon className="w-[100px] h-auto fill-impo_White" />

        <div className="absolute left-0 right-0 bottom-0 w-full h-[35vh] px-4 flex flex-col gap-4">
          <SplashContentsProgress splashStatushHandler={splashStatushHandler} splashStatus={splashStatus} />
          <SplashContentsMessages />
        </div>
      </div>
    </div>
  );
};

export default SplashContents;
