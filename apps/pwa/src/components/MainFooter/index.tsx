'use client';

import { memo } from 'react';

import { usePathname } from 'next/navigation';

import MainFooterContainer from './MainFooterContainer';
import { FOOTER_PAGES_LIST } from './constants';

const MainFooter = () => {
  const pathName = usePathname() || '';

  const hasFooter = FOOTER_PAGES_LIST.some(
    (item) => item.url.toLocaleLowerCase() === pathName.toLocaleLowerCase().split('?')[0],
  );

  return <>{hasFooter && <MainFooterContainer pathName={pathName} />}</>;
};

export default memo(MainFooter);
