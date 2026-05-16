import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';
import { LottieCanvas } from '@repo/core/lib/LottieCanvas';

import { RewardOverlayPropsType } from './type';

const RewardOverlay = ({ initialReward }: RewardOverlayPropsType) => {
  return (
    <div
      className="absolute inset-0 flex items-center flex-col justify-center z-50 mx-auto pointer-events-none"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.32)', backdropFilter: 'blur(7.5px)', maxWidth: MAX_SCREEN_WIDTH }}
    >
      <LottieCanvas
        autoplay={true}
        style={{ maxWidth: MAX_SCREEN_WIDTH }}
        src={'/assets/lottie/Confetti1.lottie'}
        className={`fixed left-0 right-0 bottom-[35%] w-full h-[50dvh]  mx-auto select-none pointer-events-none z-30`}
      />
      <CustomImage_NEW src="/assets/images/reward.webp" className="object-cover z-40" width={100} height={100} />
      <CustomTypography fontSize="Title_Medium" className="text-impo_Neutral_Background text-center">
        {initialReward}
      </CustomTypography>
    </div>
  );
};

export default RewardOverlay;
