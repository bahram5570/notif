import wavesJson from '@assets/lottie/cycleWaves.json';
import { colorFormatConverter } from '@utils/scripts';

import { LoadingStatusEnum } from '@components/pages/mainRoutes/cycle/CycleContainer/__hooks__/useCycleLoadingStatus/loadingStatus.enum';
import Dark_Typography from '@components/ui/Dark_Typography';
import { LottieJson } from '@lib/LottieJson';

import CircleContainerWavesTick from './CircleContainerWavesTick';
import useLottieWavesColor from './__hooks__/useLottieWavesColor';
import { CircleContainerWavesProps } from './types';

const CircleContainerWaves = ({ forgroundColor, loadingStatus }: CircleContainerWavesProps) => {
  const { wavesRef } = useLottieWavesColor({ forgroundColor });

  const waveBackground = colorFormatConverter(forgroundColor || '#FDE6EC') + '0A';
  const wavePaddingTop = loadingStatus === LoadingStatusEnum.successed ? '55%' : '100%';

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
          <LottieJson animationData={wavesJson} />
        </div>
      </div>

      <div className="animate-cycleUpdatingScript absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center pointer-events-none">
        <Dark_Typography
          fontSize="Title_Medium"
          className={`text-impo_Neutral_OnBackground duration-300 ${loadingStatus === LoadingStatusEnum.loading ? 'scale-100' : 'scale-0'}`}
        >
          چرخه در حال بروزرسانی
        </Dark_Typography>
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
                    ${loadingStatus === LoadingStatusEnum.loaded ? 'scale-100' : 'scale-0'} 
                  `}
      >
        <CircleContainerWavesTick />

        <Dark_Typography fontSize="Title_Medium" className="text-impo_Neutral_OnBackground">
          چرخه بروزرسانی شد
        </Dark_Typography>
      </div>
    </>
  );
};

export default CircleContainerWaves;
