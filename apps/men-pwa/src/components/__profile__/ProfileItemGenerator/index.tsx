import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { ProfileItemGeneratorTypes } from './types';

const ProfileItemGenerator = ({ title, description, element, children }: ProfileItemGeneratorTypes) => {
  return (
    <>
      <div className="w-full flex items-center justify-between gap-1 pb-2">
        {element}

        <div className="w-full flex flex-col items-end">
          <CustomTypography fontSize="Lable_MediumProminet" className="text-impo_PrimaryMan_PrimaryMan">
            {title}
          </CustomTypography>

          <CustomTypography fontSize="Body_Small" className="pt-1 text-impo_Surface_Outline">
            {description}
          </CustomTypography>
        </div>
      </div>

      <>{children}</>
    </>
  );
};

export default ProfileItemGenerator;
