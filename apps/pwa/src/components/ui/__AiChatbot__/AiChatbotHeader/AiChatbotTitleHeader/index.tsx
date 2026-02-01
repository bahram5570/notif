import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';

import { AiChatbotTitleHeaderPropsType } from './type';

const AiChatbotTitleHeader = ({ chatTitle }: AiChatbotTitleHeaderPropsType) => {
  return (
    <div className="flex flex-row-reverse items-center gap-2 rounded-full pl-6 py-1 pr-4 glass-card !bg-white/70  shadow-sm">
      <CustomImage src="/assets/images/mones.webp" width={32} height={32} />
      <div className="flex flex-col justify-center items-end">
        <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
          {chatTitle || 'مونس'}
        </CustomTypography>

        <CustomTypography fontSize="Body_Small" className="text-impo_Surface_InverseSurface">
          دستیار هوش مصنوعی
        </CustomTypography>
      </div>
    </div>
  );
};

export default AiChatbotTitleHeader;
