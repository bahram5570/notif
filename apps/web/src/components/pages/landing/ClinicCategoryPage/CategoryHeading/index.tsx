import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { CategoryHeadingProps } from './types';

const CategoryHeading = ({ categoryText, categoryTitle }: CategoryHeadingProps) => {
  return (
    <section className="text-center mx-4 grid gap-y-2 pb-8">
      <CustomTypography fontSize="Headline_Small" tagType="h1" className="!text-impo_Neutral_OnBackground">
        {categoryTitle}
      </CustomTypography>
      <CustomTypography fontSize="Body_Medium" tagType="p" className="!text-impo_Neutral_OnBackground">
        {categoryText}
      </CustomTypography>
    </section>
  );
};

export default CategoryHeading;
