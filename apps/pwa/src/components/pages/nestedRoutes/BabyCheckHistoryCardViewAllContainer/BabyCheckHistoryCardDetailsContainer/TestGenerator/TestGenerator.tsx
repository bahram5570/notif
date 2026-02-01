import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useTestGeneratorScriptMaker from './__hooks__/useTestGeneratorScriptMaker';
import { TestGeneratorProps } from './types';

const TestGenerator = (props: TestGeneratorProps) => {
  const scripts = useTestGeneratorScriptMaker(props);

  return (
    <div className="w-full h-[56px] flex items-center justify-between px-4 rounded-lg bg-impo_Surface_SurfaceVariant">
      <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Body_Medium">
        {scripts.dateScript}
      </CustomTypography>

      <div className="flex items-center gap-2">
        <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
          {scripts.resultScript}
        </CustomTypography>

        <div className="w-[1px] h-[24px] bg-impo_Neutral_Surface" />

        <CustomTypography fontSize="Body_Medium" className="w-[52px] text-impo_Neutral_OnBackground text-center">
          {scripts.typeScript}
        </CustomTypography>
      </div>
    </div>
  );
};

export default TestGenerator;
