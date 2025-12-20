'use client';

import FooterBox from './FooterBox';
import HeaderBox from './HeaderBox';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import TestOnlineResultWrapper from './TestOnlineResultWrapper';
import useTestOnlineResult from './__hooks__/useTestOnlineResult';

const TestOnlineResultContainer = () => {
  const { data } = useTestOnlineResult();

  if (!data) return null;

  return (
    <TestOnlineResultWrapper>
      <div className="relative w-full h-full pt-28 lg:w-10/12 lg:mx-auto lg:pt-80 ">
        <HeaderBox header={data.header} id={data.id} />
        <Section1 section={data.section1} id={data.id} />
        <Section2 section={data.section2} />
        <Section3 section={data.section3} id={data.id} />
        <FooterBox footer={data.footer} />
      </div>
    </TestOnlineResultWrapper>
  );
};

export default TestOnlineResultContainer;
