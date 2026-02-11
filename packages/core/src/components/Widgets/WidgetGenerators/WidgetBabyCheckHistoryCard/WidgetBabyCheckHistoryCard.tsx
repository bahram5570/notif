import { WidgetCardHealthReportContainer } from '../../WidgetCardHealthReportContainer';
import WidgetBabyCheckHistoryCardDescription from './WidgetBabyCheckHistoryCardDescription';
import WidgetBabyCheckHistoryCardItems from './WidgetBabyCheckHistoryCardItems';
import WidgetBabyCheckHistoryCardViewAll from './WidgetBabyCheckHistoryCardViewAll';
import { WidgetBabyCheckHistoryCardProps } from './types';

export const WidgetBabyCheckHistoryCard = ({ data, isPdfDownloading }: WidgetBabyCheckHistoryCardProps) => {
  const hasMoreThanThreeItems = isPdfDownloading ? false : data.items.length > 3;
  const itemsList = hasMoreThanThreeItems ? data.items.slice(0, 3) : data.items;

  return (
    <WidgetCardHealthReportContainer title={data.title} isPdfDownloading={isPdfDownloading}>
      <>
        <WidgetBabyCheckHistoryCardDescription
          isPdfDownloading={isPdfDownloading}
          description={data.description}
          icon={data.icon}
        />
        <WidgetBabyCheckHistoryCardItems items={itemsList} isPdfDownloading={isPdfDownloading} />
        {!isPdfDownloading && <WidgetBabyCheckHistoryCardViewAll data={data} />}
      </>
    </WidgetCardHealthReportContainer>
  );
};
