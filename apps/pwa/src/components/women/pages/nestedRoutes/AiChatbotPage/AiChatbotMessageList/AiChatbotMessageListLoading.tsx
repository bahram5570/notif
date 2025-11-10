import chatbotJson from '@assets/lottie/chatbot.json';

import Typography from '@components/ui/Typography';
import { LottieJson } from '@lib/LottieJson';

const AiChatbotMessageListLoading = () => {
  return (
    <div className="flex justify-start items-baseline" style={{ minHeight: `calc(100dvh - 360px )` }}>
      <div className="flex items-center rounded-full !bg-white/40  glass-card   pr-2 pl-4">
        <Typography scale="Body" size="Medium">
          دارم فکر میکنم...
        </Typography>
        <LottieJson animationData={chatbotJson} loop={false} autoPlay={false} className="w-12 h-12" />
      </div>
    </div>
  );
};

export default AiChatbotMessageListLoading;
