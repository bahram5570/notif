import { handleBodyUpdate } from './__utils__';
import { articleImageUrl, fileImageUrl } from '@services/http';

import DownloadApp from '@components/DownloadApp/DownloadAppWomen';
import HeaderFooterContainer from '@components/HeaderFooterContainer';
import CustomImage from '@components/ui/CustomImage';
import dynamic from 'next/dynamic';

import ArticleAutomaition from './ArticleAutomaition';
import ArticleIdAuthor from './ArticleIdAuthor';
import ArticleIdBeforeAfter from './ArticleIdBeforeAfter';
import ArticleIdBreadcrumb from './ArticleIdBreadcrumb';
import ArticleIdComments from './ArticleIdComments';
import ArticleIdContents from './ArticleIdContents';
import ArticleIdFaq from './ArticleIdFaq';
import ArticleIdHeading from './ArticleIdHeading';
import ArticleIdProfile from './ArticleIdProfile';
import ArticleIdScore from './ArticleIdScore';
import ArticleIdSubjectsList from './ArticleIdSubjectsList';
import { ArticleIdPageContainerTypes } from './types';

const QrCode = dynamic(() => import('@components/QrCode'), { ssr: false });
const ArticleIdSearch = dynamic(() => import('./ArticleIdSearch'), { ssr: false });
const ArticleIdSampleArticles = dynamic(() => import('./ArticleIdSampleArticles'), { ssr: false });
const ArticleLandingComponents = dynamic(() => import('./ArticleLandingComponents'), { ssr: false });

const ArticleIdPageContainer = async (props: ArticleIdPageContainerTypes) => {
  const { abstractBody, articleBody, articleSubjectList } = await handleBodyUpdate(props.body);

  const visitCardUrl = props.doctor?.visitCard ? fileImageUrl + props.doctor.visitCard : '/assets/images/notLoaded.svg';
  const authorImageUrl = props.author.authorPic
    ? articleImageUrl + props.author.authorPic
    : '/assets/images/notLoaded.svg';

  return (
    <HeaderFooterContainer isArticlePage={true} hasFooterLink={true}>
      {props.contentCategory && <ArticleAutomaition contentCategory={props.contentCategory} />}

      <div className="relative w-full flex justify-center">
        <article className=" flex flex-col gap-6 md:gap-12 pt-[100px] md:pt-[150px] landing_container px-4 md:px-0">
          <div className="w-full min-h-[42px]">
            <ArticleIdSearch />
          </div>

          <QrCode className="!top-[620px] lg:!top-[415px] xl:!top-[400px]" />

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
            authorPic={props.author.authorPic}
            id={props.author.id}
          />

          <ArticleLandingComponents body={props.body} />

          <ArticleIdHeading imageCover={props.imageCover} title={props.title} />

          <ArticleIdContents body={abstractBody} />

          <div className="w-full min-h-[71px]">
            <ArticleIdSubjectsList articleSubjectList={articleSubjectList} />
          </div>

          <ArticleIdContents body={articleBody} />

          {props.doctor && (
            <CustomImage
              width={960}
              height={960}
              quality={100}
              src={visitCardUrl}
              alt={props.doctor.name}
              className="w-full h-auto rounded-2xl"
            />
          )}

          <ArticleIdFaq faqs={props.faqs} />

          {props.doctor && (
            <ArticleIdAuthor authorName={props.author.authorName} authorPic={authorImageUrl} id={props.author.id} />
          )}
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
