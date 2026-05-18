import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import RadioButton from '@components/ui/RadioButton';

import { ShareExperienceNewTopicsGeneratorProps } from './types';

const ShareExperienceNewTopicsGenerator = ({
  isFirstIndex,
  isSelected,
  onSelect,
  image,
  name,
}: ShareExperienceNewTopicsGeneratorProps) => {
  return (
    <div
      onClick={onSelect}
      className={`
                  w-full 
                  flex 
                  items-center 
                  justify-between 
                  py-2 
                  cursor-pointer
                  border-t-[1px] 
                  ${isFirstIndex ? 'border-t-impo_Transparent' : 'border-t-impo_Surface_SurfaceVariant'}
                `}
    >
      <div className="w-12 h-12 min-h-12 min-w-12 rounded-full">
        <CustomImage_NEW src={image} fill className="rounded-full" />
      </div>

      <div className="flex items-center gap-2">
        <CustomTypography fontSize="Lable_Medium" className="text-impo_Surface_InverseSurface">
          {name}
        </CustomTypography>

        <RadioButton isChecked={isSelected} />
      </div>
    </div>
  );
};

export default ShareExperienceNewTopicsGenerator;
