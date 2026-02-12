'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { WidgetBabyCheckHistoryCardItems } from '@repo/core/components/Widgets/WidgetGenerators/WidgetBabyCheckHistoryCard';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useGetData from './__hooks__/useGetData';
import useSelectedTest from './__hooks__/useSelectedTest';

const BabyCheckHistoryCardViewAllContainer = () => {
  const { data } = useGetData();
  const { linkToHandler } = useSelectedTest();

  return (
    <MainPageLayout rightElement="BackButton" rightElementScript={data?.title}>
      <div className="px-4">
        <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
          با انتخاب هر کدوم از چرخه‌های زیر، می‌تونی جزئیات مربوط به تست‌های انجام شده در اون چرخه رو ببینی
        </CustomTypography>

        {data && <WidgetBabyCheckHistoryCardItems items={data.items} onSelect={linkToHandler} />}
      </div>
    </MainPageLayout>
  );
};

export default BabyCheckHistoryCardViewAllContainer;
