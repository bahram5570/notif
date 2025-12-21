import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { ItemGeneratorTypes } from './types';

const ItemGenerator = ({ title, description, link, image }: ItemGeneratorTypes) => {
  return (
    <CustomLink href={link} className="flex flex-col items-center w-[64px] h-fit">
      <CustomImage src={image} alt="" width={64} height={64} className="rounded-full pb-2" />

      {title && <CustomTypography className="!text-impo_Neutral_OnBackground">{title}</CustomTypography>}

      <CustomTypography fontSize="Body_Small" className="text-center !text-impo_Surface_Outline">
        {description}
      </CustomTypography>
    </CustomLink>
  );
};

export default ItemGenerator;
