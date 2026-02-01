import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MemoryHeaderPropsType } from './type';

const MemoryHeader = ({ currentDate }: MemoryHeaderPropsType) => {
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

export default MemoryHeader;
