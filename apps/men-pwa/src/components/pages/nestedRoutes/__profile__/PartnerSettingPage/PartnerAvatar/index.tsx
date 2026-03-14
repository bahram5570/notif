import { useEffect, useState } from 'react';

import HamdelIcon from '@repo/assets/src/shared/icons/hamdel.svg';
import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { gregorianFarsiScriptDate, jalaaliScriptDate } from '@repo/core/utils/dates';

import { useCulture } from '@repo/core/hooks/useCulture';
import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';
import moment from 'moment-jalaali';

import { PartnerAvatarPropsType } from './type';

const PartnerAvatar = ({ name, profileUrl, jointime }: PartnerAvatarPropsType) => {
  const { culture } = useCulture();
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const gregorianMoment = moment(jointime, 'YYYY-MM-DD');

    if (culture.calendarType === CalendarTypeEnum.Gregorian) {
      const gregorianDate = gregorianMoment.format('YYYY-MM-DD');
      const gregorianFarsMonth = gregorianFarsiScriptDate(gregorianDate);

      setCurrentDate(gregorianFarsMonth);
    }

    if (culture.calendarType === CalendarTypeEnum.Jalali) {
      const jalaaliMoment = gregorianMoment.format('jYYYY/jMM/jDD');
      const jalaaliMonth = jalaaliScriptDate(jalaaliMoment);

      setCurrentDate(jalaaliMonth);
    }
  }, [culture.calendarType]);

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <CustomImage src={profileUrl} width={96} height={96} className="rounded-full" />
      <div className="flex flex-col items-center gap-1">
        <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Title_Small">
          {name}
        </CustomTypography>
        <div className="flex items-center gap-1">
          <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Body_Medium">
            {currentDate}
          </CustomTypography>
          <HamdelIcon className="w-4 h-4 stroke-impo_Neutral_OnBackground" />
        </div>
      </div>
    </div>
  );
};

export default PartnerAvatar;
