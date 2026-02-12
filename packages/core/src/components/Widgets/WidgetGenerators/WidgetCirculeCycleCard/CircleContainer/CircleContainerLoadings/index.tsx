// todo
// import circularCycleLoadingAnimation from '@assets/shared/lottie/circularCycleLoading.json';
import { LottieJson } from '../../../../../../lib/LottieJson';
import { CycleLoadingStatusEnum } from '../../../../../../providers/WidgetActionsProvider';
import useLottieBubbleColor from './__hooks__/useLottieBubbleColor';
import { CircleContainerLoadingsProps } from './types';

const CircleContainerLoadings = ({ forgroundColor, loadingStatus }: CircleContainerLoadingsProps) => {
  const { bubbleRef } = useLottieBubbleColor({ forgroundColor });

  return (
    <>
      <div ref={bubbleRef}>
        {/* <LottieJson
          animationData={circularCycleLoadingAnimation}
          className={`absolute -top-10 -left-10 -right-10 -bottom-8 pointer-events-none duration-[3000ms] -z-10
            ${loadingStatus === CycleLoadingStatusEnum.successed ? 'scale-75' : 'scale-100'}
        `}
        /> */}
      </div>
    </>
  );
};

export default CircleContainerLoadings;
