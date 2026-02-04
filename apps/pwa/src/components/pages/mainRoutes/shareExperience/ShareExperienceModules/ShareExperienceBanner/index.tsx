import { useState } from 'react';

import CloseIcon from '@assets/icons/plus.svg';
import { CustomImage } from '@repo/core/components/ui/CustomImage';

const ShareExperienceBanner = ({ bannerMedia }: { bannerMedia: string }) => {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) {
    return null;
  }
  return (
    <div className="px-4 pt-4">
      <div
        onClick={() => setShowBanner(false)}
        className="w-6 h-6 rounded-full flex items-center justify-center absolute z-20 m-2"
      >
        <CloseIcon className="w-4 h-auto rotate-45 stroke-impo_Grey_900 dark:stroke-impo_Grey_50" />
      </div>
      <CustomImage src={bannerMedia} className="rounded-2xl pb-[2px] relative" />
    </div>
  );
};

export default ShareExperienceBanner;
