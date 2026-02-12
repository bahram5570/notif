import { colorFormatConverter } from '../../../../../../utils/scripts';

// todo
// import wavesJson from '@assets/shared/lottie/cycleWaves.json';

import { LottieJson } from '../../../../../../lib/LottieJson';
import { CycleLoadingStatusEnum } from '../../../../../../providers/WidgetActionsProvider';
import { CustomTypography } from '../../../../../ui/CustomTypography';
import CircleContainerWavesTick from './CircleContainerWavesTick';
import useLottieWavesColor from './__hooks__/useLottieWavesColor';
import { CircleContainerWavesProps } from './types';

const CircleContainerWaves = ({ forgroundColor, loadingStatus }: CircleContainerWavesProps) => {
  const { wavesRef } = useLottieWavesColor({ forgroundColor });

  const waveBackground = colorFormatConverter(forgroundColor || '#FDE6EC') + '0A';
  const wavePaddingTop = loadingStatus === CycleLoadingStatusEnum.successed ? '55%' : '100%';

  return (
    <>
      <div
        ref={wavesRef}
        className="absolute top-1 left-1 right-1 bottom-1 rounded-full bg-impo_Neutral_Surface overflow-hidden pointer-events-none"
      >
        <div
          className="w-full h-full duration-500"
          style={{ backgroundColor: waveBackground, paddingTop: wavePaddingTop }}
        >
          {/* <LottieJson animationData={wavesJson} /> */}
        </div>
      </div>

      <div className="animate-cycleUpdatingScript absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center pointer-events-none">
        <CustomTypography
          fontSize="Title_Medium"
          className={`text-impo_Neutral_OnBackground duration-300 ${loadingStatus === CycleLoadingStatusEnum.loading ? 'scale-100' : 'scale-0'}`}
        >
          چرخه در حال بروزرسانی
        </CustomTypography>
      </div>

      <div
        className={`
                    duration-300 
                    absolute 
                    left-0 
                    right-0 
                    top-0 
                    bottom-0 
                    flex 
                    flex-col 
                    justify-center 
                    items-center 
                    pointer-events-none
                    ${loadingStatus === CycleLoadingStatusEnum.loaded ? 'scale-100' : 'scale-0'} 
                  `}
      >
        <CircleContainerWavesTick />

        <CustomTypography fontSize="Title_Medium" className="text-impo_Neutral_OnBackground">
          چرخه بروزرسانی شد
        </CustomTypography>
      </div>
    </>
  );
};

export default CircleContainerWaves;
