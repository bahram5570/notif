'use client';

import ArticlesIcon from '@assets/icons/deviceFooter/articles.svg';
// import CycleIcon from '@assets/icons/deviceFooter/cycle.svg';
import HomeIcon from '@assets/icons/deviceFooter/home.svg';
import LoginIcon from '@assets/icons/deviceFooter/login.svg';

import { PWA_LINK_WOMEN_URL } from '@constants/links.constants';
import { FOOTER_HEIGHT } from '@repo/core/constants/app.constants';
import { usePathname } from 'next/navigation';

import DownloadSticky from '../DownloadSticky';
// import BannerSupport from '../BannerSupport';
import DeviceFooterLinkGenerator from './DeviceFooterLinkGenerator';
// import FooterBlackFriday from './FooterBlackFriday';
import FooterNavLink from './FooterNavLink';
import { DeviceFooterTypes } from './types';

const DeviceFooter = ({ isArticlePage, hasFooterLink }: DeviceFooterTypes) => {
  const pathname = usePathname();

  return (
    <>
      {/* <FooterBlackFriday /> */}
      {pathname !== '/' && hasFooterLink && <FooterNavLink />}
      {pathname === '/' && <DownloadSticky />}

      <footer
        style={{ height: FOOTER_HEIGHT }}
        className="
        fixed 
                    left-0 
                    right-0 
                    bottom-0 
                    w-full 
                    flex 
                    justify-around 
                    gap-2 
                    px-4 
                    pt-2 
                    border-t-[1px] 
                    border-t-impo_Neutral_Surface 
                    bg-impo_Neutral_Background
                    z-10
                    "
      >
        {/* <BannerSupport /> */}
        <DeviceFooterLinkGenerator
          title="خانه"
          Icon={<HomeIcon className="stroke-impo_Surface_Outline fill-impo_Surface_Outline w-7" />}
          href="/"
          isSelected={pathname === '/'}
          id="navbar-home"
        />

        {/* <DeviceFooterLinkGenerator
          title="چرخه"
          Icon={<CycleIcon className="stroke-impo_Surface_Outline w-7" />}
          href="/cycle"
          isSelected={pathname === '/cycle'}
          id="navbar-cycle"
        /> */}

        <DeviceFooterLinkGenerator
          title="مقالات"
          Icon={<ArticlesIcon className="stroke-impo_Surface_Outline fill-impo_Surface_Outline w-7" />}
          href="/blogs"
          isSelected={!!isArticlePage}
          id="navbar-blogs"
        />

        <DeviceFooterLinkGenerator
          title="ورود"
          Icon={<LoginIcon className="stroke-impo_Surface_Outline fill-impo_Surface_Outline w-7" />}
          href={PWA_LINK_WOMEN_URL}
          isSelected={false}
          id="navbar-login"
        />
      </footer>
    </>
  );
};

export default DeviceFooter;
