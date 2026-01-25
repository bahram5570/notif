import { CycleThemeEnum } from '@services/loginServices/enum';
import { colorFormatConverter } from '@utils/scripts';

import WidgetScaleModule from '@components/Widgets/WidgetScaleModule';
import WidgetGenerator from '@components/Widgets/widgetGenerator';
import WidgetCirculeCycleCard from '@components/Widgets/widgetGenerator/WidgetCirculeCycleCard';
import WidgetCycleCard from '@components/Widgets/widgetGenerator/WidgetCycleCard';
import { HEADER_HEIGHT } from '@components/WomenPageLayout/constants';
import useOnMountActions from '@hooks/useOnMountActions';

import CycleAppBar from '../CycleAppBar';
import CycleSkeleton from './CycleSkeleton';
import useCycleLoadingStatus from './__hooks__/useCycleLoadingStatus';
import { LoadingStatusEnum } from './__hooks__/useCycleLoadingStatus/loadingStatus.enum';
import useWidgetsListMaker from './__hooks__/useWidgetsListMaker';
import { ContainerProps } from './types';

const CycleContainer = ({ data, customAppBar, children }: ContainerProps) => {
  const widgetsListProps = useWidgetsListMaker({ widgets: data?.wigets });
  const { loadingStatus } = useCycleLoadingStatus({ hasData: data ? true : false });

  useOnMountActions(loadingStatus === LoadingStatusEnum.successed ? data?.actions : undefined);

  const appBarBackground = data ? colorFormatConverter(data.backgroundColor) : '#FDE6EC';

  const paddingTop =
    widgetsListProps.currentCycleThemeEnum === CycleThemeEnum.Circule
      ? HEADER_HEIGHT
      : loadingStatus === LoadingStatusEnum.successed && widgetsListProps.cycleCardData === null
        ? HEADER_HEIGHT
        : 0;

  if (widgetsListProps.currentCycleThemeEnum === null) {
    return <></>;
  }

  return (
    <>
      {data && loadingStatus === LoadingStatusEnum.successed && (
        <>
          {customAppBar && <WidgetScaleModule>{customAppBar}</WidgetScaleModule>}
          {!customAppBar && <CycleAppBar date={data.date} appBarBackground={appBarBackground} />}
        </>
      )}

      <div
        style={{ paddingTop, backgroundColor: appBarBackground }}
        className="relative h-full min-h-[100dvh] dark:!bg-impo_Neutral_Surface duration-300 z-0"
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

          {widgetsListProps.outsideCycleWidgetList && loadingStatus === LoadingStatusEnum.successed && (
            <>
              <div className="flex flex-col">
                {widgetsListProps.outsideCycleWidgetList.map((widget, index) => (
                  <WidgetGenerator {...widget} key={index} />
                ))}
              </div>

              {children && <>{children}</>}
            </>
          )}
        </div>

        {loadingStatus !== LoadingStatusEnum.successed && <CycleSkeleton />}
      </div>
    </>
  );
};

export default CycleContainer;
