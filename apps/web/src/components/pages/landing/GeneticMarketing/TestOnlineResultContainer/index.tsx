'use client';

import GeneticMarketingLayout from '../GeneticMarketingLayout';
import FooterBox from './FooterBox';
import HeaderBox from './HeaderBox';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import useTestOnlineResult from './__hooks__/useTestOnlineResult';

const TestOnlineResultContainer = () => {
  const { data } = useTestOnlineResult();

  if (!data) return null;

  return (
    <GeneticMarketingLayout goBack={false}>
      <div className="relative w-full h-full">
        <HeaderBox header={data.header} id={data.id} color={data.color} />
        <Section1 section={data.section1} id={data.id} color={data.color} />
        <Section2 section={data.section2} color={data.color} />
        <Section3 section={data.section3} id={data.id} color={data.color} />
        <FooterBox footer={data.footer} />
      </div>
    </GeneticMarketingLayout>
  );
};

export default TestOnlineResultContainer;
