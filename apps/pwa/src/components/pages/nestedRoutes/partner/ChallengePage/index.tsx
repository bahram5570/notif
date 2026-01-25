'use client';

import WomenPageLayout from '@components/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/WomenPageLayout/constants';

import ChallengeBanner from './ChallengeBanner';
import ChallengeHeader from './ChallengeHeader';
import ChallengeQuestion from './ChallengeQuestion';
import useGetFormData from './__hooks__/useGetFormData';
import ChallengeSkeleton from './challengeSkeleton';

const ChallengePage = () => {
  const { data, isLoading } = useGetFormData();

  return (
    <>
      {isLoading && <ChallengeSkeleton />}
      {!isLoading && data && (
        <WomenPageLayout rightElement="BackButton" rightElementScript="چالش روزانه" paddingTop={0}>
          <div
            className="flex relative z-0 flex-col  gap-3 pb-6 min-h-screen px-3"
            style={{ paddingTop: HEADER_HEIGHT + 16 }}
          >
            <ChallengeHeader date={data.date} status={data.status} />
            <ChallengeBanner bannerText={data.bannerText} bannerTitle={data.bannerTitle} />

            <ChallengeQuestion {...data} />
          </div>
        </WomenPageLayout>
      )}
    </>
  );
};

export default ChallengePage;
