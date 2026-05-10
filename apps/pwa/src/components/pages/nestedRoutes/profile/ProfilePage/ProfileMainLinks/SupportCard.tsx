import SupportIcon from '@assets/icons/profile/support.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CardGenerator from './CardGenerator';
import { SupportCardTypes } from './types';

const SupportCard = ({ hasTicketSupportActive }: SupportCardTypes) => {
  return (
    <div className="relative w-full h-full">
      <CardGenerator
        script="پشتیبانی"
        backgroundColor="#FFF7EE"
        linkTo="/protected/support"
        Icon={<SupportIcon className="w-7 h-auto" />}
      />

      {hasTicketSupportActive && (
        <div className="absolute top-1 left-1 w-fit px-2 py-[2px] rounded-full bg-[#FA643F]">
          <CustomTypography fontSize="Body_TINY" className="text-impo_White">
            پیام جدید
          </CustomTypography>
        </div>
      )}
    </div>
  );
};

export default SupportCard;
