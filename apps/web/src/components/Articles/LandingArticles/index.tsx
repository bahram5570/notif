import http from '@services/http';

import { CACHE_REVALIDATE_TIME } from '@constants/app.constants';

import LandingArticlesContainer from './LandingArticlesContainer';
import { LandingArticlesResponseTypes, LandingArticlesTypes } from './types';

const LandingArticles = async ({ url, title, subTitle, showAllArticlesLinkTo }: LandingArticlesTypes) => {
  const data = await http<LandingArticlesResponseTypes>({
    url,
    method: 'GET',
    cache: 'force-cache',
    revalidate: CACHE_REVALIDATE_TIME,
  });

  return (
    <LandingArticlesContainer
      title={title}
      subTitle={subTitle}
      data={data.data?.articles}
      showAllArticlesLinkTo={showAllArticlesLinkTo}
    />
  );
};

export default LandingArticles;
