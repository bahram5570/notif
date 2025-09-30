import http from '@services/http';

import BlogsPageContainer from '@components/pages/blogs/BlogsPageContainer';
import { CACHE_REVALIDATE_TIME } from '@constants/app.constants';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import { BlogsResponseTypes } from './types';

export const metadata: Metadata = {
  title: 'مقالات',
  description: 'blogs',
  robots: 'index, follow',
  alternates: {
    canonical: `${HOST_URL}/blogs`,
  },
};

const Blogs = async () => {
  const { data } = await http<BlogsResponseTypes>({
    method: 'GET',
    cache: 'force-cache',
    revalidate: CACHE_REVALIDATE_TIME,
    url: 'support/article/category/1/10',
  });

  if (!data) {
    return <></>;
  }

  return <BlogsPageContainer data={data} />;
};

export default Blogs;
