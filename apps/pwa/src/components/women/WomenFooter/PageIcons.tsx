import { useState } from 'react';

import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import { LottieJson } from '@lib/LottieJson';

import { PageIconsProps } from './types';

const PageIcons = ({ Icon, title, isSelected, url }: PageIconsProps) => {
  const { pageNavigationHandler } = usePageNavigationLoading();
  const [resetkey, setResetKey] = useState(Math.random());

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

      <Typography scale="Body" size="Small" color={isSelected ? 'Neutral_OnBackground' : 'Surface_Outline'}>
        {title}
      </Typography>
    </div>
  );
};

export default PageIcons;
