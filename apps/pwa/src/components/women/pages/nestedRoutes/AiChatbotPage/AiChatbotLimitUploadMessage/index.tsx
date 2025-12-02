import Typography from '@components/ui/Typography';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import useCurrentDate from './__hooks__/useCurrentDate';
import { AiChatbotLimitUploadMessagePropsType } from './type';

const AiChatbotLimitUploadMessage = ({
  currentImageUsage,
  imageUsageLimit,
  mediaLimitDate,
}: AiChatbotLimitUploadMessagePropsType) => {
  const { currentDate } = useCurrentDate({ mediaLimitDate });
  const text = `${currentImageUsage}/${imageUsageLimit}`;

  return (
    <div
      className={`fixed left-0 right-0  mx-auto flex z-20 `}
      style={{ maxWidth: MAX_SCREEN_WIDTH, top: HEADER_HEIGHT + 5 }}
    >
      {' '}
      <div className=" flex  justify-center items-end w-full">
        <div className="glass-card shadow-sm !bg-white/30 rounded-[100px] px-4 py-1">
          <Typography scale="Body" size="Small" color="Surface_InverseSurface">
            {currentImageUsage === imageUsageLimit
              ? `آپلود عکس : ${text} تا  ${currentDate} ظرفیت تمام شد`
              : `آپلود عکس : ( ${text} استفاده شد)`}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default AiChatbotLimitUploadMessage;
