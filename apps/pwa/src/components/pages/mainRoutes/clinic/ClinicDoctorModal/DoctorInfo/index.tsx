import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import { DoctorInfoProps } from './types';

const DoctorInfo = ({ firstName, lastName, image, speciliaty, nezamNumber }: DoctorInfoProps) => {
  return (
    <div className="flex flex-col items-center">
      <CustomImage src={image} width={120} height={120} className="rounded-full" />

      <Dark_Typography
        fontSize="Headline_Small"
        className="text-impo_Neutral_OnBackground pt-2"
      >{`دکتر ${firstName} ${lastName}`}</Dark_Typography>

      <Dark_Typography fontSize="Lable_Medium" className="text-impo_Neutral_OnSurface">
        {speciliaty}
      </Dark_Typography>

      <Dark_Typography fontSize="Lable_Medium" className="text-impo_Neutral_OnSurface">
        {`نظام پزشکی ${nezamNumber}`}
      </Dark_Typography>
    </div>
  );
};

export default DoctorInfo;
