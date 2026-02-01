import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useCurrentDate from './__hooks__/useCurrentDate';
import { AiChatbotLimitUploadMessagePropsType } from './type';

const AiChatbotLimitUploadMessage = ({
  currentImageUsage,
  imageUsageLimit,
  mediaLimitDate,
}: AiChatbotLimitUploadMessagePropsType) => {
  const { currentDate } = useCurrentDate({ mediaLimitDate });
  const text = `${currentImageUsage}/${imageUsageLimit}`;
  const isLimit = currentImageUsage === imageUsageLimit;

  return (
    <div className={` flex  justify-center items-end w-full ${isLimit ? 'pr-4' : 'pl-8'} `}>
      <div className="glass-card flex justify-center items-center shadow-sm !bg-white/70  rounded-[100px] px-4 py-1 h-10">
        <CustomTypography fontSize="Body_Small" className="text-impo_Surface_InverseSurface">
          {isLimit ? `آپلود عکس : ${text} تا  ${currentDate} ظرفیت تمام شد` : `آپلود عکس : ( ${text} استفاده شد)`}
        </CustomTypography>
      </div>
    </div>
  );
};

export default AiChatbotLimitUploadMessage;
