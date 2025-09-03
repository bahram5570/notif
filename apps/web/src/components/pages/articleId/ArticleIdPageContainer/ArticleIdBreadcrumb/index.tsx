'use client';

import { useEffect } from 'react';

import BlogsBreadcrumb from '@components/Articles/Blogs/BlogsBreadcrumb';
import { CURRENT_CATEGORY } from '@constants/categoryParam.constans';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { ArticleIdBreadcrumbTypes } from './types';

const ArticleIdBreadcrumb = ({ articleTitle, categorySlug, categoryTitle }: ArticleIdBreadcrumbTypes) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();

  const breadcrumbList = [
    { title: 'مقالات', linkTo: '/blogs' },
    { title: categoryTitle, linkTo: `/category/${categorySlug}` },
  ];

  useEffect(() => {
    newQueryParamsHandler({ [CURRENT_CATEGORY]: categorySlug });
  }, []);

  return (
    <div className="min-h-[32px]">
      <BlogsBreadcrumb breadcrumbList={breadcrumbList} />
    </div>
  );
};

export default ArticleIdBreadcrumb;
