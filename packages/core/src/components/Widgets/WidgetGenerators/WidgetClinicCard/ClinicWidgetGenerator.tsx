import { textShorter } from '../../../../utils/scripts';

import { CustomImage } from '../../../ui/CustomImage';
import { CustomTypography } from '../../../ui/CustomTypography';
import { ClinicWidgetGeneratorProps } from './types';

const ClinicWidgetGenerator = ({
  doctorImage,
  subtitle,
  tailing,
  action,
  title,
  image,
}: ClinicWidgetGeneratorProps) => {
  return (
    <div
      // onClick={action}
      className="relative flex flex-col justify-center items-end h-14 rounded-xl py-4 pr-16 w-[calc(100%_-_16px)] bg-impo_Surface_SurfaceVariant dark:bg-[#2A2A2A]"
    >
      <CustomImage
        src={image}
        width={72}
        objectFit="cover"
        className="absolute -right-[20px] bottom-0 rounded-full border-[1px] border-impo_Neutral_Background dark:border-impo_White"
      />
      <CustomImage
        src={doctorImage}
        width={36}
        objectFit="cover"
        className="absolute right-[20px] bottom-0 rounded-full border-[1px] z-10 border-impo_Neutral_Background dark:border-impo_White"
      />

      <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
        {title}
      </CustomTypography>

      <div className="flex items-baseline gap-1 ">
        <CustomTypography fontSize="Lable_Small" className="text-impo_Neutral_OnBackground">
          {textShorter(tailing, 20)}
        </CustomTypography>

        <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          {subtitle}
        </CustomTypography>
      </div>
    </div>
  );
};

export default ClinicWidgetGenerator;
