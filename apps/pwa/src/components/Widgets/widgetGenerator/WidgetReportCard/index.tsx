import WidgetCardContainer from '@components/Widgets/WidgetCardContainer';
import Dark_Typography from '@components/ui/Dark_Typography';

import ReportGenerator from './ReportGenerator';
import { WidgetReportCardProps } from './types';

const WidgetReportCard = ({ data }: WidgetReportCardProps) => {
  return (
    <WidgetCardContainer
      title={data.title}
      button={data.button}
      classNameBtn="!text-impo_Neutral_OnSurface  !bg-impo_Neutral_Surface !border-impo_Neutral_Surface"
    >
      <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground text-right ">
        {data.description}
      </Dark_Typography>

      <div className="w-full pt-4 flex flex-col gap-1">
        {data.list.map((item, index) => (
          <ReportGenerator {...item} key={index} />
        ))}
      </div>
    </WidgetCardContainer>
  );
};

export default WidgetReportCard;
