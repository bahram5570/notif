import { useState } from 'react';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import styles from './styles.module.css';

import { MainFooterLinksProps } from './types';

const MainFooterLinks = ({ icons, title, isSelected, onSelect }: MainFooterLinksProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    onSelect();
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 800);
  };

  return (
    <div
      className={`flex flex-col items-center cursor-pointer ${isClicked && styles.isClicked}`}
      onClick={clickHandler}
    >
      <>
        {<icons.Light className={`w-7 h-auto block dark:hidden ${isSelected ? 'opacity-100' : 'opacity-40'}`} />}
        {<icons.Dark className={`w-7 h-auto hidden dark:block ${isSelected ? 'opacity-100' : 'opacity-40'}`} />}
      </>

      <CustomTypography
        fontSize="Body_Small"
        className={`${isSelected ? 'text-impo_Neutral_OnBackground opacity-100' : 'text-impo_Neutral_OnBackground opacity-40'}`}
      >
        {title}
      </CustomTypography>
    </div>
  );
};

export default MainFooterLinks;
