import { useMemo } from 'react';

import StarIcon from '@assets/icons/star2.svg';

import Typography from '@components/ui/Typography';

import { SPLASH_MESSAGES_LIST } from './constants';

const SplashContentsMessages = () => {
  const message = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * SPLASH_MESSAGES_LIST.length);
    const result = SPLASH_MESSAGES_LIST?.[randomIndex] || '';
    return result;
  }, []);

  return (
    <div className="w-full flex items-center gap-3">
      <div className="relative w-8 h-8">
        <StarIcon className="w-[20px] h-auto absolute top-0 left-0" style={{ fill: '#FFEF99' }} />
        <StarIcon className="w-[14px] h-auto absolute bottom-0 right-0 opacity-50" style={{ fill: '#FFEF99' }} />
      </div>

      <Typography scale="Title" size="Small" color="Neutral_Background">
        {message}
      </Typography>
    </div>
  );
};

export default SplashContentsMessages;
