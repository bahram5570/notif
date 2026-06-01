import { useRef } from 'react';

import { InfiniteList } from '@repo/core/components/InfiniteList';
import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import {
  ContentsSectionModule,
  Loading,
  NewPostLink,
  SHARE_EXPERIENCE_NEW_REPLY_MODAL_QUERY_NAME,
} from '@repo/core/components/ShareExperience';

import { FOOTER_HEIGHT } from '@repo/core/constants/app.constants';
import { useOverflowHandler } from '@repo/core/hooks/useOverflowHandler';

import CommentsBottomPart from './CommentsBottomPart';
import CommentsGenerator from './CommentsList/CommentsGenerator';
import CommentsListEmpty from './CommentsList/CommentsListEmpty';
import useCommentsList from './CommentsList/__hooks__/useCommentsList';
import CommentsTopPart from './CommentsTopPart';
import useNewCommentQueries from './__hooks__/useNewCommentQueries';
import { ShareExperienceCommentsModalContainerProps } from './types';

const ShareExperienceCommentsModalContainer = (props: ShareExperienceCommentsModalContainerProps) => {
  const { isLoading, commentsData, updateList, isFirstLoad } = useCommentsList({ id: props.id });
  const { newCommentQueries } = useNewCommentQueries(props.id);
  const containerRef = useRef<HTMLDivElement>(null);

  useOverflowHandler(props.queryParam !== null);

  return (
    <MainPageLayout rightElement="BackButton" paddingTop={0}>
      {isLoading && commentsData === undefined && <Loading />}

      {!isFirstLoad && typeof commentsData !== 'undefined' && (
        <div
          ref={containerRef}
          className="relative flex flex-col px-4"
          style={{
            height: '100dvh',
            overflow: 'auto',
            paddingBottom: FOOTER_HEIGHT + 16,
            pointerEvents: isLoading ? 'none' : 'auto',
          }}
        >
          <CommentsTopPart {...commentsData} id={props.id} />

          <ContentsSectionModule image={commentsData.image} text={commentsData.text} hasLinkTo={false} id={props.id} />

          <CommentsBottomPart {...commentsData} id={props.id} />
          <div className="px-4">
            <div className="w-full h-1 my-4 bg-impo_Neutral_Surface" />

            {commentsData.comments.length === 0 && <CommentsListEmpty self={commentsData.self} />}

            <InfiniteList
              parentRef={containerRef}
              list={commentsData.comments}
              pagination={{
                pageNo: undefined,
                isLoading: isLoading,
                callPagination: updateList,
                pageSize: undefined,
                totalCount: undefined,
              }}
              renderItem={(item, index) => (
                <CommentsGenerator
                  {...item}
                  shareId={props.id}
                  isFirstIndex={index === 0}
                  key={index}
                  canSendComment={commentsData.canSendReply}
                />
              )}
            />
          </div>
        </div>
      )}

      {typeof commentsData !== 'undefined' && (
        <NewPostLink
          queries={{ [SHARE_EXPERIENCE_NEW_REPLY_MODAL_QUERY_NAME]: JSON.stringify(newCommentQueries) }}
          placeholder="نظرت رو درباره این تجربه بنویس"
          avatar={props.avatarImage}
          toast={commentsData.toast}
          canSendComment={commentsData.canSendComment}
          queryName={SHARE_EXPERIENCE_NEW_REPLY_MODAL_QUERY_NAME}
          id={props.id}
        />
      )}
    </MainPageLayout>
  );
};

export default ShareExperienceCommentsModalContainer;
