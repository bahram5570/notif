'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import {
  WidgetPeriodCycleHistoryGuides,
  WidgetPeriodCycleHistoryItems,
} from '@repo/core/components/Widgets/WidgetGenerators/WidgetPeriodCycleHistory';

import useGetData from './__hooks__/useGetData';

const PeriodCycleHistoryViewAllContainer = () => {
  const { data } = useGetData();

  return (
    <MainPageLayout rightElement="BackButton" rightElementScript={data?.title}>
      <div className="px-4">
        <WidgetPeriodCycleHistoryGuides />
        {data && <WidgetPeriodCycleHistoryItems items={data.items} />}
      </div>
    </MainPageLayout>
  );
};

export default PeriodCycleHistoryViewAllContainer;
