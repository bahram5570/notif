import { useEffect } from 'react';

import { HEADER_HEIGHT } from '@components/WomenPageLayout/constants';
import InfiniteScrollContainer from '@components/infiniteScrollContainer';

import CommentItem from './CommentItem';
import CommentsListEmpty from './CommentsListEmpty';
import CreateComment from './CreateComment';
import useGetCommentData from './__hooks__/useGetCommentData';
import { RoutinCommentListPropsType } from './type';

const RoutinCommentList = ({ programId, commentPlaceholder }: RoutinCommentListPropsType) => {
  const { commentsData, isLoading, pageNo, updatePageNo } = useGetCommentData({ programId });

  const hasData = commentsData && commentsData.items.length > 0;

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <InfiniteScrollContainer
        callBack={updatePageNo}
        isLoading={isLoading}
        pageNo={pageNo}
        totalCount={commentsData?.totalCount || 0}
        height={`calc(100dvh - ${HEADER_HEIGHT + 280}px)`}
        style={{ paddingBottom: HEADER_HEIGHT * 4, paddingTop: 50 }}
      >
        <div className=" flex flex-col px-4 gap-3 ">
          {!hasData && !isLoading && <CommentsListEmpty />}
          {hasData &&
            commentsData.items.map((comment, index) => {
              const imageUrl = index % 2 !== 0 ? '/assets/images/Profile2.webp' : '/assets/images/Profile1.webp';

              return <CommentItem {...comment} key={comment.id} imageUrl={imageUrl} />;
            })}
        </div>
      </InfiniteScrollContainer>
      <CreateComment commentPlaceholder={commentPlaceholder} programId={programId} />
    </>
  );
};

export default RoutinCommentList;
