import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Dark_Typography from '@components/ui/Dark_Typography';
import useAnalytics from '@hooks/useAnalytics';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

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
    <div onClick={selectHandler} className="flex rounded-2xl p-3 w-1/3 justify-center bg-impo_Surface_SurfaceVariant">
      <div className="flex flex-col justify-center items-center gap-2 p-1">
        <Icon className="w-12 h-12" />

        <div className="flex flex-row-reverse gap-1">
          <Dark_Typography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
            {` ${text}:`}
          </Dark_Typography>

          <Dark_Typography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
            {`%${percent.toString()}`}
          </Dark_Typography>
        </div>
      </div>
    </div>
  );
};

export default BiorhythmContainer;
