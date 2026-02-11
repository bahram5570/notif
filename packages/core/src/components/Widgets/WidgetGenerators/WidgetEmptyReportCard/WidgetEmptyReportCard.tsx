import { CustomImage } from '../../../ui/CustomImage';
import { CustomTypography } from '../../../ui/CustomTypography';
import { WidgetCardContainer } from '../../WidgetCardContainer';
import { WidgetEmptyReportCardProps } from './types';

export const WidgetEmptyReportCard = ({ data }: WidgetEmptyReportCardProps) => {
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
