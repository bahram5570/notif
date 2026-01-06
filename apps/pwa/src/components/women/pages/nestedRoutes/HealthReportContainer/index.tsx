'use client';

import { colorFormatConverter } from '@utils/scripts';

import WomenPageLayout from '@components/women/WomenPageLayout';
import useAnalytics from '@hooks/useAnalytics';
import useOnMountActions from '@hooks/useOnMountActions';
import useTheme from '@hooks/useTheme';

import HealthReportContainerSkeleton from './HealthReportContainerSkeleton';
import HealthReportContainerWidgets from './HealthReportContainerWidgets';
import HealthReportContainerPdf from './HealthReportContainerWidgets/HealthReportContainerPdf';
import useGetData from './__hooks__/useGetData';

const HealthReportContainer = () => {
  useAnalytics({ mountTimer_eventName: 'HealthReportSpentTime' });
  const { colors } = useTheme();
  const { isLoading, data } = useGetData();

  useOnMountActions(data?.actions);

  const backgroundColor = colorFormatConverter(data?.backgroundColor || colors.Grey_50);

  return (
    <WomenPageLayout rightElement="BackButton" rightElementScript="گزارش سلامت" className="bg-impo_Neutral_Surface">
      <div className="p-4">
        {isLoading && <HealthReportContainerSkeleton />}

        {!isLoading && data && (
          <>
            <HealthReportContainerWidgets data={data} />
            <HealthReportContainerPdf data={data} backgroundColor={backgroundColor} />
          </>
        )}
      </div>
    </WomenPageLayout>
  );
};

export default HealthReportContainer;
