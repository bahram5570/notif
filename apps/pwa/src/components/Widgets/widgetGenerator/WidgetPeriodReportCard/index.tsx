import WidgetCardHealthReportContainer from '@components/Widgets/WidgetCardHealthReportContainer';

import WidgetPeriodReportCardGuides from './WidgetPeriodReportCardGuides';
import WidgetPeriodReportCardTable from './WidgetPeriodReportCardTable';
import { WidgetPeriodReportCardProps } from './types';

const WidgetPeriodReportCard = ({ data, isPdfDownloading }: WidgetPeriodReportCardProps) => {
  return (
    <WidgetCardHealthReportContainer title={data.title} isPdfDownloading={isPdfDownloading}>
      <>
        <WidgetPeriodReportCardGuides isPdfDownloading={isPdfDownloading} />

        <WidgetPeriodReportCardTable
          min={data.min}
          max={data.max}
          items={data.items}
          cycleLength={data.cycleLength}
          periodLength={data.periodLength}
          isPdfDownloading={isPdfDownloading}
        />
      </>
    </WidgetCardHealthReportContainer>
  );
};

export default WidgetPeriodReportCard;
