import { WidgetGenerators } from '@repo/core/components/Widgets/WidgetGenerators';
import { WidgetCirculeCycleCard } from '@repo/core/components/Widgets/WidgetGenerators/WidgetCirculeCycleCard';
import { WidgetCycleCard } from '@repo/core/components/Widgets/WidgetGenerators/WidgetCycleCard';
import { WidgetScaleModule } from '@repo/core/components/Widgets/WidgetScaleModule';
import { colorFormatConverter } from '@repo/core/utils/scripts';
import { CycleThemeEnum } from '@services/loginServices/enum';

import useProfileData from '@hooks/__profile__/useProfileData';
import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';
import { useWidgetOnMountActions } from '@repo/core/hooks/useWidgetOnMountActions';
import { CycleLoadingStatusEnum } from '@repo/core/providers/WidgetActionsProvider';

import CycleAppBar from '../CycleAppBar';
import CycleSkeleton from './CycleSkeleton';
import useCycleLoadingStatus from './__hooks__/useCycleLoadingStatus';
import useWidgetsListMaker from './__hooks__/useWidgetsListMaker';
import { ContainerProps } from './types';

const CycleContainer = ({ data, customAppBar, children }: ContainerProps) => {
  const { phase } = useProfileData();
  const widgetsListProps = useWidgetsListMaker({ widgets: data?.wigets });
  const { loadingStatus } = useCycleLoadingStatus({ hasData: data ? true : false });

  useWidgetOnMountActions(loadingStatus === CycleLoadingStatusEnum.successed ? data?.actions : undefined);

  const appBarBackground = data ? colorFormatConverter(data.backgroundColor) : '#FDE6EC';

  const paddingTop =
    widgetsListProps.currentCycleThemeEnum === CycleThemeEnum.Circule
      ? HEADER_HEIGHT
      : loadingStatus === CycleLoadingStatusEnum.successed && widgetsListProps.cycleCardData === null
        ? HEADER_HEIGHT
        : 0;

  if (widgetsListProps.currentCycleThemeEnum === null) {
    return <></>;
  }

  return (
    <>
      {data && loadingStatus === CycleLoadingStatusEnum.successed && (
        <>
          {customAppBar && <WidgetScaleModule>{customAppBar}</WidgetScaleModule>}
          {!customAppBar && <CycleAppBar date={data.date} appBarBackground={appBarBackground} />}
        </>
      )}

      <div
        style={{ paddingTop, backgroundColor: appBarBackground }}
        className="relative h-full min-h-[100dvh] pb-8 dark:!bg-impo_Neutral_Surface duration-300 z-0"
      >
        <div className="flex flex-col h-full">
          {widgetsListProps.currentCycleThemeEnum === CycleThemeEnum.Flat && (
            <WidgetCycleCard
              loadingStatus={loadingStatus}
              data={widgetsListProps.cycleCardData}
              insideCycleWidgetList={widgetsListProps.insideCycleWidgetList}
            />
          )}

          {widgetsListProps.currentCycleThemeEnum === CycleThemeEnum.Circule && (
            <WidgetCirculeCycleCard
              loadingStatus={loadingStatus}
              data={widgetsListProps.circuleCycleCardData}
              insideCycleWidgetList={widgetsListProps.insideCycleWidgetList}
            />
          )}

          {widgetsListProps.outsideCycleWidgetList && loadingStatus === CycleLoadingStatusEnum.successed && (
            <>
              <div className="flex flex-col">
                {widgetsListProps.outsideCycleWidgetList.map((widget, index) => (
                  <WidgetGenerators {...widget} phase={phase} key={index} />
                ))}
              </div>

              {children && <>{children}</>}
            </>
          )}
        </div>

        {loadingStatus !== CycleLoadingStatusEnum.successed && <CycleSkeleton />}
      </div>
    </>
  );
};

export default CycleContainer;
