import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import WidgetCardHealthReportContainer from '@components/Widgets/WidgetCardHealthReportContainer';

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
      <CustomTypography fontSize="Body_Small" className="w-full text-impo_Neutral_OnBackground">
        هنوز نشانه پرتکراری برات شناسایی نشده
      </CustomTypography>
    </WidgetCardHealthReportContainer>
  );
};

export default WidgetMostRepeatedSignsEmpty;
