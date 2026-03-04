import niloMashini from '@assets/images/niloMashini.jpg';

import HeaderFooterContainer from '@components/HeaderFooterContainer';

import ArticleIdAuthor from '../articleId/ArticleIdPageContainer/ArticleIdAuthor';
import PeriodCalculator from '../articleId/ArticleIdPageContainer/ArticleLandingComponents/PeriodCalculator';
import CallToAction from '../ovulationCalculator/CallToAction';
import FaqContainer from '../ovulationCalculator/FaqContainer';
import HeadingContent from '../ovulationCalculator/HeadingContent';
import BodyContent from './BodyContent';
import CallToActionSticky from './CallToActionSticky';
import { FAQS } from './constants';

const PeriodCalculatorComponent = () => {
  return (
    <HeaderFooterContainer>
      <div className="my-28 container w-full px-4">
        <HeadingContent
          title="محاسبه سیکل قاعدگی آنلاین و پیش‌بینی زمان دقیق پریود"
          subTitle="ابزار محاسبه سیکل قاعدگی آنلاین ایمپو برای آگاهی از زمان دقیق پریود بعدی، برنامه‌ریزی بهتر، باروری سریع‎تر یا
        پیشگیری از بارداری"
        />
        <div className="!w-fit flex justify-self-center">
          <PeriodCalculator />
        </div>
        <CallToActionSticky />
        <BodyContent />
        <CallToAction name="period2" />
        <FaqContainer faqList={FAQS} />
        <ArticleIdAuthor authorName="نیلوفر ماشینی" id="698089325e1205fe30669540" authorPic={niloMashini} />
      </div>
    </HeaderFooterContainer>
  );
};
export default PeriodCalculatorComponent;
