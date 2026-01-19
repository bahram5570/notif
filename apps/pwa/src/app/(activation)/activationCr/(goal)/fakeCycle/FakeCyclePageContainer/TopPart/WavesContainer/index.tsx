import CycleCardWave from '@components/women/Widgets/widgetGenerator/WidgetCycleCard/CycleCardWave';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import { WavesContainerProps } from './types';

const TOTAL_WAVE_CONTAINER_SIZE = MAX_SCREEN_WIDTH * 5;

const WavesContainer = ({ waveColor }: WavesContainerProps) => {
  return (
    <>
      <div
        className={`
                    absolute 
                    left-1/2 
                    bottom-0 
                    -translate-x-1/2 
                    mx-auto 
                    rounded-full 
                    z-0
                    dark:!bg-impo_Neutral_Surface
                  `}
        style={{
          backgroundColor: `${waveColor}10`,
          width: TOTAL_WAVE_CONTAINER_SIZE,
          height: TOTAL_WAVE_CONTAINER_SIZE,
          minWidth: TOTAL_WAVE_CONTAINER_SIZE,
          minHeight: TOTAL_WAVE_CONTAINER_SIZE,
        }}
      />

      <CycleCardWave color={waveColor} />
    </>
  );
};

export default WavesContainer;
