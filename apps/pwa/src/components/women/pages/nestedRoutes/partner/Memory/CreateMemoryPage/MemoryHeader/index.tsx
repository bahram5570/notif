import Dark_Typography from '@components/ui/Dark_Typography';

import { MemoryHeaderPropsType } from './type';

const MemoryHeader = ({ currentDate }: MemoryHeaderPropsType) => {
  return (
    <div className="flex items-center justify-center gap-3">
      <div
        style={{ transform: 'rotate(180deg)' }}
        className="h-0 w-24 border border-impo_Neutral_Surface dark:border-impo_Neutral_OnBackground"
      ></div>
      <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground text-center">
        {currentDate}
      </Dark_Typography>

      <div
        style={{ transform: 'rotate(180deg)' }}
        className="h-0 w-24 border border-impo_Neutral_Surface dark:border-impo_Neutral_OnBackground"
      ></div>
    </div>
  );
};

export default MemoryHeader;
