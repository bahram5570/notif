import Dark_Typography from '@components/ui/Dark_Typography';

import { ScriptsProps } from './types';

const Scripts = ({ title, inputsTitle, inputsTitleColor }: ScriptsProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-4 pt-8 z-0">
      <Dark_Typography
        fontSize="Body_Large"
        className={`text-center dark:text-impo_Neutral_OnBackground ${inputsTitleColor}`}
      >
        {title}
      </Dark_Typography>

      <Dark_Typography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground text-center">
        {inputsTitle}
      </Dark_Typography>
    </div>
  );
};

export default Scripts;
