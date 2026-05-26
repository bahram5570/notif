import ThreeDotsIcon from '@assets/shared/icons/threeDots.svg';

import { usePageNavigationLoading } from '../../../hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '../../../hooks/useQueryParamsHandler';
import { useShareExperienceHandlers } from '../../../hooks/useShareExperienceHandlers/useShareExperienceHandlers';
import { SHARE_EXPERIENCE_REPORT_MODAL_QUERY_NAME } from '../constants';
import { ReportButtonModuleProps } from './type';

export const ReportButtonModule = ({ id }: ReportButtonModuleProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { increaseZIndex } = useShareExperienceHandlers();

  const selectHandler = () => {
    increaseZIndex(SHARE_EXPERIENCE_REPORT_MODAL_QUERY_NAME, id);
    newQueryParamsHandler({ [SHARE_EXPERIENCE_REPORT_MODAL_QUERY_NAME]: id });
    pageNavigationHandler({ id: id, navigationType: 'logo' });
  };

  return (
    <div className="w-10 flex justify-center" onClick={selectHandler}>
      <ThreeDotsIcon className="w-1 fill-impo_Surface_InverseSurface" />
    </div>
  );
};
