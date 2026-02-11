import { WidgetCardHealthReportContainer } from '@repo/core/components/Widgets/WidgetCardHealthReportContainer';

import WidgetMostRepeatedSignsList from './WidgetMostRepeatedSignsList';
import WidgetMostRepeatedSignsTitles from './WidgetMostRepeatedSignsTitles';
import { WidgetMostRepeatedSignsProps } from './types';

const WidgetMostRepeatedSigns = ({ data, isPdfDownloading }: WidgetMostRepeatedSignsProps) => {
  return (
    <WidgetCardHealthReportContainer title={data.title} isPdfDownloading={isPdfDownloading}>
      <>
        <WidgetMostRepeatedSignsTitles
          guidDescription={data.guidDescription}
          isPdfDownloading={isPdfDownloading}
          description={data.description}
          guidTitle={data.guidTitle}
        />

        <WidgetMostRepeatedSignsList items={data.items} isPdfDownloading={isPdfDownloading} />
      </>
    </WidgetCardHealthReportContainer>
  );
};

export default WidgetMostRepeatedSigns;
