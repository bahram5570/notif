import CommentsIcon from '@assets/icons/comment.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { SHARE_EXPERIENCE_COMMENTS_MODAL_QUERY_NAME } from '@components/pages/mainRoutes/shareExperience/constants';
import useOverlayIndex from '@hooks/__shareExperience__/useOverlayIndex';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { ShareExperienceCommentsModuleProps } from './types';

const ShareExperienceCommentsModule = (props: ShareExperienceCommentsModuleProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { increaseZIndex } = useOverlayIndex();

  const clickHandler = () => {
    if (!props.isSelf) {
      pageNavigationHandler({ id: props.id, showProgressBar: true });

      const paramsData = JSON.stringify({ id: props.id });
      newQueryParamsHandler({ [SHARE_EXPERIENCE_COMMENTS_MODAL_QUERY_NAME]: paramsData });

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

export default ShareExperienceCommentsModule;
