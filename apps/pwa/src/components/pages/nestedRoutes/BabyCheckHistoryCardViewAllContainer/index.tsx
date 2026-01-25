'use client';

import WidgetBabyCheckHistoryCardItems from '@components/Widgets/widgetGenerator/WidgetBabyCheckHistoryCard/WidgetBabyCheckHistoryCardItems';
import WomenPageLayout from '@components/WomenPageLayout';
import Dark_Typography from '@components/ui/Dark_Typography';

import useGetData from './__hooks__/useGetData';
import useSelectedTest from './__hooks__/useSelectedTest';

const BabyCheckHistoryCardViewAllContainer = () => {
  const { data } = useGetData();
  const { linkToHandler } = useSelectedTest();

  return (
    <WomenPageLayout rightElement="BackButton" rightElementScript={data?.title}>
      <div className="px-4">
        <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
          با انتخاب هر کدوم از چرخه‌های زیر، می‌تونی جزئیات مربوط به تست‌های انجام شده در اون چرخه رو ببینی
        </Dark_Typography>

        {data && <WidgetBabyCheckHistoryCardItems items={data.items} onSelect={linkToHandler} />}
      </div>
    </WomenPageLayout>
  );
};

export default BabyCheckHistoryCardViewAllContainer;
