import http from '@services/http';

import AuthorPageContainer from '@components/pages/author/slug/AuthorPageContainer';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { AuthorMainResponseTypes } from './types';

const getAuthorData = async (id: string) => {
  return await http<AuthorMainResponseTypes>({
    method: 'GET',
    cache: 'no-store',
    url: `support/article/author/${id}`,
  });
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { data, error } = await getAuthorData(params.slug);

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
}

const Author = async ({ params }: { params: { slug: string } }) => {
  const { data } = await getAuthorData(params.slug);

  if (!data) {
    notFound();
  }

  return <AuthorPageContainer {...data} />;
};

export default Author;
