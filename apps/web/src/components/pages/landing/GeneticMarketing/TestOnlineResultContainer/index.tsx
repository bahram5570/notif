'use client';

import collaborationlogo from '@assets/images/geneticMarketing/collaborationlogo.webp';

import CustomImage from '@components/ui/CustomImage';

import GeneticMarketingLayout from '../GeneticMarketingLayout';
import HeaderBox from './HeaderBox';
import Section1 from './Section1';
import useTestOnlineResult from './__hooks__/useTestOnlineResult';

const TestOnlineResultContainer = () => {
  const { data } = useTestOnlineResult();

  if (!data) return null;

  return (
    <GeneticMarketingLayout goBack={false}>
      <div className="relative w-full h-full">
        <HeaderBox header={data.header} id={data.id} color={data.color} />
        <Section1 section={data.section1} color={data.color} />
      </div>
      <div className="w-full mx-auto grid gap-y-6 justify-items-center justify-center mt-4">
        <CustomImage src={collaborationlogo} alt="collaborationlogo" width={999} height={999} className="w-[112px]" />
      </div>
    </GeneticMarketingLayout>
  );
};

export default TestOnlineResultContainer;
