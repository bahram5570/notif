'use client';

import ImpoIcon from '@assets/icons/impoName.svg';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuIcon from '@mui/icons-material/Menu';

import CustomLink from '@components/ui/CustomLink';

import HeaderTheme from '../HeaderTheme';
import HeaderMobileLInks from './HeaderMobileLInks';
import useIsOpen from './__hooks__/useIsOpen';
import { HEADER_MOBILE_HEIGHT } from './constants';

const HeaderMobile = () => {
  const { isOpen, isOpenHandler } = useIsOpen();

  return (
    <>
      <div
        style={{ height: HEADER_MOBILE_HEIGHT }}
        className="w-full pl-4 pr-6 flex items-center justify-between border-b-[1px] border-b-impo_Surface_SurfaceVariant bg-impo_OnBlack"
      >
        <CustomLink href="/">
          <ImpoIcon className="w-14 h-auto fill-impo_Pink_500" />
        </CustomLink>

        <div className="flex items-center gap-2">
          <HeaderTheme />

          <div className="w-12 h-12 flex items-center justify-center" onClick={() => isOpenHandler(!isOpen)}>
            {!isOpen && <MenuIcon className="w-8 h-auto !fill-impo_Neutral_OnBackground" />}
            {isOpen && <CloseRoundedIcon className="w-5 h-auto !fill-impo_Neutral_OnBackground" />}
          </div>
        </div>
      </div>

      <HeaderMobileLInks isOpen={isOpen} isOpenHandler={isOpenHandler} />
    </>
  );
};

export default HeaderMobile;
