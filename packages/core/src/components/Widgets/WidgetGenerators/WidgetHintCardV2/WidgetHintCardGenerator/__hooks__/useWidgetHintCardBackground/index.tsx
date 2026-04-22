import { useEffect, useState } from 'react';

import { CyclePhaseEnum } from '../../../../../../../providers/WidgetActionsProvider';
import { UseWidgetHintCardBackgroundTypes } from './types';

const useWidgetHintCardBackground = ({ phase }: UseWidgetHintCardBackgroundTypes) => {
  const [backgroundClassNames, setBackgroundClassNames] = useState({ card1: 'bg-[#E6EBFD]', card2: 'bg-[#FCE7EB]' });

  useEffect(() => {
    switch (phase) {
      case CyclePhaseEnum.PeriodTracker:
        setBackgroundClassNames({ card1: 'bg-[#E6EBFD]', card2: 'bg-[#FCE7EB]' });
        break;
      case CyclePhaseEnum.PeriodPrevention:
        setBackgroundClassNames({ card1: 'bg-[#E6EBFD]', card2: 'bg-[#EFE7FD]' });
        break;
      case CyclePhaseEnum.PeriodIntention:
        setBackgroundClassNames({ card1: 'bg-[#E6EBFD]', card2: 'bg-[#E4F0F1]' });
        break;
      case CyclePhaseEnum.Pregnancy:
        setBackgroundClassNames({ card1: 'bg-[#E6EBFD]', card2: 'bg-[#E8ECE8]' });
        break;
      case CyclePhaseEnum.Breastfeeding:
        setBackgroundClassNames({ card1: 'bg-[#E6EBFD]', card2: 'bg-[#FEE8E6]' });
        break;
    }
  }, [phase]);

  return { backgroundClassNames };
};

export default useWidgetHintCardBackground;
