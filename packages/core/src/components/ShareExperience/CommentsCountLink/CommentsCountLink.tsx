import CommentsIcon from '@assets/shared/icons/comment.svg';

import { usePageNavigationLoading } from '../../../hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '../../../hooks/useQueryParamsHandler';
import { useShareExperienceHandlers } from '../../../hooks/useShareExperienceHandlers/useShareExperienceHandlers';
import { CustomTypography } from '../../ui/CustomTypography';
import { SHARE_EXPERIENCE_COMMENTS_MODAL_QUERY_NAME } from '../constants';
import { CommentsCountLinkProps } from './type';

export const CommentsCountLink = (props: CommentsCountLinkProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { increaseZIndex } = useShareExperienceHandlers();

  const clickHandler = () => {
    if (!props.isSelf) {
      pageNavigationHandler({ id: props.id, navigationType: 'logo' });

      newQueryParamsHandler({ [SHARE_EXPERIENCE_COMMENTS_MODAL_QUERY_NAME]: props.id });

      increaseZIndex(SHARE_EXPERIENCE_COMMENTS_MODAL_QUERY_NAME, props.id);
    }
  };
  return (
    <>
      <div onClick={clickHandler} className="flex items-center justify-center gap-1 w-10">
        <CustomTypography fontSize="Body_Large" className="text-impo_Surface_InverseSurface !h-5">
          {props.commentCount.toString()}
        </CustomTypography>

        <CommentsIcon className="w-5 fill-impo_Surface_InverseSurface" />
      </div>
    </>
  );
};
