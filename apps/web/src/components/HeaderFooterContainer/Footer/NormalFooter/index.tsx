'use client';

import { FOOTER_HEIGHT } from '@constants/app.constants';
import useBreakPoint from '@hooks/useBreakPoint';

// import BannerSupport from '../BannerSupport';
import FooterInfo from './FooterInfo';
import FooterPages from './FooterPages';
import FooterSocials from './FooterSocials';
import FooterTrust from './FooterTrust';

const NormalFooter = () => {
  const { breakPoint } = useBreakPoint();

  return (
    <footer className="w-full md:w-11/12 lg:w-10/12 px-4 md:px-0 mt-auto mx-auto" style={{ height: FOOTER_HEIGHT }}>
      {/* <BannerSupport /> */}
      <div
        className={`
                    w-full 
                    grid 
                    grid-cols-1 
                    md:grid-cols-12 
                    gap-14 
                    md:gap-10 
                    md:rounded-3xl 
                    md:p-9
                    ${breakPoint.tablet ? 'bg-impo_Transparent' : 'bg-impo_Neutral_Surface'}
                  `}
      >
        <FooterInfo />
        <FooterPages />
        <FooterTrust />
      </div>

      <FooterSocials />
    </footer>
  );
};

export default NormalFooter;
