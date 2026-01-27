import ArrowIcon from '@assets/icons/arrowElbowDown.svg';

import { NewReplyQueriesTypes } from '@components/pages/mainRoutes/shareExperience/ShareExperienceModals/ShareExperienceNewReplyModal/types';
import { SHARE_EXPERIENCE_NEW_REPLY_MODAL_QUERY_NAME } from '@components/pages/mainRoutes/shareExperience/constants';
import Dark_Spinner from '@components/ui/Dark_Spinner';
import Dark_Typography from '@components/ui/Dark_Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { ReplyBtnProps } from './types';

const ReplyBtn = ({ avatar, name, shareId, commentId, userId }: ReplyBtnProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const loadingId = `ReplyBtn ${shareId} ${commentId} ${userId}`;
  const isLoading = pageNavigationLoading === loadingId;

  const clickHandler = () => {
    if (!isLoading) {
      const queries: NewReplyQueriesTypes = { name, avatar, type: 'reply', shareId, commentId, userId };
      const queryData = JSON.stringify(queries);

      newQueryParamsHandler({ [SHARE_EXPERIENCE_NEW_REPLY_MODAL_QUERY_NAME]: queryData });
      pageNavigationHandler({
        showProgressBar: false,
        id: loadingId,
      });
    }
  };

  return (
    <>
      <div
        onClick={clickHandler}
        className="relative flex items-center justify-center gap-[2px] w-[72px] h-[30px] rounded-full bg-impo_Neutral_Surface py-1"
      >
        <Dark_Typography
          fontSize="Lable_Small"
          className={`text-impo_Neutral_OnSurface ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        >
          پاسخ
        </Dark_Typography>

        <ArrowIcon className={`w-4 fill-impo_Surface_Outline ${isLoading ? 'opacity-0' : 'opacity-100'}`} />

        {isLoading && (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center pointer-events-none">
            <Dark_Spinner className="border-impo_Surface_Outline" size={16} />
          </div>
        )}
      </div>
    </>
  );
};

export default ReplyBtn;
