import { completeCacheService } from '@services/cachingServices';

import BlogsPageContainer from '@components/pages/blogs/BlogsPageContainer';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import { BlogsResponseTypes } from './types';

export const metadata: Metadata = {
  title: 'مقالات',
  description: 'blogs',
  robots: { follow: true, index: true },
  alternates: {
    canonical: `${HOST_URL}/blogs`,
  },
};

const Blogs = async () => {
  const data = await completeCacheService<BlogsResponseTypes>('support/article/category/1/10');

  if (!data) {
    return <></>;
  }

  return <BlogsPageContainer data={data} />;
};

export default Blogs;
