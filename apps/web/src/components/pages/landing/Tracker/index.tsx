import LandingArticles from '@components/Articles/LandingArticles';
import Comments from '@components/Comments';
import DownloadApp from '@components/DownloadApp/DownloadAppWomen';
import FeaturesIntruduction from '@components/FeaturesIntruduction';
import HeaderFooterContainer from '@components/HeaderFooterContainer';
import LandingFaq from '@components/LandingFaq';
import QrCode from '@components/QrCode';

import TrackerHeading from './TrackerHeading';
import TrackerHeading2 from './TrackerHeading2';
import TrackerIntroduction from './TrackerIntroduction';
import { TRACKER_COMMENTS_LIST, TRACKER_FAQ, TRACKER_FEATURES_INTRODUCTION_LIST } from './constants';

const TrackerPage = () => {
  return (
    <HeaderFooterContainer>
      <div className="w-full relative pb-12 flex flex-col items-center gap-12">
        <TrackerHeading />
        <TrackerHeading2 />
        <QrCode />
        <FeaturesIntruduction list={TRACKER_FEATURES_INTRODUCTION_LIST} mainTitle="شناخت چرخه، قدم اول آشتی با بدن" />
        <TrackerIntroduction />
        <LandingFaq title="سوالات متداول" list={TRACKER_FAQ} />
        <LandingArticles
          showAllArticlesLinkTo="/blogs"
          url="support/article/articles/category/64e9a587bd64be4a71068873/1/10"
          title="دنبال بهترین و به‌روزترین مقالات برای حل مشکلات چرخه قاعدگیت هستی؟"
          subTitle="مقالات ایمپو از به‌روزترین و تخصصی‌ترین منابع و توسط متخصصین هر حوزه نوشته می‌شه و بهت کمک می‌کنه تا جواب سوالاتت رو در کوتاه‌ترین زمان پیدا کنی"
        />

        <Comments list={TRACKER_COMMENTS_LIST} />
        <DownloadApp />
      </div>
    </HeaderFooterContainer>
  );
};

export default TrackerPage;
