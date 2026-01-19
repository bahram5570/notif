import Dark_Typography from '@components/ui/Dark_Typography';

import useTestGeneratorScriptMaker from './__hooks__/useTestGeneratorScriptMaker';
import { TestGeneratorProps } from './types';

const TestGenerator = (props: TestGeneratorProps) => {
  const scripts = useTestGeneratorScriptMaker(props);

  return (
    <div className="w-full h-[56px] flex items-center justify-between px-4 rounded-lg bg-impo_Surface_SurfaceVariant">
      <Dark_Typography className="text-impo_Neutral_OnBackground" fontSize="Body_Medium">
        {scripts.dateScript}
      </Dark_Typography>

      <div className="flex items-center gap-2">
        <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
          {scripts.resultScript}
        </Dark_Typography>

        <div className="w-[1px] h-[24px] bg-impo_Neutral_Surface" />

        <Dark_Typography fontSize="Body_Medium" className="w-[52px] text-impo_Neutral_OnBackground text-center">
          {scripts.typeScript}
        </Dark_Typography>
      </div>
    </div>
  );
};

export default TestGenerator;
