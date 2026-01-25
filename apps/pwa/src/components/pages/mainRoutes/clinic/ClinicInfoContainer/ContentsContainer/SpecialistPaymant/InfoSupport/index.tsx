import SupportPhoneIcon from '@assets/icons/supportPhone.svg';

import Dark_Typography from '@components/ui/Dark_Typography';

import { InfoSupportProps } from './types';

const InfoSupport = ({ support }: InfoSupportProps) => {
  return (
    <div className="w-full px-2 py-4 rounded-xl flex flex-col items-center gap-2 border-[1px] border-impo_Neutral_Surface">
      <Dark_Typography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
        {support.title}
      </Dark_Typography>

      <div className="w-full h-[1px] bg-impo_Neutral_Surface" />

      <div className="w-full flex items-center justify-between pt-1">
        <div className="flex items-center gap-1">
          <SupportPhoneIcon className="w-4 h-auto stroke-impo_Primary_Primary" />

          <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
            {support.phone}
          </Dark_Typography>
        </div>

        <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
          {support.helper}
        </Dark_Typography>
      </div>
    </div>
  );
};

export default InfoSupport;
