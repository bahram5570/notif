import ArrowIcon from '@assets/shared/icons/calendarArrow.svg';
import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MODAL_QUERY_NAME } from '@repo/core/constants/modal.constants';
import { useAnalytics } from '@repo/core/hooks/useAnalytics';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { PartnerModalNameEnums } from '../../PartnerModals/enums';
import { BiorhythmContainerProps } from './type';

const BiorhythmContainer = ({ description, icon, title }: BiorhythmContainerProps) => {
  const { callEvent } = useAnalytics();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const selectHandler = () => {
    callEvent('BiorhythmClicked');
    newQueryParamsHandler({
      [MODAL_QUERY_NAME]: 'true',
      partnerModal: PartnerModalNameEnums.Biorhthm,
      description,
      icon,
      title,
    });
    pageNavigationHandler({ showProgressBar: true, id: 'BiorhythmModal' });
  };

  return (
    <div onClick={selectHandler} className="flex rounded-2xl p-3 w-1/3 justify-center bg-impo_Neutral_Surface">
      <div className="flex flex-col justify-center items-center gap-2 p-1">
        <CustomImage src={icon} className="w-12 h-12" />

        <div className="flex flex-row-reverse gap-1">
          <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground whitespace-nowrap">
            {title}
          </CustomTypography>
          <ArrowIcon className="w-4 h-4 stroke-impo_Surface_Outline" />
        </div>
      </div>
    </div>
  );
};

export default BiorhythmContainer;
