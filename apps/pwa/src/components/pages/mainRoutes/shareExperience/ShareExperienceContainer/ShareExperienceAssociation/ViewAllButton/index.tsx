import ArrowRightIcon from '@assets/shared/icons/ArrowRight.svg';
import { SHARE_EXPERIENCE_ASSOCIATION_LIST_QUERY_NAME } from '@repo/core/components/ShareExperience';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

const ViewAllButton = () => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { increaseZIndex } = useShareExperienceHandlers();

  const clickHandler = () => {
    pageNavigationHandler({ id: 'shareExperienceAssociation', showProgressBar: true });

    newQueryParamsHandler({ [SHARE_EXPERIENCE_ASSOCIATION_LIST_QUERY_NAME]: 'true' });
    increaseZIndex(SHARE_EXPERIENCE_ASSOCIATION_LIST_QUERY_NAME);
  };

  return (
    <div className="py-3 px-2 flex flex-row-reverse items-center gap-1" onClick={clickHandler}>
      <CustomTypography
        fontSize="Lable_SmallProminet"
        className="text-impo_Primary_Primary !whitespace-nowrap overflow-hidden"
      >
        مشاهده همه
      </CustomTypography>
      <ArrowRightIcon className="w-4 h-4  fill-impo_Primary_Primary rotate-180" />
    </div>
  );
};

export default ViewAllButton;
