import { WidgetGenerators } from '..';
import { HEADER_HEIGHT } from '../../../../constants/app.constants';
import { CycleLoadingStatusEnum } from '../../../../providers/WidgetActionsProvider';
import { CustomTypography } from '../../../ui/CustomTypography';
import CycleCardBtn from './CycleCardBtn';
import CycleCardShortLinks from './CycleCardShortLinks';
import { CycleCardWave } from './CycleCardWave';
import CycleScripts from './CycleScripts';
import WidgetCycleCardDots from './WidgetCycleCardDots';
import { CYCLE_CARD_PADDING_BOTTOM, CYCLE_CARD_SHORT_LINKS_HEIGHT, CYCLE_CARD_TOTAL_HEIGHT } from './constants';
import { WidgetCycleCardProps } from './types';

export const WidgetCycleCard = ({ data, insideCycleWidgetList, loadingStatus }: WidgetCycleCardProps) => {
  if (loadingStatus === CycleLoadingStatusEnum.successed && data === null) {
    return <></>;
  }

  const hasInsideWigets =
    insideCycleWidgetList && insideCycleWidgetList.length > 0 && loadingStatus === CycleLoadingStatusEnum.successed;

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
            <WidgetGenerators {...item} key={index} />
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

        {loadingStatus !== CycleLoadingStatusEnum.successed && (
          <div className="w-full flex justify-center items-center my-auto">
            <WidgetCycleCardDots />

            <CustomTypography fontSize="Title_Medium" className="text-impo_Neutral_OnBackground">
              چرخه در حال بروزرسانی
            </CustomTypography>
          </div>
        )}

        {data && loadingStatus === CycleLoadingStatusEnum.successed && (
          <>
            <CycleScripts
              description={data.description}
              textColor={data.textColor}
              leading={data.leading}
              title={data.title}
            />

            {data.button && <CycleCardBtn buttonsList={data.button} />}

            {data.shortcut?.items && data.shortcut.items.length > 0 && (
              <CycleCardShortLinks items={data.shortcut.items} />
            )}
          </>
        )}
      </div>
    </div>
  );
};
