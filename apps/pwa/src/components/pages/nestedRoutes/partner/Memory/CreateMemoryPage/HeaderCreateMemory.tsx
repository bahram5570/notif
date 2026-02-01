import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { jalaaliScriptDate } from '@utils/dates';

import moment from 'moment-jalaali';

const HeaderCreateMemory = () => {
  const gregorianMoment = moment(new Date().toISOString(), 'YYYY-MM-DD');
  const jalaaliDate = gregorianMoment.format('jYYYY/jMM/jDD');

  return (
    <div className="flex items-center justify-center gap-3">
      <div style={{ transform: 'rotate(180deg)' }} className="h-0 w-24 border border-impo_Neutral_Surface"></div>
      <CustomTypography
        fontSize="Body_Medium"
        className="text-impo_Neutral_OnBackground text-center"
      >{`امروز ${jalaaliScriptDate(jalaaliDate)} `}</CustomTypography>

      <div style={{ transform: 'rotate(180deg)' }} className="h-0 w-24 border border-impo_Neutral_Surface"></div>
    </div>
  );
};

export default HeaderCreateMemory;
