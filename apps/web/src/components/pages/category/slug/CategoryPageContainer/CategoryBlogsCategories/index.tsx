'use client';

import BlogsCategories from '@components/pages/blogs/BlogsCategory/BlogsCategories';
import CustomTypography from '@components/ui/CustomTypography';
import { useSystem } from '@repo/core/hooks/useSystem';

import useFilteredCategoriesList from './__hooks__/useFilteredCategoriesList';
import { CategoryBlogsCategoriesTypes } from './types';

const CategoryBlogsCategories = ({ categoriesList }: CategoryBlogsCategoriesTypes) => {
  const { breakPoint } = useSystem();
  const { filteredCategoriesList } = useFilteredCategoriesList(categoriesList);

  return (
    <div className="w-full pb-10">
      <CustomTypography
        tagType="h3"
        className="px-4 lg:px-0 !text-impo_Neutral_OnBackground"
        fontSize={breakPoint.laptop ? 'Title_Medium' : 'Headline_Medium'}
      >
        دسته بندی‌ها
      </CustomTypography>

      <BlogsCategories categories={filteredCategoriesList} />
    </div>
  );
};

export default CategoryBlogsCategories;
