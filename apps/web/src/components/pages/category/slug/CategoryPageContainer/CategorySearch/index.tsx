'use client';

import BlogsSearch from '@components/Articles/Blogs/BlogsSearch';
import { COLORS_LIST } from '@theme/colors';

const CategorySearch = () => {
  return (
    <div className="w-full border-[1px] rounded-xl mb-10" style={{ borderColor: COLORS_LIST.Surface_OutlineVariant }}>
      <BlogsSearch />
    </div>
  );
};

export default CategorySearch;
