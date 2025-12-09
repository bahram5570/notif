import dotsLoading from '@assets/lottie/dotsLoading.json';

import Typography from '@components/ui/Typography';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import { LoadingStatusEnum } from '@components/women/pages/mainRoutes/cycle/CycleContainer/__hooks__/useCycleLoadingStatus/loadingStatus.enum';
import { LottieJson } from '@lib/LottieJson';

import WidgetGenerator from '..';
import CycleCardBtn from './CycleCardBtn';
import CycleCardShortLinks from './CycleCardShortLinks';
import CycleCardWave from './CycleCardWave';
import CycleScripts from './CycleScripts';
import { CYCLE_CARD_PADDING_BOTTOM, CYCLE_CARD_SHORT_LINKS_HEIGHT, CYCLE_CARD_TOTAL_HEIGHT } from './constants';
import { WidgetCycleCardProps } from './types';

const WidgetCycleCard = ({ data, insideCycleWidgetList, loadingStatus }: WidgetCycleCardProps) => {
  if (loadingStatus === LoadingStatusEnum.successed && data === null) {
    return <></>;
  }

  const hasInsideWigets =
    insideCycleWidgetList && insideCycleWidgetList.length > 0 && loadingStatus === LoadingStatusEnum.successed;

  return (
    <div
      className="relative flex flex-col"
      style={{
        paddingTop: HEADER_HEIGHT,
        minHeight: CYCLE_CARD_TOTAL_HEIGHT,
        paddingBottom: CYCLE_CARD_SHORT_LINKS_HEIGHT / 2,
      }}
    >
      {hasInsideWigets && (
        <div className="flex flex-col gap-4 ">
          {insideCycleWidgetList.map((item, index) => (
            <WidgetGenerator {...item} key={index} />
          ))}
        </div>
      )}

      <div
        className="relative w-full flex flex-col items-center gap-4 pt-4"
        style={{
          minHeight: CYCLE_CARD_TOTAL_HEIGHT - CYCLE_CARD_SHORT_LINKS_HEIGHT,
          paddingBottom: CYCLE_CARD_PADDING_BOTTOM + CYCLE_CARD_SHORT_LINKS_HEIGHT / 2,
        }}
      >
        <CycleCardWave color={data?.forgroundColor} />

        {loadingStatus !== LoadingStatusEnum.successed && (
          <div className="w-full flex justify-center items-center my-auto">
            <LottieJson animationData={dotsLoading} className="w-14" />

            <Typography scale="Title" size="Medium">
              چرخه در حال بروزرسانی
            </Typography>
          </div>
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

            {data.shortcut.items.length > 0 && <CycleCardShortLinks items={data.shortcut.items} />}
          </>
        )}
      </div>
    </div>
  );
};

export default WidgetCycleCard;
