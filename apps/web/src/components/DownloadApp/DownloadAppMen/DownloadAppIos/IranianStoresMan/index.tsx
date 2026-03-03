'use client';

import { Suspense } from 'react';

import PwaIcon from '@assets/icons/downloads/pwa.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomLink from '@components/ui/CustomLink';
import { PWA_LINK_MEN_URL } from '@constants/links.constants';
import { useSystem } from '@repo/core/hooks/useSystem';

import IranianStoresDesktop from './IranianStoresDesktop';
import IranianStoresMobile from './IranianStoresMobile';

const IranianStoresMan = () => {
  const { breakPoint } = useSystem();
  const pwaId = 'men-pwa';

  return (
    <>
      <div id="download_pwa_men">
        <CustomLink
          id={pwaId}
          target="_blank"
          href={PWA_LINK_MEN_URL}
          aria-label="DownloadAppAndroidMen"
          className="
                        rounded-full 
                        w-full 
                        h-12 
                        lg:h-[60px] 
                        mx-auto 
                        flex 
                        items-center 
                        justify-center 
                        gap-2 
                        relative 
                        z-10 
                        bg-impo_White dark:bg-impo_Surface_SurfaceVariant
                        border-[1px]
                        border-impo_Surface_OutlineVariant
                      "
        >
          <PwaIcon className="w-6 fill-impo_Surface_OnSurfaceVariant" />

          <CustomTypography fontSize="Title_Small" className="!text-impo_Surface_OnSurfaceVariant">
            نسخه وب اپ
          </CustomTypography>
        </CustomLink>
      </div>

      {breakPoint.tablet && (
        <Suspense>
          <IranianStoresMobile />
        </Suspense>
      )}

      {!breakPoint.tablet && <IranianStoresDesktop />}
    </>
  );
};

export default IranianStoresMan;
