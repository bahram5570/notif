import http from '@services/http';

import ArticleIdPageContainer from '@components/pages/articleId/ArticleIdPageContainer';
import { CACHE_REVALIDATE_TIME } from '@constants/app.constants';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import ArticleSchema from '../../schema/ArticleSchema';
import { ArticleIdResponseTypes } from './types';

export const dynamic = 'force-static';
export const revalidate = CACHE_REVALIDATE_TIME;

export const generateMetadata = async (props: { params: { articleId: string } }): Promise<Metadata> => {
  const articleId = props.params.articleId;

  const { data } = await getMetaData(articleId);

  return {
    description: data?.meta || '',
    title: data?.snippetTitle || '',
    robots: { follow: true, index: true },
    alternates: {
      canonical: `${HOST_URL}/${articleId}`,
    },
  };
};

const Article = async (props: { params: { articleId: string } }) => {
  const articleId = props.params.articleId;

  const { data: articleData } = await getArticleData(articleId);
  const { data: metaData } = await getMetaData(articleId);

  if (!articleData || !metaData) {
    throw new Error('Fetch APIs failed!');
  }

  return (
    <>
      <ArticleSchema data={articleData} />
      <ArticleIdPageContainer {...articleData} articleId={articleId} />
    </>
  );
};

export default Article;

const getArticleData = async (articleId: string) => {
  return await http<ArticleIdResponseTypes>({
    method: 'GET',
    tags: [articleId],
    url: `support/article/sp/published/${articleId}`,
  });
};

const getMetaData = async (articleId: string) => {
  return await http<Pick<ArticleIdResponseTypes, 'snippetTitle' | 'meta'>>({
    method: 'GET',
    cache: 'no-store',
    url: `support/article/sp/published/meta/${articleId}`,
  });
};
