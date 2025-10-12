import http from '@services/http';

import BlogsPageContainer from '@components/pages/blogs/BlogsPageContainer';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

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
  const { data, error } = await http<BlogsResponseTypes>({
    method: 'GET',
    cache: 'no-store',
    url: 'support/article/category/1/10',
  });

  if (error) {
    notFound();
  }

  if (!data) {
    return <></>;
  }

  return <BlogsPageContainer data={data} />;
};

export default Blogs;
