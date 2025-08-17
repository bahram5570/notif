import { handleBodyUpdate } from './__utils__';
import { fileImageUrl } from '@services/http';

import DownloadApp from '@components/DownloadApp/DownloadAppWomen';
import HeaderFooterContainer from '@components/HeaderFooterContainer';
import QrCode from '@components/QrCode';
import CustomImage from '@components/ui/CustomImage';
import dynamic from 'next/dynamic';

import ArticleIdBeforeAfter from './ArticleIdBeforeAfter';
import ArticleIdBreadcrumb from './ArticleIdBreadcrumb';
import ArticleIdContents from './ArticleIdContents';
import ArticleIdFaq from './ArticleIdFaq';
import ArticleIdHeading from './ArticleIdHeading';
import ArticleIdProfile from './ArticleIdProfile';
import ArticleIdSampleArticles from './ArticleIdSampleArticles';
import ArticleIdScore from './ArticleIdScore';
import ArticleIdSubjectsList from './ArticleIdSubjectsList';
import ArticleLandingComponents from './ArticleLandingComponents';
import { ArticleIdPageContainerTypes } from './types';

const ArticleIdComments = dynamic(() => import('./ArticleIdComments'), { ssr: false });
const ArticleIdSearch = dynamic(() => import('./ArticleIdSearch'), { ssr: false });

const ArticleIdPageContainer = async (props: ArticleIdPageContainerTypes) => {
  const { updatedBody, articleSubjectList } = await handleBodyUpdate(props.body);

  const visitCardUrl = props.doctor?.visitCard ? fileImageUrl + props.doctor.visitCard : '/assets/images/notLoaded.svg';

  return (
    <HeaderFooterContainer isArticlePage={true} hasFooterLink={true}>
      <div className="relative w-full flex justify-center">
        <article className="w-full flex flex-col gap-6 md:gap-12 pt-[100px] md:pt-[150px] sm:w-9/12 md:w-8/12 lg:w-6/12 px-4 md:px-0">
          <ArticleIdSearch />

          <QrCode className="xl:top-[400px] top-[620px] lg:top-[415px]" />

          <ArticleIdBreadcrumb
            categoryTitle={props.categories[0].title}
            categorySlug={props.categories[0].slug}
            articleTitle={props.title}
          />

          <ArticleIdProfile
            wordsCount={props.body.trim().split(/\s+/).length}
            profileImage={props.doctor?.profileImage}
            authorName={props.author.authorName}
            commentCount={props.commentCount}
            publishTime={props.publishTime}
            rateCount={props.rateCount}
            name={props.doctor?.name}
            id={props.author.id}
          />

          <ArticleLandingComponents body={props.body} />

          <ArticleIdHeading imageCover={props.imageCover} title={props.title} />

          <ArticleIdSubjectsList articleSubjectList={articleSubjectList} />

          <ArticleIdContents body={updatedBody} />

          {props.doctor && (
            <CustomImage
              height={960}
              width={960}
              quality={80}
              src={visitCardUrl}
              alt={props.doctor.name}
              className="w-full h-auto rounded-2xl"
            />
          )}

          <ArticleIdFaq faqs={props.faqs} />

          <ArticleIdScore rate={props.rate} rateCount={props.rateCount} />

          <ArticleIdBeforeAfter after={props.after} before={props.before} />

          <ArticleIdComments articleId={props.articleId} />
        </article>
      </div>

      <div className="w-full flex flex-col gap-12 py-12">
        <ArticleIdSampleArticles categoryTitle={props.categories[0].title} categoryId={props.categories[0].id} />

        <DownloadApp />
      </div>
    </HeaderFooterContainer>
  );
};

export default ArticleIdPageContainer;
