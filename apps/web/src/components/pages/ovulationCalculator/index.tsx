import niloMashini from '@assets/images/niloMashini.jpg';

import HeaderFooterContainer from '@components/HeaderFooterContainer';

import ArticleIdAuthor from '../articleId/ArticleIdPageContainer/ArticleIdAuthor';
import OvulationCalculator from '../articleId/ArticleIdPageContainer/ArticleLandingComponents/OvulationCalculator';
import BodyContent from './BodyContent';
import CallToAction from './CallToAction';
import FaqContainer from './FaqContainer';
import HeadingContent from './HeadingContent';

const OvulationCalculatorComponent = () => {
  return (
    <HeaderFooterContainer>
      <div className="my-36 container w-full">
        <HeadingContent />
        <div className="!w-fit flex justify-self-center">
          <OvulationCalculator />
        </div>
        <CallToAction name="ovulation4" />
        <BodyContent />
        <CallToAction name="ovulation3" />
        <FaqContainer />
        <ArticleIdAuthor authorName="نیلوفر ماشینی" id="698089325e1205fe30669540" authorPic={niloMashini} />
      </div>
    </HeaderFooterContainer>
  );
};
export default OvulationCalculatorComponent;
