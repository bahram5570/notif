import http from '@services/http';

import ArticleIdPageContainer from '@components/pages/articleId/ArticleIdPageContainer';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ArticleSchema from '../../schema/ArticleSchema';
import { ArticleIdResponseTypes } from './types';

export const generateMetadata = async (props: { params: { articleId: string } }): Promise<Metadata> => {
  const articleId = props.params.articleId;

  const { data, error } = await http<Pick<ArticleIdResponseTypes, 'snippetTitle' | 'meta'>>({
    method: 'GET',
    cache: 'no-store',
    url: `support/article/sp/published/meta/${articleId}`,
  });

  if (data) {
    return {
      robots: 'index, follow',
      description: data.meta || '',
      title: data.snippetTitle || '',
      alternates: {
        canonical: `${HOST_URL}/${articleId}`,
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

  const { data } = await http<ArticleIdResponseTypes>({
    method: 'GET',
    cache: 'no-store',
    url: `support/article/sp/published/${articleId}`,
  });

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
