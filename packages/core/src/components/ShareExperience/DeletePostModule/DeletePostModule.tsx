import TrashIcon from '@assets/shared/icons/trash.svg';

import { useAnalytics } from '../../../hooks/useAnalytics';
import { useShareExperienceOverlayIndex } from '../../../hooks/useOverlayIndex';
import { usePageNavigationLoading } from '../../../hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '../../../hooks/useQueryParamsHandler';
import { SHARE_EXPERIENCE_DELETE_MODAL_QUERY_NAME } from '../constants';
import { DeletePostModuleProps } from './type';

export const DeletePostModule = (props: DeletePostModuleProps) => {
  const { callEvent } = useAnalytics();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { increaseZIndex } = useShareExperienceOverlayIndex();

  const selectHandler = () => {
    callEvent('shareExperienceDeletePost');
    const queryData = JSON.stringify({ ...props });
    newQueryParamsHandler({ [SHARE_EXPERIENCE_DELETE_MODAL_QUERY_NAME]: queryData });
    increaseZIndex(SHARE_EXPERIENCE_DELETE_MODAL_QUERY_NAME, props.shareId);
    pageNavigationHandler({ id: props.shareId, showProgressBar: true });
  };

  return (
    <div className="w-10 flex justify-center" onClick={selectHandler}>
      <TrashIcon className="w-5 stroke-impo_Surface_InverseSurface" />
    </div>
  );
};
