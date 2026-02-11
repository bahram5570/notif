import BlueTickIcon from '@assets/shared/icons/blueTick.svg';

import { CustomImage } from '../../../ui/CustomImage';
import { CustomTypography } from '../../../ui/CustomTypography';
import { ShareExperienceGeneratorProps } from './types';

const ShareExperienceGenerator = ({ approvedProfile, avatar, name, text }: ShareExperienceGeneratorProps) => {
  return (
    <div className="flex justify-between gap-2 w-full rounded-xl p-2">
      <div className="flex flex-col items-end gap-1 w-full">
        <div className="flex">
          <CustomTypography fontSize="Lable_Small" className="text-impo_Neutral_OnBackground">
            {name}
          </CustomTypography>

          {approvedProfile && <BlueTickIcon />}
        </div>

        <CustomTypography fontSize="Body_Small" className="text-impo_Surface_OnSurfaceVariant">
          {text}
        </CustomTypography>
      </div>

      <CustomImage src={avatar} width={50} height={50} />
    </div>
  );
};

export default ShareExperienceGenerator;
