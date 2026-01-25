import Dark_Typography from '@components/ui/Dark_Typography';

import { SpecialistCommentsGeneratorProps } from './types';

const SpecialistCommentsGenerator = ({ isPositive, scripts }: SpecialistCommentsGeneratorProps) => {
  return (
    <div className="flex flex-col gap-2 pt-1">
      {scripts.map((item, index) => (
        <div className="flex flex-row-reverse items-center gap-2" key={index}>
          <div
            className={`
                        w-2 
                        h-2 
                        rounded-full
                        ${isPositive ? 'bg-impo_Green_500' : 'bg-impo_Red_500'}
                      `}
          />

          <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
            {item}
          </Dark_Typography>
        </div>
      ))}
    </div>
  );
};

export default SpecialistCommentsGenerator;
