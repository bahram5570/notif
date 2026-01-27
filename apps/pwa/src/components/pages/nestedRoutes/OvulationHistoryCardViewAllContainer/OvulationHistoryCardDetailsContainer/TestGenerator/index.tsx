import Dark_Typography from '@components/ui/Dark_Typography';

import useScriptMaker from './__hooks__/useScriptMaker';
import { TestGeneratorProps } from './types';

const TestGenerator = (props: TestGeneratorProps) => {
  const { dateScript, resultScript } = useScriptMaker(props);

  return (
    <div className="w-full h-[56px] flex items-center justify-between px-4 rounded-lg bg-impo_Surface_SurfaceVariant">
      <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        {dateScript}
      </Dark_Typography>

      <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        {resultScript}
      </Dark_Typography>
    </div>
  );
};

export default TestGenerator;
