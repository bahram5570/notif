import { useState } from 'react';

import Dark_Typography from '@components/ui/Dark_Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import { LottieJson } from '@lib/LottieJson';

import { PageIconsProps } from './types';

const PageIcons = ({ Icon, title, isSelected, url }: PageIconsProps) => {
  const [resetkey, setResetKey] = useState(Math.random());
  const { pageNavigationHandler } = usePageNavigationLoading();

  const navigateHandler = () => {
    setResetKey(Math.random());

    pageNavigationHandler({
      showProgressBar: true,
      id: 'PageIcons',
      linkTo: url,
    });
  };

  return (
    <div className="flex flex-col items-center cursor-pointer" onClick={navigateHandler}>
      <LottieJson
        loop={false}
        key={resetkey}
        autoplay={true}
        animationData={Icon}
        className="w-7 h-auto"
        style={{ opacity: isSelected ? 1 : 0.4 }}
      />

      <Dark_Typography
        fontSize="Body_Small"
        className={`${isSelected ? 'text-impo_Neutral_OnBackground' : 'text-impo_Surface_Outline'}`}
      >
        {title}
      </Dark_Typography>
    </div>
  );
};

export default PageIcons;
