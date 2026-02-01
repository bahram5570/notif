import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useScriptMaker from './__hooks__/useScriptMaker';
import { TestGeneratorProps } from './types';

const TestGenerator = (props: TestGeneratorProps) => {
  const { dateScript, resultScript } = useScriptMaker(props);

  return (
    <div className="w-full h-[56px] flex items-center justify-between px-4 rounded-lg bg-impo_Surface_SurfaceVariant">
      <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        {dateScript}
      </CustomTypography>

      <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        {resultScript}
      </CustomTypography>
    </div>
  );
};

export default TestGenerator;
