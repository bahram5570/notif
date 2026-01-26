import Dark_Typography from '@components/ui/Dark_Typography';

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
        <Dark_Typography fontSize="Body_Small" className="text-impo_Surface_InverseSurface">
          {isLimit ? `آپلود عکس : ${text} تا  ${currentDate} ظرفیت تمام شد` : `آپلود عکس : ( ${text} استفاده شد)`}
        </Dark_Typography>
      </div>
    </div>
  );
};

export default AiChatbotLimitUploadMessage;
