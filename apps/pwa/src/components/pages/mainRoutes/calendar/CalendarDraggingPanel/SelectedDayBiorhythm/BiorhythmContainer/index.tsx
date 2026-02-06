import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MODAL_QUERY_NAME } from '@repo/core/constants/modal.constants';
import { useAnalytics } from '@repo/core/hooks/useAnalytics';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { BiorhythmContainerProps } from './type';

const BiorhythmContainer = ({ Icon, percent, text, typeText, type }: BiorhythmContainerProps) => {
  const { callEvent } = useAnalytics();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const selectHandler = () => {
    callEvent('BiorhythmClicked');
    newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true', typeText, type });
    pageNavigationHandler({ showProgressBar: true, id: 'BiorhythmModal' });
  };

  return (
    <div onClick={selectHandler} className="flex rounded-2xl p-3 w-1/3 justify-center bg-impo_Neutral_Surface">
      <div className="flex flex-col justify-center items-center gap-2 p-1">
        <Icon className="w-12 h-12" />

        <div className="flex flex-row-reverse gap-1">
          <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
            {` ${text}:`}
          </CustomTypography>

          <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
            {`%${percent.toString()}`}
          </CustomTypography>
        </div>
      </div>
    </div>
  );
};

export default BiorhythmContainer;
