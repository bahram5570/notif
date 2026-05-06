import DownloadApp from '@components/DownloadApp/DownloadAppWomen';
import FeaturesIntruduction from '@components/FeaturesIntruduction';
import HeaderFooterContainer from '@components/HeaderFooterContainer';
import LandingFaq from '@components/LandingFaq';
import QrCode from '@components/QrCode';

import SympathyBanner from './SympathyBanner';
import SympathyComment from './SympathyComment';
import SympathyHeading from './SympathyHeading';
import SympathyHeading2 from './SympathyHeading2';
import { SYMPATHY_FAQ, SYMPATHY_FEATURES_INTRODUCTION_LIST } from './constants';

const SympathyPage = () => {
  return (
    <HeaderFooterContainer>
      <div className="w-full relative pb-12 flex flex-col items-center gap-12">
        <QrCode />
        <SympathyHeading />
        <SympathyHeading2 />
        <SympathyComment />
        <FeaturesIntruduction list={SYMPATHY_FEATURES_INTRODUCTION_LIST} mainTitle="همدلی برای همراهی عاشقانه" />
        <SympathyBanner />
        <LandingFaq title="سوالات متداول" list={SYMPATHY_FAQ} />
        <DownloadApp />
      </div>
    </HeaderFooterContainer>
  );
};

export default SympathyPage;
