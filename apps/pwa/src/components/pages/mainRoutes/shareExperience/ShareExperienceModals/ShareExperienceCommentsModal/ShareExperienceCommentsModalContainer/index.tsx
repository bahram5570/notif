import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';

import MainPageLayout from '@components/MainPageLayout';
import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';
import InfiniteScrollContainer from '@components/infiniteScrollContainer';
import { SHARE_EXPERIENCE_NEW_REPLY_MODAL_QUERY_NAME } from '@components/pages/mainRoutes/shareExperience/constants';
import { useOverflowHandler } from '@repo/core/hooks/useOverflowHandler';

import ShareExperienceContentsModule from '../../../ShareExperienceModules/ShareExperienceContentsModule';
import ShareExperienceNewCommentFooterModule from '../../../ShareExperienceModules/ShareExperienceNewCommentFooterModule';
import CommentsBottomPart from './CommentsBottomPart';
import CommentsList from './CommentsList';
import useCommentsList from './CommentsList/__hooks__/useCommentsList';
import CommentsTopPart from './CommentsTopPart';
import useNewCommentQueries from './__hooks__/useNewCommentQueries';
import { ShareExperienceCommentsModalContainerProps } from './types';

const ShareExperienceCommentsModalContainer = (props: ShareExperienceCommentsModalContainerProps) => {
  const { newCommentQueries } = useNewCommentQueries(props.id);
  const { isLoading, commentsData, updatePageNo, pageNo, isFirstLoad } = useCommentsList(props.id);

  useOverflowHandler(props.queryParam !== null);

  return (
    <MainPageLayout rightElement="BackButton" paddingTop={0}>
      <InfiniteScrollContainer
        height="100dvh"
        isLoading={isLoading}
        totalCount={commentsData?.commentCount || 10}
        pageNo={pageNo}
        callBack={updatePageNo}
      >
        {isFirstLoad && (
          <div className="absolute left-0 right-0 bottom-20 w-full flex justify-center" style={{ top: 80 }}>
            <CustomSpinner className="border-impo_Surface_Outline" size={40} />
          </div>
        )}

        {!isFirstLoad && typeof commentsData !== 'undefined' && (
          <div
            className="relative flex flex-col px-4"
            style={{ paddingTop: HEADER_HEIGHT + 16, paddingBottom: HEADER_HEIGHT * 2 }}
          >
            <CommentsTopPart {...commentsData} id={props.id} />

            <ShareExperienceContentsModule
              isSelf={commentsData.self}
              image={commentsData.image}
              text={commentsData.text}
              hasLinkTo={false}
              id={props.id}
            />

            <CommentsBottomPart {...commentsData} id={props.id} />

            <div className="w-full h-1 my-4 bg-impo_Neutral_Surface" />

            <CommentsList id={props.id} comments={commentsData.comments} canSendReply={commentsData.canSendReply} />
          </div>
        )}
      </InfiniteScrollContainer>

      {typeof commentsData !== 'undefined' && (
        <ShareExperienceNewCommentFooterModule
          queries={{ [SHARE_EXPERIENCE_NEW_REPLY_MODAL_QUERY_NAME]: JSON.stringify(newCommentQueries) }}
          placeholder="نظرت رو درباره این تجربه بنویس"
          avatar={newCommentQueries?.avatar || ''}
          toast={commentsData.toast}
          canSendComment={commentsData.canSendComment}
        />
      )}
    </MainPageLayout>
  );
};

export default ShareExperienceCommentsModalContainer;
