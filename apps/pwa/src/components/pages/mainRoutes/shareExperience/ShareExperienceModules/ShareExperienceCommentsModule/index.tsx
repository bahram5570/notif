import CommentsIcon from '@assets/icons/comment.svg';

import {
  SHARE_EXPERIENCE_COMMENTS_MODAL_QUERY_NAME,
  SHARE_EXPERIENCE_ORDER_QUERY_NAME,
} from '@components/pages/mainRoutes/shareExperience/constants';
import Dark_Typography from '@components/ui/Dark_Typography';
import useOverlayIndex from '@hooks/__shareExperience__/useOverlayIndex';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

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
        <Dark_Typography fontSize="Body_Large" className="text-impo_Surface_InverseSurface !h-5">
          {props.commentCount.toString()}
        </Dark_Typography>

        <CommentsIcon className="w-5 fill-impo_Surface_InverseSurface" />
      </div>
    </>
  );
};

export default ShareExperienceCommentsModule;
