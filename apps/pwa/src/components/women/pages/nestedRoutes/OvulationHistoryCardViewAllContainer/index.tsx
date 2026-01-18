'use client';

import Dark_Typography from '@components/ui/Dark_Typography';
import WidgetOvulationHistoryCardItems from '@components/women/Widgets/widgetGenerator/WidgetOvulationHistoryCard/WidgetOvulationHistoryCardItems';
import WomenPageLayout from '@components/women/WomenPageLayout';

import useGetData from './__hooks__/useGetData';
import useSelectedTest from './__hooks__/useSelectedTest';

const OvulationHistoryCardViewAllContainer = () => {
  const { data } = useGetData();
  const { linkToHandler } = useSelectedTest();

  return (
    <WomenPageLayout rightElement="BackButton" rightElementScript={data?.title}>
      <div className="px-4">
        <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
          با انتخاب هر کدوم از چرخه‌های زیر، می‌تونی جزئیات مربوط به تست‌های انجام شده در اون چرخه رو ببینی
        </Dark_Typography>

        {data && <WidgetOvulationHistoryCardItems items={data.items} onSelect={linkToHandler} />}
      </div>
    </WomenPageLayout>
  );
};

export default OvulationHistoryCardViewAllContainer;
