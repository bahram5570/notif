import { completeCacheService } from '@services/cachingServices';
import http from '@services/http';

import { BlogsResponseTypes } from '@app/blogs/types';
import CategoryPageContainer from '@components/pages/category/slug/CategoryPageContainer';
import { CACHE_REVALIDATE_TIME } from '@constants/app.constants';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import CategorySchema from '../../../schema/CategorySchema';
import { CategoryResponseTypes } from './types';

export const generateStaticParams = async () => {
  const list: string[] = [];
  return list.map((slug) => ({ slug }));
};

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
  const { data, error } = await http<Pick<CategoryResponseTypes, 'title'>>({
    method: 'GET',
    cache: 'force-cache',
    revalidate: CACHE_REVALIDATE_TIME,
    url: `support/article/category/meta/${params.slug}`,
  });

  if (data) {
    return {
      title: data.title,
      description: 'category',
      robots: { follow: true, index: true },
      alternates: {
        canonical: `${HOST_URL}/category/${params.slug}`,
      },
    };
  } else {
    return {
      title: error?.message,
    };
  }
};

const Category = async ({ params }: { params: { slug: string } }) => {
  const categoriesListData = await completeCacheService<BlogsResponseTypes>('support/article/category/1/100');
  const categoryData = await completeCacheService<CategoryResponseTypes>(`support/article/category/${params.slug}`);

  if (!categoriesListData || !categoryData) {
    return <></>;
  }

  return (
    <>
      <CategorySchema id={params.slug} />
      <CategoryPageContainer categoryData={categoryData} categoriesList={categoriesListData.categories} />;
    </>
  );
};

export default Category;
