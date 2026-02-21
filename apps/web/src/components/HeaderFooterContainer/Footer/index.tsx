'use client';

import { useSystem } from '@repo/core/hooks/useSystem';

import DeviceFooter from './DeviceFooter';
import NormalFooter from './NormalFooter';
import { FooterTypes } from './types';

const Footer = ({ hasFooterLink, isArticlePage }: FooterTypes) => {
  const { operatingSystem } = useSystem();

  const isDeviceMode = operatingSystem === 'ios' || operatingSystem === 'android';

  return (
    <>
      {isDeviceMode ? <DeviceFooter isArticlePage={isArticlePage} hasFooterLink={hasFooterLink} /> : <NormalFooter />}
    </>
  );
};

export default Footer;
