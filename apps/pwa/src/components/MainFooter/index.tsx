'use client';

import { usePathname } from 'next/navigation';

import MainFooterContainer from './MainFooterContainer';
import { FOOTER_PAGES_LIST } from './constants';

const MainFooter = () => {
  const pathName = usePathname().toLowerCase() || '';

  const hasFooter = FOOTER_PAGES_LIST.some((item) => item.url.toLowerCase() === pathName);

  return <>{hasFooter && <MainFooterContainer pathName={pathName} />}</>;
};

export default MainFooter;
