'use client';

import WomenPageLayout from '@components/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/WomenPageLayout/constants';
import Dark_Typography from '@components/ui/Dark_Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useAnalytics from '@hooks/useAnalytics';

import BannerSection from './BannerSection';
import PregnancyCheckupContainerSkeleton from './PregnancyCheckupContainerSkeleton';
import PregnancyCheckupTost from './PregnancyCheckupTost';
import SegmentGenerator from './SegmentGenerator';
import useGetData from './__hooks__/useGetData';

const PregnancyCheckupContainer = () => {
  useAnalytics({ mountTimer_eventName: 'PregnancyCheckupSpentTime' });
  const { data, isLoading } = useGetData();
  const hasData = data && data.segments.length > 0;

  return (
    <WomenPageLayout
      rightElement="PregnancyCheckupBackButton"
      rightElementScript="آزمایش و مراقبت‌های بارداری"
      paddingTop={0}
      className="bg-impo_Neutral_Surface"
    >
      <PregnancyCheckupTost />
      {isLoading && <PregnancyCheckupContainerSkeleton />}
      {!isLoading && hasData && (
        <div
          style={{
            paddingTop: HEADER_HEIGHT,

            paddingBottom: HEADER_HEIGHT + 16,
          }}
          className="min-h-[100dvh] relative flex flex-col gap-3 bg-impo_Neutral_Surface"
        >
          <div
            className="flex fixed z-40 flex-row-reverse items-center justify-between px-4 gap-4 pb-3 w-full bg-impo_Neutral_Surface"
            style={{ maxWidth: MAX_SCREEN_WIDTH, height: '80px' }}
          >
            <div className="flex flex-col gap-1 items-end px-2 py-1">
              <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
                توی هفته‌های مختلف بارداریت، اطلاعات مربوط به مراقبت ها و آزمایشاتی که باید داشته باشی رو برات گذاشتیم
              </Dark_Typography>
            </div>
          </div>

          <div style={{ paddingTop: HEADER_HEIGHT }} className="px-3 flex flex-col gap-2 bg-impo_Neutral_Surface">
            {data.banner && <BannerSection banner={data.banner} />}

            {data.segments.map((segment, index) => {
              return <SegmentGenerator key={index} {...segment} />;
            })}
          </div>
        </div>
      )}
    </WomenPageLayout>
  );
};

export default PregnancyCheckupContainer;
