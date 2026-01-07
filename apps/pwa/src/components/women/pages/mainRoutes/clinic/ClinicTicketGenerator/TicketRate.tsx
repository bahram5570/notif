import StarIcon from '@assets/icons/star.svg';

import Dark_Typography from '@components/ui/Dark_Typography';

import { TicketRateProps } from './types';

const TicketRate = ({ rate }: TicketRateProps) => {
  return (
    <>
      {rate > 0 && (
        <div className="flex items-center gap-1 pr-1">
          <Dark_Typography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground !h-5">
            {rate.toString()}
          </Dark_Typography>

          <StarIcon className="w-6 h-auto fill-impo_Yellow" />

          <div className="w-[1px] h-[20px] bg-impo_Pink_200" />
        </div>
      )}
    </>
  );
};

export default TicketRate;
