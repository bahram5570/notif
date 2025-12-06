import Typography from '@components/ui/Typography';

import { AiChatbotLimitUploadMessagePropsType } from './type';

const AiChatbotLimitUploadMessage = ({
  currentImageUsage,
  imageUsageLimit,
  mediaLimitDate,
}: AiChatbotLimitUploadMessagePropsType) => {
  const text = `${currentImageUsage}/${imageUsageLimit}`;

  return (
    <div className=" flex  justify-center items-end w-full pl-8">
      <div className="glass-card flex justify-center items-center shadow-sm !bg-white/30 rounded-[100px] px-4 py-1 h-10">
        <Typography scale="Body" size="Small" color="Surface_InverseSurface">
          {currentImageUsage === imageUsageLimit
            ? `آپلود عکس : ${text} تا  ${mediaLimitDate} ظرفیت تمام شد`
            : `آپلود عکس : ( ${text} استفاده شد)`}
        </Typography>
      </div>
    </div>
  );
};

export default AiChatbotLimitUploadMessage;
