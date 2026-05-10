import ArrowIcon from '@assets/shared/icons/vector.svg';

import { TicketArrowProps } from './types';

const TicketArrow = ({ stylingTypes }: TicketArrowProps) => {
  return (
    <div className="w-12 h-12 flex items-center justify-center">
      <ArrowIcon
        className={`w-2 h-auto ${stylingTypes === 'heading' ? 'stroke-impo_White' : 'stroke-impo_Neutral_OnBackground'}`}
      />
    </div>
  );
};

export default TicketArrow;
