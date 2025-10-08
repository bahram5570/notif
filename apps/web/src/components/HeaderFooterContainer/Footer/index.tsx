'use client';

import useOperatingSystem from '@hooks/useOperatingSystem';

import DeviceFooter from './DeviceFooter';
import NormalFooter from './NormalFooter';
import { FooterTypes } from './types';

const Footer = ({ hasFooterLink, isArticlePage }: FooterTypes) => {
  const { operatingSystem } = useOperatingSystem();

  const isDeviceMode = operatingSystem === 'ios' || operatingSystem === 'android';

  return (
    <>
      {isDeviceMode ? <DeviceFooter isArticlePage={isArticlePage} hasFooterLink={hasFooterLink} /> : <NormalFooter />}
    </>
  );
};

export default Footer;
