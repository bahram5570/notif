import Dark_Typography from '@components/ui/Dark_Typography';
import WidgetCardHealthReportContainer from '@components/women/Widgets/WidgetCardHealthReportContainer';

import { WidgetMostRepeatedSignsEmptyProps } from './types';

const WidgetMostRepeatedSignsEmpty = ({ data, isPdfDownloading }: WidgetMostRepeatedSignsEmptyProps) => {
  if (isPdfDownloading) {
    return <></>;
  }

  return (
    <WidgetCardHealthReportContainer
      title={data.title}
      button={data.button}
      classNameBtn="!bg-impo_Neutral_Surface !border-impo_Neutral_Surface !text-impo_Neutral_OnBackground"
    >
      <Dark_Typography fontSize="Body_Small" className="w-full text-impo_Neutral_OnBackground">
        هنوز نشانه پرتکراری برات شناسایی نشده
      </Dark_Typography>
    </WidgetCardHealthReportContainer>
  );
};

export default WidgetMostRepeatedSignsEmpty;
