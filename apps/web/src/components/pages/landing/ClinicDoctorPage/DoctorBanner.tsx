'use client';

import { useEffect, useState } from 'react';

import { ctaBannerService } from '@services/ctaBannerServices';

import CtaBanner from '@components/CtaBanner';
import { CraBannerItemTypes } from '@components/CtaBanner/types';

const DoctorBanner = ({ bannerId }: { bannerId: string | undefined }) => {
  const [banner, setBanner] = useState<CraBannerItemTypes | undefined>();

  const getCtaBanner = async () => {
    const { ctaData } = await ctaBannerService(bannerId || '');
    setBanner(ctaData);
  };

  useEffect(() => {
    getCtaBanner();
  }, []);

  return <div className="px-4 mb-10">{banner && <CtaBanner {...banner} />}</div>;
};

export default DoctorBanner;
