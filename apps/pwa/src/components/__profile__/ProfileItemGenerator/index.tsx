import Dark_Typography from '@components/ui/Dark_Typography';

import { ProfileItemGeneratorTypes } from './types';

const ProfileItemGenerator = ({ title, description, element, children }: ProfileItemGeneratorTypes) => {
  return (
    <>
      <div className="w-full flex items-center justify-between gap-1 pb-2">
        {element}

        <div className="w-full flex flex-col items-end">
          <Dark_Typography fontSize="Lable_LargeProminet" className="text-impo_Primary_Primary">
            {title}
          </Dark_Typography>

          <Dark_Typography fontSize="Body_Small" className="pt-1 text-impo_Surface_Outline">
            {description}
          </Dark_Typography>
        </div>
      </div>

      <>{children}</>
    </>
  );
};

export default ProfileItemGenerator;
