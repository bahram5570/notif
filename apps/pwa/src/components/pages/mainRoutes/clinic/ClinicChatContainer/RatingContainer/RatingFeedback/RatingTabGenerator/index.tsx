import Dark_Typography from '@components/ui/Dark_Typography';

import { RatingTabGeneratorProps } from './types';

const RatingTabGenerator = ({ tabType, tabHandler, tab }: RatingTabGeneratorProps) => {
  const script = tabType === 'positive' ? 'بازخورد مثبت' : 'بازخورد منفی';
  const color = tabType === 'positive' ? 'border-b-impo_Success_Success' : 'border-b-impo_Error_Error';

  return (
    <div
      onClick={() => tabHandler(tabType)}
      className={`w-full flex justify-center items-center p-2 border-[1px] border-transparent  cursor-pointer ${tab === tabType ? color : 'border-b-impo_Surface_OutlineVariant'}`}
    >
      <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        {script}
      </Dark_Typography>
    </div>
  );
};

export default RatingTabGenerator;
