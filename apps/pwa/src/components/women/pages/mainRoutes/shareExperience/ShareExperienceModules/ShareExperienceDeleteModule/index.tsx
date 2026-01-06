import TrashIcon from '@assets/icons/trash.svg';

import { SHARE_EXPERIENCE_DELETE_MODAL_QUERY_NAME } from '@components/women/pages/mainRoutes/shareExperience/constants';
import useAnalytics from '@hooks/useAnalytics';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { ShareExperienceDeleteModuleProps } from './types';

const ShareExperienceDeleteModule = (props: ShareExperienceDeleteModuleProps) => {
  const { callEvent } = useAnalytics();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const selectHandler = () => {
    callEvent('shareExperienceDeletePost');
    const queryData = JSON.stringify({ ...props, dummyData: Math.random() });
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
