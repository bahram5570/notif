import { COLORS_LIST } from '@theme/colors';
import dynamic from 'next/dynamic';

const BlogsSearch = dynamic(() => import('@components/Articles/Blogs/BlogsSearch'), { ssr: false });

const ArticleIdSearch = () => {
  return (
    <div
      className="w-full min-h-[42px] border-[1px] rounded-xl"
      style={{ borderColor: COLORS_LIST.Surface_OutlineVariant }}
    >
      <BlogsSearch />
    </div>
  );
};

export default ArticleIdSearch;
