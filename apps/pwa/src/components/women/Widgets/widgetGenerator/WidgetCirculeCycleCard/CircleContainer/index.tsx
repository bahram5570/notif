import { useEffect, useState } from 'react';

import { getUserCookie } from '@actions/cookie.actions';
import { LoadingStatusEnum } from '@components/women/pages/mainRoutes/cycle/CycleContainer/__hooks__/useCycleLoadingStatus/loadingStatus.enum';
import { InstallationPurposeEnum } from '@constants/activation.constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import CircleContainerContents from './CircleContainerContents';
import CircleContainerDays from './CircleContainerDays';
import CircleContainerLines from './CircleContainerLines';
import CircleContainerLoadings from './CircleContainerLoadings';
import CircleContainerWaves from './CircleContainerWaves';
import CycleCardShortLinks from './CycleCardShortLinks';
import useCircleContainerSize from './__hooks__/useCircleContainerSize';
import { CircleContainerProps } from './types';

const CircleContainer = ({ data, loadingStatus }: CircleContainerProps) => {
  const [showNumbers, setShowNumbers] = useState(false);
  const { containerRef, containerSize } = useCircleContainerSize();

  useEffect(() => {
    const handleResult = async () => {
      const user = await getUserCookie();

      const result =
        user !== null &&
        user.installationPurpose.status !== InstallationPurposeEnum.pregnancy.status &&
        user.installationPurpose.status !== InstallationPurposeEnum.breastfeeding.status;

      setShowNumbers(result);
    };

    handleResult();
  }, []);

  if (loadingStatus === LoadingStatusEnum.successed && data === null) {
    return <></>;
  }

  return (
    <div className="relative">
      <div
        className="w-full h-[100vw] p-8 overflow-hidden"
        style={{ maxHeight: MAX_SCREEN_WIDTH, maxWidth: MAX_SCREEN_WIDTH }}
      >
        <div className="relative w-full h-full rounded-full" ref={containerRef}>
          <CircleContainerLoadings forgroundColor={data?.forgroundColor} loadingStatus={loadingStatus} />
          <CircleContainerWaves forgroundColor={data?.forgroundColor} loadingStatus={loadingStatus} />

          {data && loadingStatus === LoadingStatusEnum.successed && (
            <>
              <CircleContainerContents
                description={data.description}
                textColor={data.textColor}
                leading={data.leading}
                button={data.button}
                title={data.title}
              />

              {showNumbers && (
                <CircleContainerLines
                  fertilityStart={data.fertilityStart}
                  fertilityEnd={data.fertilityEnd}
                  hasFertility={data.hasFertility}
                  periodStart={data.periodStart}
                  cycleLength={data.cycleLength}
                  containerSize={containerSize}
                  periodEnd={data.periodEnd}
                  pmsStart={data.pmsStart}
                  hasPms={data.hasPms}
                  pmsEnd={data.pmsEnd}
                />
              )}

              {showNumbers && (
                <CircleContainerDays
                  fertilityStart={data.fertilityStart}
                  fertilityEnd={data.fertilityEnd}
                  hasFertility={data.hasFertility}
                  hasOvulation={data.hasOvulation}
                  ovulationDay={data.ovulationDay}
                  cycleLength={data.cycleLength}
                  periodStart={data.periodStart}
                  currentDay={data.currentDay}
                  periodEnd={data.periodEnd}
                  pmsStart={data.pmsStart}
                  hasPms={data.hasPms}
                  pmsEnd={data.pmsEnd}
                />
              )}
            </>
          )}
        </div>
      </div>

      {data && data.shortcut.items.length > 0 && loadingStatus === LoadingStatusEnum.successed && (
        <CycleCardShortLinks items={data?.shortcut.items} />
      )}
    </div>
  );
};

export default CircleContainer;
