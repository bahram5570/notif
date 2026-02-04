import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { SpecialistInfoGeneratorProps } from './types';

const SpecialistInfoGenerator = ({
  nezamNumber,
  isSelected,
  speciliaty,
  firstName,
  lastName,
  isOnline,
  image,
}: SpecialistInfoGeneratorProps) => {
  return (
    <div
      className={`
                  flex 
                  flex-row-reverse 
                  items-center 
                  gap-1 
                  w-full 
                  p-2 
                  rounded-xl 
                  mt-2 
                  ${isSelected ? 'bg-impo_White' : 'bg-impo_Neutral_Surface '}
                `}
    >
      <div className="relative w-12 h-12 min-w-12 min-h-12 rounded-full">
        <CustomImage src={image} width={48} height={48} className="rounded-full" />

        {isOnline && (
          <div className="absolute right-0 bottom-0 w-[14px] h-[14px] p-[2px] rounded-full bg-impo_White z-10">
            <div className="w-full h-full rounded-full bg-impo_Green_500" />
          </div>
        )}
      </div>

      <div className="flex flex-col items-end gap-1">
        <CustomTypography
          fontSize="Lable_Medium"
          className={`${isSelected ? 'text-impo_Black' : 'text-impo_Neutral_OnBackground'}`}
        >{`${firstName} ${lastName}`}</CustomTypography>

        <div className="flex items-center gap-2">
          <CustomTypography
            fontSize="Lable_Small"
            className={`${isSelected ? 'text-impo_Black' : 'text-impo_Surface_InverseSurface'}`}
          >
            {`ش.ن: ${nezamNumber}`}
          </CustomTypography>

          <div className={`w-[1px] h-4 ${isSelected ? 'text-impo_Black' : 'bg-impo_Surface_OutlineVariant'}`} />

          <CustomTypography
            fontSize="Lable_Small"
            className={`${isSelected ? 'text-impo_Black' : 'text-impo_Surface_InverseSurface'}`}
          >
            {speciliaty}
          </CustomTypography>
        </div>
      </div>
    </div>
  );
};

export default SpecialistInfoGenerator;
