import { InfiniteScrollContainer } from '@repo/core/components/infiniteScrollContainer';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import CommentItem from './CommentItem';
import CommentsListEmpty from './CommentsListEmpty';
import CreateComment from './CreateComment';
import useGetCommentData from './__hooks__/useGetCommentData';
import { RoutinCommentListPropsType } from './type';

const RoutinCommentList = ({ programId, commentPlaceholder, scrollRef }: RoutinCommentListPropsType) => {
  const { commentsData, isLoading, pageNo, updatePageNo } = useGetCommentData({ programId });

  const hasData = commentsData && commentsData.items.length > 0;

  return (
    <>
      <InfiniteScrollContainer
        callBack={updatePageNo}
        isLoading={isLoading}
        pageNo={pageNo}
        scrollContainerRef={scrollRef}
        totalCount={commentsData?.totalCount || 0}
        style={{ paddingBottom: HEADER_HEIGHT, paddingTop: 50 }}
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
