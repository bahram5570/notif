import http from '@services/http';

import { BlogsResponseTypes } from '@app/blogs/types';
import CategoryPageContainer from '@components/pages/category/slug/CategoryPageContainer';
import { CACHE_REVALIDATE_TIME } from '@constants/app.constants';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import CategorySchema from '../../../schema/CategorySchema';
import { CategoryResponseTypes, CategoryValidationTypes } from './types';

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
  const { data: categoryData } = await http<CategoryResponseTypes>({
    method: 'GET',
    cache: 'force-cache',
    revalidate: CACHE_REVALIDATE_TIME,
    url: `support/article/category/${params.slug}`,
  });

  const { data: categoriesListData } = await http<BlogsResponseTypes>({
    method: 'GET',
    cache: 'force-cache',
    revalidate: CACHE_REVALIDATE_TIME,
    url: 'support/article/category/1/100',
  });

  return (
    <>
      <CategorySchema id={params.slug} />
      <CategoryValidation categoriesListData={categoriesListData} categoryData={categoryData} />
    </>
  );
};

export default Category;

const CategoryValidation = async ({ categoriesListData, categoryData }: CategoryValidationTypes) => {
  if (categoryData && categoriesListData) {
    return <CategoryPageContainer categoryData={categoryData} categoriesList={categoriesListData.categories} />;
  }

  notFound();
};
