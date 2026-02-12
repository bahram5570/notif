import { useEffect } from 'react';

import { useCustomReactQuery } from '../../../../../hooks/useCustomReactQuery';
import { usePageNavigationLoading } from '../../../../../hooks/usePageNavigationLoading';
import { CustomButton } from '../../../../ui/CustomButton';
import { OVULATION_HISTORY_CARD_VIEW_ALL } from './constants';
import { WidgetOvulationHistoryCardViewAllProps } from './types';

export const WidgetOvulationHistoryCardViewAll = ({ data }: WidgetOvulationHistoryCardViewAllProps) => {
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { newQuery, removeQuery } = useCustomReactQuery([OVULATION_HISTORY_CARD_VIEW_ALL], { gcTime: 60 * 5 * 1000 });

  useEffect(() => {
    removeQuery({ queryKey: [OVULATION_HISTORY_CARD_VIEW_ALL] });
  }, []);

  const linkToHandler = () => {
    newQuery({ queryKey: [OVULATION_HISTORY_CARD_VIEW_ALL], payload: data });

    pageNavigationHandler({
      showProgressBar: true,
      id: OVULATION_HISTORY_CARD_VIEW_ALL,
      linkTo: '/protected/ovulationHistoryCardViewAll',
    });
  };

  return (
    <CustomButton
      className="mt-2 !bg-impo_Neutral_Surface !border-impo_Neutral_Surface !text-impo_Neutral_OnBackground"
      onClick={linkToHandler}
      fontSize="Lable_Large"
    >
      {data.button.text}
    </CustomButton>
  );
};

