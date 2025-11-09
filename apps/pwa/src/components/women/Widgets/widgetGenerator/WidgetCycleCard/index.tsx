import { useRef } from 'react';

import Typography from '@components/ui/Typography';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import { LoadingStatusEnum } from '@components/women/pages/mainRoutes/cycle/CycleContainer/__hooks__/useCycleLoadingStatus/loadingStatus.enum';

import WidgetGenerator from '..';
import CycleCardBtn from './CycleCardBtn';
import CycleCardShortLinks from './CycleCardShortLinks';
import CycleScripts from './CycleScripts';
import { CYCLE_CARD_PADDING_BOTTOM, CYCLE_CARD_SHORT_LINKS_HEIGHT, CYCLE_CARD_TOTAL_HEIGHT } from './constants';
import { WidgetCycleCardProps } from './types';

const WidgetCycleCard = ({ data, insideCycleWidgetList, loadingStatus }: WidgetCycleCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  if (loadingStatus === LoadingStatusEnum.successed && data === null) {
    return <></>;
  }

  return (
    <div
      ref={ref}
      className="relative flex flex-col"
      style={{
        paddingTop: HEADER_HEIGHT,
        minHeight: CYCLE_CARD_TOTAL_HEIGHT,
        paddingBottom: CYCLE_CARD_SHORT_LINKS_HEIGHT / 2,
      }}
    >
      {insideCycleWidgetList && loadingStatus === LoadingStatusEnum.successed && (
        <div className="flex flex-col gap-4 p-4">
          {insideCycleWidgetList.map((item, index) => (
            <WidgetGenerator {...item} key={index} />
          ))}
        </div>
      )}

      <div
        className="relative w-full flex flex-col items-center gap-6 pt-4 bg-green-200"
        style={{
          minHeight: CYCLE_CARD_TOTAL_HEIGHT - CYCLE_CARD_SHORT_LINKS_HEIGHT,
          paddingBottom: CYCLE_CARD_PADDING_BOTTOM + CYCLE_CARD_SHORT_LINKS_HEIGHT / 2,
        }}
      >
        {loadingStatus !== LoadingStatusEnum.successed && (
          <>
            <Typography scale="Title" size="Medium" className="animate-cycleUpdatingScript">
              چرخه در حال بروزرسانی
            </Typography>
          </>
        )}

        {data && loadingStatus === LoadingStatusEnum.successed && (
          <>
            <CycleScripts
              description={data.description}
              textColor={data.textColor}
              leading={data.leading}
              title={data.title}
            />

            {data?.button && <CycleCardBtn buttonsList={data.button} />}

            <CycleCardShortLinks />
          </>
        )}
      </div>
    </div>
  );
};

export default WidgetCycleCard;
