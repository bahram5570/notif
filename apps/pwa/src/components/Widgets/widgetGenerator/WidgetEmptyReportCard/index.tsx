import WidgetCardContainer from '@components/Widgets/WidgetCardContainer';
import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import { WidgetEmptyReportCardProps } from './types';

const WidgetEmptyReportCard = ({ data }: WidgetEmptyReportCardProps) => {
  return (
    <WidgetCardContainer title={data.title} button={data.button}>
      <div className="flex justify-end">
        <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          {data.description}
        </Dark_Typography>
      </div>

      <CustomImage src={data.image} className="py-3" />
    </WidgetCardContainer>
  );
};

export default WidgetEmptyReportCard;
