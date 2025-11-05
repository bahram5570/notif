import { completeCacheService } from '@services/cachingServices';
import http from '@services/http';

import ArticleIdPageContainer from '@components/pages/articleId/ArticleIdPageContainer';
import NotFoundPage from '@components/pages/notFound/NotFoundPage';
import { CACHE_REVALIDATE_TIME } from '@constants/app.constants';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ArticleSchema from '../../schema/ArticleSchema';
import { ArticleIdResponseTypes } from './types';

// export const generateStaticParams = async () => {
//   const list: string[] = [];
//   return list.map((articleId) => ({ articleId }));
// };

// export const revalidate = CACHE_REVALIDATE_TIME;
export const revalidate = 30;
export const dynamic = 'force-static';

// export const generateMetadata = async (props: { params: { articleId: string } }): Promise<Metadata> => {
export const generateMetadata = async (props: { params: { articleId: string } }) => {
  const articleId = props.params.articleId;

  const data = await completeCacheService<Pick<ArticleIdResponseTypes, 'snippetTitle' | 'meta'>>(
    `support/article/sp/published/meta/${articleId}`,
  );

  // const { data, error } = await http<Pick<ArticleIdResponseTypes, 'snippetTitle' | 'meta'>>({
  //   method: 'GET',
  //   cache: 'force-cache',
  //   revalidate: CACHE_REVALIDATE_TIME,
  //   url: `support/article/sp/published/meta/${articleId}`,
  // });

  if (data) {
    return {
      robots: { follow: true, index: true },
      description: data.meta || '',
      title: data.snippetTitle || '',
      alternates: {
        canonical: `${HOST_URL}/${articleId}`,
      },
    };
  }

  return {
    robots: { follow: false, index: false },
    description: '',
    title: '',
    alternates: {
      canonical: ``,
    },
  };
};

const Article = async (props: { params: { articleId: string } }) => {
  const articleId = props.params.articleId;

  const articledata = await completeCacheService<ArticleIdResponseTypes>(`support/article/sp/published/${articleId}`);
  const metadata = await completeCacheService<Pick<ArticleIdResponseTypes, 'snippetTitle' | 'meta'>>(
    `support/article/sp/published/meta/${articleId}`,
  );

  console.log('fetching = ', articleId);

  if (!articledata || !metadata) {
    return <NotFoundPage />;
    // notFound();
    // return <></>;
  }

  return (
    <>
      <ArticleSchema data={articledata} />
      <ArticleIdPageContainer {...articledata} articleId={articleId} />
    </>
  );
};

export default Article;
