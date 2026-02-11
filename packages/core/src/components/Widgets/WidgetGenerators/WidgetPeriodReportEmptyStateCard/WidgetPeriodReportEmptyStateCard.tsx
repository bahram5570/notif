// import WidgetPeriodReportEmptyStateCardGuides from './WidgetPeriodReportEmptyStateCardGuides';
import { CustomImage } from '../../../ui/CustomImage';
import { CustomTypography } from '../../../ui/CustomTypography';
import { WidgetCardHealthReportContainer } from '../../WidgetCardHealthReportContainer';
import WidgetPeriodReportEmptyStateCardNotif from './WidgetPeriodReportEmptyStateCardNotif';
import { WidgetPeriodReportEmptyStateCardProps } from './types';

export const WidgetPeriodReportEmptyStateCard = ({ data }: WidgetPeriodReportEmptyStateCardProps) => {
  return (
    <WidgetCardHealthReportContainer title={data.title}>
      <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
        {data.description}
      </CustomTypography>

      {/* <WidgetPeriodReportEmptyStateCardGuides /> */}

      <div className="relative w-full min-h-[170px]">
        <CustomImage src={'/assets/shared/images/report.webp'} className="mt-2 pb-3" />
        <WidgetPeriodReportEmptyStateCardNotif days={data.days} percent={data.percent} text={data.text} />
      </div>
    </WidgetCardHealthReportContainer>
  );
};
