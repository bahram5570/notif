import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import WidgetCardHealthReportContainer from '@components/Widgets/WidgetCardHealthReportContainer';
import CustomImage from '@components/ui/CustomImage';

import WidgetPeriodReportEmptyStateCardGuides from './WidgetPeriodReportEmptyStateCardGuides';
import WidgetPeriodReportEmptyStateCardNotif from './WidgetPeriodReportEmptyStateCardNotif';
import { WidgetPeriodReportEmptyStateCardProps } from './types';

const WidgetPeriodReportEmptyStateCard = ({ data }: WidgetPeriodReportEmptyStateCardProps) => {
  return (
    <WidgetCardHealthReportContainer title={data.title}>
      <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
        {data.description}
      </CustomTypography>

      {/* <WidgetPeriodReportEmptyStateCardGuides /> */}

      <div className="relative w-full min-h-[170px]">
        <CustomImage src={'/assets/images/report.webp'} className="mt-2 pb-3" />
        <WidgetPeriodReportEmptyStateCardNotif days={data.days} percent={data.percent} text={data.text} />
      </div>
    </WidgetCardHealthReportContainer>
  );
};

export default WidgetPeriodReportEmptyStateCard;
