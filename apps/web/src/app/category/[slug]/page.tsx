import http from '@services/http';

import { BlogsResponseTypes } from '@app/blogs/types';
import CategoryPageContainer from '@components/pages/category/slug/CategoryPageContainer';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import CategorySchema from '../../../schema/CategorySchema';
import { CategoryResponseTypes, CategoryValidationTypes } from './types';

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
  const { data, error } = await http<Pick<CategoryResponseTypes, 'title'>>({
    method: 'GET',
    cache: 'no-store',
    url: `support/article/category/meta/${params.slug}`,
  });

  if (data) {
    return {
      title: data.title,
      description: 'category',
      robots: { index: true, follow: true },
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
  const { data: categoryData, error: categoryError } = await http<CategoryResponseTypes>({
    method: 'GET',
    cache: 'no-store',
    url: `support/article/category/${params.slug}`,
  });

  const { data: categoriesListData, error: categoriesListError } = await http<BlogsResponseTypes>({
    method: 'GET',
    cache: 'no-store',
    url: 'support/article/category/1/100',
  });

  if (categoryError || categoriesListError) {
    notFound();
  }

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

  return <></>;
};
