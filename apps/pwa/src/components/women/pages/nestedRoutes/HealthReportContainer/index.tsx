'use client';

import WomenPageLayout from '@components/women/WomenPageLayout';
import useAnalytics from '@hooks/useAnalytics';
import useOnMountActions from '@hooks/useOnMountActions';

import HealthReportContainerSkeleton from './HealthReportContainerSkeleton';
import HealthReportContainerWidgets from './HealthReportContainerWidgets';
import HealthReportContainerPdf from './HealthReportContainerWidgets/HealthReportContainerPdf';
import useGetData from './__hooks__/useGetData';

const HealthReportContainer = () => {
  useAnalytics({ mountTimer_eventName: 'HealthReportSpentTime' });

  const { isLoading, data } = useGetData();

  useOnMountActions(data?.actions);

  return (
    <WomenPageLayout rightElement="BackButton" rightElementScript="گزارش سلامت" className="bg-impo_Neutral_Surface">
      <div className="p-4">
        {isLoading && <HealthReportContainerSkeleton />}

        {!isLoading && data && (
          <>
            <HealthReportContainerWidgets data={data} />
            <HealthReportContainerPdf data={data} />
          </>
        )}
      </div>
    </WomenPageLayout>
  );
};

export default HealthReportContainer;
