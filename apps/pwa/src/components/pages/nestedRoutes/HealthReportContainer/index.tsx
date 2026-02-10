'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';

import { useAnalytics } from '@repo/core/hooks/useAnalytics';
import { useWidgetOnMountActions } from '@repo/core/hooks/useWidgetOnMountActions';

import HealthReportContainerSkeleton from './HealthReportContainerSkeleton';
import HealthReportContainerWidgets from './HealthReportContainerWidgets';
import HealthReportContainerPdf from './HealthReportContainerWidgets/HealthReportContainerPdf';
import useGetData from './__hooks__/useGetData';

const HealthReportContainer = () => {
  useAnalytics({ mountTimer_eventName: 'HealthReportSpentTime' });

  const { isLoading, data } = useGetData();

  useWidgetOnMountActions(data?.actions);

  return (
    <MainPageLayout rightElement="BackButton" rightElementScript="گزارش سلامت" className="bg-impo_Neutral_Surface">
      <div className="p-4">
        {isLoading && <HealthReportContainerSkeleton />}

        {!isLoading && data && (
          <>
            <HealthReportContainerWidgets data={data} />
            <HealthReportContainerPdf data={data} />
          </>
        )}
      </div>
    </MainPageLayout>
  );
};

export default HealthReportContainer;
