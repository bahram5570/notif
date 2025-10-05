import { completeCacheService } from '@services/cachingServices';
import http from '@services/http';

import AuthorPageContainer from '@components/pages/author/slug/AuthorPageContainer';
import { CACHE_REVALIDATE_TIME } from '@constants/app.constants';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import { AuthorMainResponseTypes } from './types';

export const generateStaticParams = async () => {
  const list: string[] = [];
  return list.map((slug) => ({ slug }));
};

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
  const { data, error } = await http<AuthorMainResponseTypes>({
    method: 'GET',
    cache: 'force-cache',
    revalidate: CACHE_REVALIDATE_TIME,
    url: `support/article/author/${params.slug}`,
  });

  if (data) {
    return {
      title: data.authorName,
      description: data.description,
      alternates: {
        canonical: `${HOST_URL}/author/${params.slug}`,
      },
    };
  } else {
    return {
      title: error?.message,
    };
  }
};

const Author = async ({ params }: { params: { slug: string } }) => {
  const data = await completeCacheService<AuthorMainResponseTypes>(`support/article/author/${params.slug}`);

  if (!data) {
    return <></>;
  }

  return <AuthorPageContainer {...data} />;
};

export default Author;
