import { memo } from 'react';

import StarIcon from '@assets/icons/star2.svg';

import Dark_Typography from '@components/ui/Dark_Typography';

import { SPLASH_MESSAGES_LIST } from './constants';

const SplashContentsMessages = () => {
  const randomIndex = Math.floor(Math.random() * SPLASH_MESSAGES_LIST.length);
  const message = SPLASH_MESSAGES_LIST?.[randomIndex] || '';

  return (
    <div className="w-full flex items-center gap-3">
      <div className="relative w-8 h-8">
        <StarIcon className="w-[20px] h-auto absolute top-0 left-0 fill-impo_Yellow" />
        <StarIcon className="w-[14px] h-auto absolute bottom-0 right-0 fill-impo_Yellow opacity-50" />
      </div>

      <Dark_Typography fontSize="Body_Large" className="text-impo_White">
        {message}
      </Dark_Typography>
    </div>
  );
};

export default memo(SplashContentsMessages);
