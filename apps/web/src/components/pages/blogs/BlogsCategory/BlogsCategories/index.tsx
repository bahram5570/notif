import { useSystem } from '@repo/core/hooks/useSystem';

import BlogsCategoriesBigScreen from './BlogsCategoriesBigScreen';
import BlogsCategoriesSmallScreen from './BlogsCategoriesSmallScreen';
import { BlogsCategoriesTypes } from './types';

const BlogsCategories = ({ categories }: BlogsCategoriesTypes) => {
  const { breakPoint } = useSystem();

  return (
    <div className="w-full py-4 md:py-5">
      {breakPoint.laptop ? (
        <BlogsCategoriesSmallScreen categories={categories} />
      ) : (
        <BlogsCategoriesBigScreen categories={categories} />
      )}
    </div>
  );
};

export default BlogsCategories;
