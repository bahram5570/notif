import Typography from '@components/ui/Typography';

import { ProfileItemGeneratorTypes } from './types';

const ProfileItemGenerator = ({ title, description, element, children }: ProfileItemGeneratorTypes) => {
  return (
    <>
      <div className="w-full flex items-center justify-between gap-1 pb-2">
        {element}

        <div className="w-full flex flex-col items-end">
          <Typography scale="Lable" size="LargeProminet" color="PrimaryWoman_Primary">
            {title}
          </Typography>

          <Typography scale="Body" size="Small" color="Surface_Outline" className="pt-1">
            {description}
          </Typography>
        </div>
      </div>

      <>{children}</>
    </>
  );
};

export default ProfileItemGenerator;
