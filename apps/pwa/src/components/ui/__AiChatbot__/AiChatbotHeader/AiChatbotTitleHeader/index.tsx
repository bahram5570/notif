import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import { AiChatbotTitleHeaderPropsType } from './type';

const AiChatbotTitleHeader = ({ chatTitle }: AiChatbotTitleHeaderPropsType) => {
  return (
    <div className="flex flex-row-reverse items-center gap-2 rounded-full pl-6 py-1 pr-4 glass-card !bg-white/70  shadow-sm">
      <CustomImage src="/assets/images/mones.webp" width={32} height={32} />
      <div className="flex flex-col justify-center items-end">
        <Dark_Typography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
          {chatTitle || 'مونس'}
        </Dark_Typography>

        <Dark_Typography fontSize="Body_Small" className="text-impo_Surface_InverseSurface">
          دستیار هوش مصنوعی
        </Dark_Typography>
      </div>
    </div>
  );
};

export default AiChatbotTitleHeader;
