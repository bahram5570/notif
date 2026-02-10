import TrashIcon from '@assets/shared/icons/trash.svg';

import {
  SHARE_EXPERIENCE_DELETE_MODAL_QUERY_NAME,
  SHARE_EXPERIENCE_ORDER_QUERY_NAME,
} from '@components/pages/mainRoutes/shareExperience/constants';
import { useAnalytics } from '@repo/core/hooks/useAnalytics';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { ShareExperienceDeleteModuleProps } from './types';

const ShareExperienceDeleteModule = (props: ShareExperienceDeleteModuleProps) => {
  const { callEvent } = useAnalytics();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const selectHandler = () => {
    callEvent('shareExperienceDeletePost');
    const queryData = JSON.stringify({ ...props, [SHARE_EXPERIENCE_ORDER_QUERY_NAME]: new Date().getTime() });
    newQueryParamsHandler({ [SHARE_EXPERIENCE_DELETE_MODAL_QUERY_NAME]: queryData });
    pageNavigationHandler({ id: props.shareId, showProgressBar: true });
  };

  return (
    <div className="w-10 flex justify-center" onClick={selectHandler}>
      <TrashIcon className="w-5 stroke-impo_Surface_InverseSurface" />
    </div>
  );
};

export default ShareExperienceDeleteModule;
