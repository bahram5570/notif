'use client';

import FooterInfo from '@components/HeaderFooterContainer/Footer/NormalFooter/FooterInfo';
import FooterPages from '@components/HeaderFooterContainer/Footer/NormalFooter/FooterPages';
import FooterSocials from '@components/HeaderFooterContainer/Footer/NormalFooter/FooterSocials';
import FooterTrust from '@components/HeaderFooterContainer/Footer/NormalFooter/FooterTrust';
import { useSystem } from '@repo/core/hooks/useSystem';

const HomeFooter = () => {
  const { operatingSystem } = useSystem();

  if (operatingSystem === 'windows') {
    return <></>;
  }

  return (
    <div className="w-full px-4 mt-auto mb-10">
      <div className="w-full grid grid-cols-1 gap-14">
        <FooterInfo />
        <FooterPages />
        <FooterTrust />
      </div>

      <FooterSocials />
    </div>
  );
};

export default HomeFooter;
