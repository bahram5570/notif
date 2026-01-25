'use client';

import WidgetPeriodCycleHistoryGuides from '@components/Widgets/widgetGenerator/WidgetPeriodCycleHistory/WidgetPeriodCycleHistoryGuides';
import WidgetPeriodCycleHistoryItems from '@components/Widgets/widgetGenerator/WidgetPeriodCycleHistory/WidgetPeriodCycleHistoryItems';
import WomenPageLayout from '@components/WomenPageLayout';

import useGetData from './__hooks__/useGetData';

const PeriodCycleHistoryViewAllContainer = () => {
  const { data } = useGetData();

  return (
    <WomenPageLayout rightElement="BackButton" rightElementScript={data?.title}>
      <div className="px-4">
        <WidgetPeriodCycleHistoryGuides />
        {data && <WidgetPeriodCycleHistoryItems items={data.items} />}
      </div>
    </WomenPageLayout>
  );
};

export default PeriodCycleHistoryViewAllContainer;
