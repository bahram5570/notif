import { useEffect, useState } from 'react';

import { gregorianFarsiMonthNames, gregorianFarsiScriptDate, jalaaliMonthNames, jalaaliScriptDate } from '@utils/dates';

import Typography from '@components/ui/Typography';
import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';
import moment from 'moment-jalaali';

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
    <div className=" flex justify-center items-end w-full">
      <div className="glass-card shadow-sm !bg-white/30 rounded-[100px] px-4 py-1">
        <Typography scale="Body" size="Small" color="Surface_InverseSurface">
          {currentImageUsage === imageUsageLimit
            ? `آپلود عکس : ${text} تا  ${currentDate} ظرفیت تمام شد`
            : `آپلود عکس : ( ${text} استفاده شد)`}
        </Typography>
      </div>
    </div>
  );
};

export default AiChatbotLimitUploadMessage;
