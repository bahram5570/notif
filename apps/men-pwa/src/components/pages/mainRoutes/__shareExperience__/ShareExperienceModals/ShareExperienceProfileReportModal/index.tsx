import InfoIcon from '@assets/shared/icons/dangerTriangle.svg';
import { ApproveModalsModule, SHARE_EXPERIENCE_PROFILE_REPORT_QUERY_NAME } from '@repo/core/components/ShareExperience';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import useShareExperienceProfileReport from './__hooks__/useShareExperienceProfileReport';

const ShareExperienceProfileReportModal = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useShareExperienceHandlers();
  const { reportHandler, isLoading } = useShareExperienceProfileReport();

  const queryParams = getQueryParams(SHARE_EXPERIENCE_PROFILE_REPORT_QUERY_NAME);
  const queryData = queryParams ? (queryParams as string) : null;

  const Icon = (
    <div className="flex items-center justify-center w-10 h-10 bg-impo_Error_ErrorContainer rounded-full">
      <InfoIcon className="w-7 fill-impo_Error_Error" />
    </div>
  );

  const zIndex = getZIndex(SHARE_EXPERIENCE_PROFILE_REPORT_QUERY_NAME, queryData || '');

  return (
    <ApproveModalsModule
      description="ایمپویی عزیز، از ریپورت کردن این حساب کاربری مطمئنی؟"
      applyHandler={() => reportHandler(queryData || '')}
      isOpen={queryParams !== null}
      cancelButtonText="خیر"
      applyButtonText="بله"
      isLoading={isLoading}
      title="ریپورت حساب کاربری"
      zIndex={zIndex}
      icon={Icon}
    />
  );
};

export default ShareExperienceProfileReportModal;
