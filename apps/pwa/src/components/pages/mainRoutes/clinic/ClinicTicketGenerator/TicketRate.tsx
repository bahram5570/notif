import StarIcon from '@assets/icons/star.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { TicketRateProps } from './types';

const TicketRate = ({ rate }: TicketRateProps) => {
  return (
    <>
      {rate > 0 && (
        <div className="flex items-center gap-1 pr-1">
          <CustomTypography fontSize="Lable_Large" className="text-impo_Black !h-5">
            {rate.toString()}
          </CustomTypography>

          <StarIcon className="w-6 h-auto fill-impo_Yellow" />

          <div className="w-[1px] h-[20px] bg-impo_Pink_200 dark:bg-impo_Pink_700" />
        </div>
      )}
    </>
  );
};

export default TicketRate;
