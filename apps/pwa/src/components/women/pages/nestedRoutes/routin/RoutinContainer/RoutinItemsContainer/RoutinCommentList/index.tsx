import { useEffect } from 'react';

import InfiniteScrollContainer from '@components/infiniteScrollContainer';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';

import CommentItem from './CommentItem';
import CommentsListEmpty from './CommentsListEmpty';
import CreateComment from './CreateComment';
import CreatedCommentSuccessTost from './CreatedCommentSuccessTost';
import useGetCommentData from './__hooks__/useGetCommentData';
import { RoutinCommentListPropsType } from './type';

const RoutinCommentList = ({ programId, commentPlaceholder }: RoutinCommentListPropsType) => {
  const { callApi, commentsData, isLoading, pageNo, updatePageNo } = useGetCommentData({ programId });

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
        callApi={callApi}
        isLoading={isLoading}
        pageNo={pageNo}
        updatePageNo={updatePageNo}
        totalCount={commentsData?.totalCount || 10}
        height={500}
      >
        <CreatedCommentSuccessTost />
        <div className=" flex flex-col px-4 gap-3 " style={{ paddingTop: 50, paddingBottom: HEADER_HEIGHT * 2 }}>
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
