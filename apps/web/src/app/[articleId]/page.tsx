import { completeCacheService } from '@services/cachingServices';
import http from '@services/http';

import ArticleIdPageContainer from '@components/pages/articleId/ArticleIdPageContainer';
import { CACHE_REVALIDATE_TIME } from '@constants/app.constants';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import ArticleSchema from '../../schema/ArticleSchema';
import { ArticleIdResponseTypes } from './types';

export const generateStaticParams = async () => {
  const list: string[] = [];
  return list.map((articleId) => ({ articleId }));
};

export const generateMetadata = async (props: { params: { articleId: string } }): Promise<Metadata> => {
  const articleId = props.params.articleId;

  const { data, error } = await http<Pick<ArticleIdResponseTypes, 'snippetTitle' | 'meta'>>({
    method: 'GET',
    cache: 'force-cache',
    revalidate: CACHE_REVALIDATE_TIME,
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

  const data = await completeCacheService<ArticleIdResponseTypes>(`support/article/sp/published/${articleId}`);

  if (!data) {
    return <></>;
  }

  return (
    <>
      <ArticleSchema data={data} />
      <ArticleIdPageContainer {...data} articleId={articleId} />
    </>
  );
};

export default Article;
