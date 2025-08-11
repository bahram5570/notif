'use client'

import CustomImage from '@components/ui/CustomImage';
import { ItemProps } from './types';
import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';
import CustomLink from '@components/ui/CustomLink';

const CategoryItem = ({ image, name, type }: ItemProps) => {
    return (
        <CustomLink href={`clinic/${type}`} className='grid items-start justify-normal justify-self-center justify-items-center gap-2 w-full'>
            <CustomImage
                alt={name}
                height={64}
                width={64}
                src={image}
                style={{ backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
                className='rounded-[13px]'
            />
            <CustomTypography fontSize="Body_Small" className='text-center'>{name}</CustomTypography>
        </CustomLink>
    )
}
export default CategoryItem;