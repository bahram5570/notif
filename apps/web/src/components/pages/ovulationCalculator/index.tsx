import niloMashini from '@assets/images/niloMashini.jpg';

import HeaderFooterContainer from '@components/HeaderFooterContainer';

import ArticleIdAuthor from '../articleId/ArticleIdPageContainer/ArticleIdAuthor';
import OvulationCalculator from '../articleId/ArticleIdPageContainer/ArticleLandingComponents/OvulationCalculator';
import BodyContent from './BodyContent';
import CallToAction from './CallToAction';
import CallToActionSticky from './CallToActionSticky';
import FaqContainer from './FaqContainer';
import HeadingContent from './HeadingContent';
import { FAQS } from './constants';

const OvulationCalculatorComponent = () => {
  return (
    <HeaderFooterContainer>
      <div className="mb-20 mt-32 container w-full px-4">
        <HeadingContent
          title="ابزار آنلاین محاسبه زمان تخمک‌گذاری بعد از پریود"
          subTitle="با استفاده از ابزار آنلاین محاسبه زمان تخمک‌گذاری، زمان‌های طلایی بارداری را بهتر بشناسید. در این بازه‌های حساس
        می‌توانید برای بارداری اقدام یا از آن پیشگیری کنید و چرخۀ خود را بهتر پیش‌بینی کنید."
        />
        <div className="!w-fit flex justify-self-center">
          <OvulationCalculator />
        </div>
        <CallToActionSticky />
        <BodyContent />
        <CallToAction name="ovulation3" />
        <FaqContainer faqList={FAQS} />
        <ArticleIdAuthor authorName="نیلوفر ماشینی" id="698089325e1205fe30669540" authorPic={niloMashini} />
      </div>
    </HeaderFooterContainer>
  );
};
export default OvulationCalculatorComponent;
