import chatbotJson from '@assets/lottie/chatbot.json';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { LottieJson } from '@lib/LottieJson';

const AiChatbotMessageListLoading = () => {
  return (
    <div className="flex justify-start items-baseline" style={{ minHeight: `calc(100dvh - 360px )` }}>
      <div className="flex items-center rounded-full !bg-white/40   glass-card   pr-2 pl-4">
        <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
          دارم فکر میکنم...
        </CustomTypography>
        <LottieJson animationData={chatbotJson} loop={false} autoPlay={false} className="w-12 h-12" />
      </div>
    </div>
  );
};

export default AiChatbotMessageListLoading;
