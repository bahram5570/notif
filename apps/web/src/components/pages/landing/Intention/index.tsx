import LandingArticles from '@components/Articles/LandingArticles';
import DownloadApp from '@components/DownloadApp/DownloadAppWomen';
import FeaturesIntruduction from '@components/FeaturesIntruduction';
import HeaderFooterContainer from '@components/HeaderFooterContainer';
import LandingFaq from '@components/LandingFaq';
import QrCode from '@components/QrCode';
import SingleComment from '@components/SingleComment';

import IntentionHeading from './IntentionHeading';
import { INTENTION_COMMENT, INTENTION_FAQ, INTENTION_FEATURES_INTRODUCTION_LIST } from './constants';

const IntentionPage = () => {
  return (
    <HeaderFooterContainer>
      <div className="w-full relative pb-12 flex flex-col items-center gap-12">
        <QrCode />
        <IntentionHeading />
        <FeaturesIntruduction
          list={INTENTION_FEATURES_INTRODUCTION_LIST}
          mainTitle="با ایمپو شانس بارداری رو به حداکثر برسونید"
        />
        <SingleComment {...INTENTION_COMMENT} />
        <LandingFaq title="سوالات متداول" list={INTENTION_FAQ} />
        <LandingArticles
          showAllArticlesLinkTo="/blogs"
          url="support/article/articles/category/64e9a587bd64be4a71068872/0/10"
          title="تصمیم گرفتی باردار بشی و دنبال منبعی موثق برای اقدام به بارداری می‌گردی؟"
          subTitle="مقالات ایمپو از به‌روزترین و تخصصی‌ترین منابع و توسط متخصصین هر حوزه نوشته می‌شه و بهت کمک می‌کنه تا جواب سوالاتت رو در کوتاه‌ترین زمان پیدا کنی"
        />
        <DownloadApp />
      </div>
    </HeaderFooterContainer>
  );
};

export default IntentionPage;
