import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import { LottieCanvas } from '@lib/LottieCanvas';

import { RewardOverlayPropsType } from './type';

const RewardOverlay = ({ initialReward }: RewardOverlayPropsType) => {
  return (
    <div
      className="absolute inset-0 flex items-center flex-col justify-center z-50"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.32)', backdropFilter: 'blur(7.5px)' }}
    >
      <LottieCanvas
        autoplay={true}
        style={{ maxWidth: MAX_SCREEN_WIDTH }}
        src={'/assets/lottie/Confetti1.lottie'}
        className={`fixed left-0 right-0 bottom-[35%] w-full h-[50dvh]  mx-auto select-none pointer-events-none z-30`}
      />
      <CustomImage
        // src={item.media}
        src="/assets/images/reward.webp"
        className="object-cover z-40"
      />
      <Typography scale="Title" size="Medium" color="Neutral_Background" textAlign="center">
        تبریک! تو یک قدم به خود مراقبتی نزدیک شدی🥳
      </Typography>
    </div>
  );
};

export default RewardOverlay;
