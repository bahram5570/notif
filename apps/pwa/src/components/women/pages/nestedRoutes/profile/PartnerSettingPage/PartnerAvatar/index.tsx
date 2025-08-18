import { useEffect, useState } from 'react';

import HamdelIcon from '@assets/icons/hamdel.svg';
import { gregorianFarsiScriptDate, jalaaliScriptDate } from '@utils/dates';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';
import useTheme from '@hooks/useTheme';
import moment from 'moment-jalaali';

import { PartnerAvatarPropsType } from './type';

const PartnerAvatar = ({ name, profileUrl, jointime }: PartnerAvatarPropsType) => {
  const { colors } = useTheme();
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
        <Typography scale="Title" size="Small">
          {name}
        </Typography>
        <div className="flex items-center gap-1">
          <Typography scale="Body" size="Medium" color="PrimaryWoman_Primary">
            {currentDate}
          </Typography>
          <HamdelIcon className="w-4 h-4" style={{ stroke: colors.PrimaryWoman_Primary }} />
        </div>
      </div>
    </div>
  );
};

export default PartnerAvatar;
