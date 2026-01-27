'use client';

import MainPageLayout from '@components/MainPageLayout';
import WidgetPeriodCycleHistoryGuides from '@components/Widgets/widgetGenerator/WidgetPeriodCycleHistory/WidgetPeriodCycleHistoryGuides';
import WidgetPeriodCycleHistoryItems from '@components/Widgets/widgetGenerator/WidgetPeriodCycleHistory/WidgetPeriodCycleHistoryItems';

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
