'use client';

import CustomTypography from '@components/ui/CustomTypography';
import { useSystem } from '@repo/core/hooks/useSystem';

import BlogsCategories from './BlogsCategories';
import { BlogsCategoryTypes } from './types';

const BlogsCategory = ({ categories }: BlogsCategoryTypes) => {
  const { breakPoint } = useSystem();

  return (
    <div className="w-full lg:w-10/12 md:max-w-full mx-auto">
      <CustomTypography
        className="px-4 lg:px-0 !text-impo_Neutral_OnBackground"
        fontSize={breakPoint.laptop ? 'Title_Medium' : 'Headline_Medium'}
      >
        دسته بندی‌ها
      </CustomTypography>

      <BlogsCategories categories={categories} />
    </div>
  );
};

export default BlogsCategory;
