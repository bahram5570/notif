'use client';

import collaborationlogo from '@assets/images/geneticMarketing/collaborationlogo.webp';

import CustomImage from '@components/ui/CustomImage';

import GeneticMarketingLayout from '../GeneticMarketingLayout';
import useTestOnlineResult from '../TestOnlineResultContainer/__hooks__/useTestOnlineResult';
import FooterBox from './FooterBox';
import Section2 from './Section2';

const TestOnlineSolutionsContainer = () => {
  const { data } = useTestOnlineResult();

  if (!data) return null;

  return (
    <GeneticMarketingLayout goBack={false}>
      <div className="relative w-full h-full">
        <Section2 section={data.section2} color={data.color} />
        <FooterBox footer={data.footer} />
        <div className="w-full mx-auto grid gap-y-6 justify-items-center justify-center mt-4 mb-4">
          <CustomImage src={collaborationlogo} alt="collaborationlogo" width={999} height={999} className="w-[112px]" />
        </div>
      </div>
    </GeneticMarketingLayout>
  );
};

export default TestOnlineSolutionsContainer;
