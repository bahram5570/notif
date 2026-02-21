import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { CardGeneratorTypes } from './types';

const CardGenerator = ({ Icon, description, title }: CardGeneratorTypes) => {
  return (
    <div className="w-full h-[60px] md:h-[64px] flex items-center gap-3 px-[12px] md:px-[18px] py-[8px] rounded-xl bg-impo_Surface_SurfaceVariant">
      <div className="w-6 h-6 min-w-6 min-h-6">
        <Icon className="w-full h-auto stroke-impo_Primary_Primary" />
      </div>

      <div className="flex flex-col gap-1">
        <CustomTypography fontSize="Body_Small" className="!text-impo_Neutral_OnBackground">
          {title}:
        </CustomTypography>

        <CustomTypography fontSize="Body_Small" className="!text-impo_Neutral_OnSurface">
          {description}
        </CustomTypography>
      </div>
    </div>
  );
};

export default CardGenerator;
