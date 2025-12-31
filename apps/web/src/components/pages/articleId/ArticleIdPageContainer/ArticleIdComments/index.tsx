'use client';

import ArticleIdCommentsList from './ArticleIdCommentsList';
import ArticleIdCommentsNewComment from './ArticleIdCommentsNewComment';
import useGetData from './__hooks__/useGetData';
import { ArticleIdCommentsTypes } from './types';

const ArticleIdComments = ({ articleId }: ArticleIdCommentsTypes) => {
  const { isLoading, commentsList, totalCount, pageNo, pageHandler } = useGetData(articleId);

  return (
    <div className="w-full flex flex-col gap-20 border-[1px] border-impo_Neutral_Surface rounded-2xl px-4 md:px-6 py-5">
      <ArticleIdCommentsNewComment articleId={articleId} />

      <ArticleIdCommentsList
        commentsList={commentsList}
        pageHandler={pageHandler}
        totalCount={totalCount}
        isLoading={isLoading}
        pageNo={pageNo}
      />
    </div>
  );
};

export default ArticleIdComments;
