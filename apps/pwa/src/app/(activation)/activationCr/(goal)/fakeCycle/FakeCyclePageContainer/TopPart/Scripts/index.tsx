import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { ScriptsProps } from './types';

const Scripts = ({ title, inputsTitle, inputsTitleColor }: ScriptsProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-4 pt-8 z-0">
      <CustomTypography
        fontSize="Body_Large"
        className={`text-center dark:text-impo_Neutral_OnBackground ${inputsTitleColor}`}
      >
        {title}
      </CustomTypography>

      <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground text-center">
        {inputsTitle}
      </CustomTypography>
    </div>
  );
};

export default Scripts;
