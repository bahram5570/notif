import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';

import { AiChatbotTitleHeaderPropsType } from './type';

const AiChatbotTitleHeader = ({ chatTitle }: AiChatbotTitleHeaderPropsType) => {
  return (
    <div className="flex flex-row-reverse items-center gap-2 rounded-full pl-6 py-1 pr-4 glass-card !bg-white/70 shadow-sm">
      <CustomImage src="/assets/images/mones.webp" width={32} height={32} />
      <div className="flex flex-col justify-center items-end">
        <Typography scale="Lable" size="Large">
          {chatTitle || 'مونس'}
        </Typography>
        <Typography scale="Body" size="Small" color="Surface_InverseSurface">
          دستیار هوش مصنوعی
        </Typography>
      </div>
    </div>
  );
};

export default AiChatbotTitleHeader;
