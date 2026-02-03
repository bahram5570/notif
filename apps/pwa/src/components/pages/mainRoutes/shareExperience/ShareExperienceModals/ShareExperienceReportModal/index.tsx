import InfoIcon from '@assets/icons/dangerTriangle.svg';

import { SHARE_EXPERIENCE_REPORT_MODAL_QUERY_NAME } from '@components/pages/mainRoutes/shareExperience/constants';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import ShareExperienceApproveModalsModule from '../../ShareExperienceModules/ShareExperienceApproveModalsModule';
import useShareExperienceReport from './__hooks__/useShareExperienceReport';

const ShareExperienceReportModal = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { reportHandler, isLoading } = useShareExperienceReport();

  const queryParams = getQueryParams(SHARE_EXPERIENCE_REPORT_MODAL_QUERY_NAME);
  const queryData = queryParams && JSON.parse(queryParams);

  const Icon = (
    <div className="flex items-center justify-center w-10 h-10 bg-impo_Error_ErrorContainer rounded-full">
      <InfoIcon className="w-7 fill-impo_Error_Error" />
    </div>
  );

  return (
    <>
      <ShareExperienceApproveModalsModule
        description="ایمپویی عزیز، از ریپورت کردن این پست مطمئنی؟"
        applyHandler={() => reportHandler(queryData?.id || '')}
        isOpen={queryParams !== null}
        cancelButtonText="خیر"
        applyButtonText="بله"
        isLoading={isLoading}
        title="ریپورت پست"
        icon={Icon}
      />
    </>
  );
};

export default ShareExperienceReportModal;
