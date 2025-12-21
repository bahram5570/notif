'use client';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { ItemProps } from './types';

const CategoryItem = ({ image, name, type }: ItemProps) => {
  return (
    <CustomLink
      href={`clinic/${type}`}
      className="grid items-start justify-normal justify-self-center justify-items-center gap-2 w-full"
    >
      <CustomImage
        alt={name}
        height={64}
        width={64}
        src={image}
        className="rounded-[13px] bg-impo_Surface_SurfaceVariant"
      />
      <CustomTypography fontSize="Body_Small" className="text-center !text-impo_Neutral_OnBackground">
        {name}
      </CustomTypography>
    </CustomLink>
  );
};
export default CategoryItem;
