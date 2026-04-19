import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { DoctorInfoProps } from './types';

const DoctorInfo = ({ firstName, lastName, image, speciliaty, nezamNumber }: DoctorInfoProps) => {
  return (
    <div className="flex flex-col items-center">
      <CustomImage src={image} width={120} height={120} className="rounded-full object-cover" />

      <CustomTypography
        fontSize="Headline_Small"
        className="text-impo_Neutral_OnBackground pt-2"
      >{`${firstName} ${lastName}`}</CustomTypography>

      <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnSurface">
        {speciliaty}
      </CustomTypography>

      <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnSurface">
        {`نظام پزشکی ${nezamNumber}`}
      </CustomTypography>
    </div>
  );
};

export default DoctorInfo;
