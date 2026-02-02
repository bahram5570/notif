import CommentsIcon from '@assets/icons/comment.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import {
  SHARE_EXPERIENCE_COMMENTS_MODAL_QUERY_NAME,
  SHARE_EXPERIENCE_ORDER_QUERY_NAME,
} from '@components/pages/mainRoutes/shareExperience/constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import { ShareExperienceCommentsModuleProps } from './types';

const ShareExperienceCommentsModule = (props: ShareExperienceCommentsModuleProps) => {
  const { newQueryParamsHandler, getQueryParams } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const clickHandler = () => {
    if (!props.isSelf) {
      pageNavigationHandler({ id: props.id, showProgressBar: true });

      const paramsData = JSON.stringify({ id: props.id, [SHARE_EXPERIENCE_ORDER_QUERY_NAME]: new Date().getTime() });
      newQueryParamsHandler({ [SHARE_EXPERIENCE_COMMENTS_MODAL_QUERY_NAME]: paramsData });
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
