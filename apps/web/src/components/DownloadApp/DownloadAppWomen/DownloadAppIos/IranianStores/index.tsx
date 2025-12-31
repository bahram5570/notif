'use client';

import { Suspense } from 'react';

import PwaIcon from '@assets/icons/downloads/pwa.svg';

import DownloadAppLinkGenerator from '@components/DownloadApp/DownloadAppLinkGenerator';
import CustomTypography from '@components/ui/CustomTypography';
import { PWA_LINK_WOMEN_URL } from '@constants/links.constants';
import useBreakPoint from '@hooks/useBreakPoint';

import IranianStoresDesktop from './IranianStoresDesktop';
import IranianStoresMobile from './IranianStoresMobile';

const IranianStores = () => {
  const { breakPoint } = useBreakPoint();

  return (
    <>
      <div id="download_pwa">
        <DownloadAppLinkGenerator href={PWA_LINK_WOMEN_URL} id="women-pwa">
          <div className="flex items-center justify-center gap-1">
            <PwaIcon className="w-6 min-w-6 h-auto fill-impo_Surface_OnSurfaceVariant" />

            <CustomTypography fontSize="Lable_Medium" className="!text-impo_Surface_OnSurfaceVariant">
              نسخه وب اپ
            </CustomTypography>
          </div>
        </DownloadAppLinkGenerator>
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

export default IranianStores;
