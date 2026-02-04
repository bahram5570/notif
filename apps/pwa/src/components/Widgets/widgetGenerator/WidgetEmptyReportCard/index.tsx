import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import WidgetCardContainer from '@components/Widgets/WidgetCardContainer';

import { WidgetEmptyReportCardProps } from './types';

const WidgetEmptyReportCard = ({ data }: WidgetEmptyReportCardProps) => {
  return (
    <WidgetCardContainer title={data.title} button={data.button}>
      <div className="flex justify-end">
        <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          {data.description}
        </CustomTypography>
      </div>

      <CustomImage src={data.image} className="py-3" />
    </WidgetCardContainer>
  );
};

export default WidgetEmptyReportCard;
