import CustomTypography from '@components/ui/CustomTypography';
import { CategoryHeadingProps } from './types';

const CategoryHeading = ({ categoryText, categoryTitle }: CategoryHeadingProps) => {
    
    return (
        <section className='text-center mx-4 grid gap-y-2 pb-8'>
            <CustomTypography fontSize="Headline_Small" tagType='h1'>{categoryTitle}</CustomTypography>
            <CustomTypography fontSize="Body_Medium" tagType='p'>{categoryText}</CustomTypography>
        </section>
    )
}

export default CategoryHeading;