import { CustomTypography } from '../../ui/CustomTypography';
import { DateHeaderSectionPropsType } from './type';

export const DateHeaderSection = ({ currentDate }: DateHeaderSectionPropsType) => {
  return (
    <div className="flex items-center justify-center gap-3">
      <div style={{ transform: 'rotate(180deg)' }} className="h-0 w-24 border border-impo_Neutral_Surface "></div>
      <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground text-center">
        {currentDate}
      </CustomTypography>

      <div style={{ transform: 'rotate(180deg)' }} className="h-0 w-24 border border-impo_Neutral_Surface "></div>
    </div>
  );
};
