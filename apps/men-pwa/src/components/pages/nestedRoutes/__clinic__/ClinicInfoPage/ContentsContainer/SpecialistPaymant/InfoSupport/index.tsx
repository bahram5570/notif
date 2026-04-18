import SupportPhoneIcon from '@assets/shared/icons/supportPhone.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { InfoSupportProps } from './types';

const InfoSupport = ({ support }: InfoSupportProps) => {
  return (
    <div className="w-full px-2 py-4 rounded-xl flex flex-col items-center gap-2 border-[1px] border-impo_Neutral_Surface">
      <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
        {support.title}
      </CustomTypography>

      <div className="w-full h-[1px] bg-impo_Neutral_Surface" />

      <div className="w-full flex items-center justify-between pt-1">
        <div className="flex items-center gap-1">
          <SupportPhoneIcon className="w-4 h-auto stroke-impo_PrimaryMan_PrimaryMan" />

          <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
            {support.phone}
          </CustomTypography>
        </div>

        <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
          {support.helper}
        </CustomTypography>
      </div>
    </div>
  );
};

export default InfoSupport;
