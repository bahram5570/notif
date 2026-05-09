import ThreeDotsIcon from '@assets/shared/icons/threeDots.svg';
import { SHARE_EXPERIENCE_PROFILE_REPORT_QUERY_NAME } from '@repo/core/components/ShareExperience';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';
import { useShareExperienceOverlayIndex } from '@repo/core/hooks/useOverlayIndex';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { ShareExperienceProfileReportModulePropsType } from './type';

const ShareExperienceProfileReportModule = ({ userId }: ShareExperienceProfileReportModulePropsType) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { increaseZIndex } = useShareExperienceOverlayIndex();

  const selectHandler = () => {
    increaseZIndex(SHARE_EXPERIENCE_PROFILE_REPORT_QUERY_NAME, userId);
    newQueryParamsHandler({ [SHARE_EXPERIENCE_PROFILE_REPORT_QUERY_NAME]: userId });
    pageNavigationHandler({ id: userId, showProgressBar: true });
  };
  return (
    <div style={{ height: HEADER_HEIGHT }} className=" fixed top-0 z-50 px-4">
      <div className="flex flex-col justify-center items-center h-full">
        <div className=" flex justify-center " onClick={selectHandler}>
          <ThreeDotsIcon className="w-1 fill-impo_Surface_InverseSurface" />
        </div>
      </div>
    </div>
  );
};

export default ShareExperienceProfileReportModule;
