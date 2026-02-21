'use client';

import { MAX_WIDTH } from '@constants/app.constants';
import { useSystem } from '@repo/core/hooks/useSystem';

import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

const Header = () => {
  const { breakPoint } = useSystem();

  return (
    <header style={{ maxWidth: MAX_WIDTH }} className="fixed top-0 left-0 right-0 w-full z-30">
      <>{breakPoint.laptop ? <HeaderMobile /> : <HeaderDesktop />}</>
    </header>
  );
};

export default Header;
