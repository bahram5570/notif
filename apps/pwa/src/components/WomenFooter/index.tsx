'use client';

import { memo } from 'react';

import { usePathname } from 'next/navigation';

import WomenFooterContainer from './WomenFooterContainer';
import { FOOTER_PAGES_LIST } from './constants';

const WomenFooter = () => {
  const pathName = usePathname();

  const hasFooter = FOOTER_PAGES_LIST.some(
    (item) => item.url.toLocaleLowerCase() === pathName.toLocaleLowerCase().split('?')[0],
  );

  return <>{hasFooter && <WomenFooterContainer pathName={pathName} />}</>;
};

export default memo(WomenFooter);
