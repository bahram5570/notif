import http from '@services/http';

import ArticleIdPageContainer from '@components/pages/articleId/ArticleIdPageContainer';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ArticleSchema from '../../schema/ArticleSchema';
import { ArticleIdResponseTypes } from './types';

const getArticleData = async (id: string) => {
  return await http<ArticleIdResponseTypes>({
    method: 'GET',
    cache: 'no-store',
    url: `support/article/sp/published/${id}`,
  });
};

export const generateMetadata = async ({ params }: { params: { articleId: string } }): Promise<Metadata> => {
  const { data, error } = await getArticleData(params.articleId);

  if (data) {
    return {
      robots: 'index, follow',
      description: data.meta || '',
      title: data.snippetTitle || '',
      alternates: {
        canonical: `${HOST_URL}/${params.articleId}`,
      },
    };
  } else {
    return {
      title: error?.message,
    };
  }
};

const Article = async (props: { params: { articleId: string } }) => {
  const articleId = props.params.articleId;

  const { data } = await getArticleData(articleId);

  if (!data) {
    notFound();
  }

  return (
    <>
      <ArticleSchema data={data} />
      <ArticleIdPageContainer {...data} articleId={articleId} />
    </>
  );
};

export default Article;
