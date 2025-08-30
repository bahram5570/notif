import InfiniteScrollContainer from '@components/infiniteScrollContainer';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';

import CommentItem from './CommentItem';
import CommentsListEmpty from './CommentsListEmpty';
import useGetCommentData from './__hooks__/useGetCommentData';
import { RoutinCommentListPropsType } from './type';

const RoutinCommentList = ({ programId }: RoutinCommentListPropsType) => {
  const { callApi, commentsData, isLoading, pageNo, updatePageNo } = useGetCommentData({ programId });
  const hasData = commentsData && commentsData.items.length > 0;

  return (
    <>
      <InfiniteScrollContainer
        callApi={callApi}
        isLoading={isLoading}
        pageNo={pageNo}
        updatePageNo={updatePageNo}
        totalCount={commentsData?.totalCount || 10}
      >
        <div
          className="relative flex flex-col px-4 gap-3"
          style={{ paddingTop: HEADER_HEIGHT + 16, paddingBottom: HEADER_HEIGHT * 2 }}
        >
          {!hasData && <CommentsListEmpty />}
          {hasData &&
            commentsData.items.map((comment) => {
              return <CommentItem {...comment} key={comment.id} />;
            })}
        </div>
      </InfiniteScrollContainer>
    </>
  );
};

export default RoutinCommentList;
