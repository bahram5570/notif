import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import { NameSelectorEmptyProps } from './types';

const NameSelectorEmpty = ({ image, txt1, txt2, children }: NameSelectorEmptyProps) => {
  return (
    <div className="w-full h-[300px] flex flex-col items-center justify-center">
      <CustomImage src={image} width={100} height={100} />

      <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground text-center pt-3 pb-1">
        {txt1}
      </Dark_Typography>

      <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground text-center">
        {txt2}
      </Dark_Typography>

      {children && <>{children}</>}
    </div>
  );
};

export default NameSelectorEmpty;
