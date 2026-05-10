import { useMemo } from 'react';

import StarIcon from '@assets/shared/icons/star.svg';

import { useSystem } from '../../../hooks/useSystem';
import { CustomTypography } from '../../ui/CustomTypography';
import { TicketRateProps } from './types';

const TicketRate = ({ rate }: TicketRateProps) => {
  const { appName } = useSystem();

  const bg = useMemo(() => {
    switch (appName) {
      case 'MEN_PWA':
        return 'bg-impo_Blue_200 dark:bg-impo_Blue_700';

      default:
        return 'bg-impo_Pink_200 dark:bg-impo_Pink_700';
    }
  }, [appName]);

  return (
    <>
      {rate > 0 && (
        <div className="flex items-center gap-1 pr-1">
          <CustomTypography fontSize="Lable_Large" className="text-impo_Black !h-5">
            {rate.toString()}
          </CustomTypography>

          <StarIcon className="w-6 h-auto fill-impo_Yellow" />

          <div className={`w-[1px] h-[20px] ${bg}`} />
        </div>
      )}
    </>
  );
};

export default TicketRate;
