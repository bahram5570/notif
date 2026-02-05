import { useEffect } from 'react';

import { CustomButton } from '@repo/core/components/ui/CustomButton';

import useAnalytics from '@hooks/useAnalytics';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import { BABY_CHECK_HISTORY_CARD_VIEW_ALL } from './constants';
import { WidgetBabyCheckHistoryCardViewAllProps } from './types';

const WidgetBabyCheckHistoryCardViewAll = ({ data }: WidgetBabyCheckHistoryCardViewAllProps) => {
  const { callEvent } = useAnalytics();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { newQuery, removeQuery } = useCustomReactQuery([BABY_CHECK_HISTORY_CARD_VIEW_ALL], { gcTime: 60 * 5 * 1000 });

  useEffect(() => {
    removeQuery({ queryKey: [BABY_CHECK_HISTORY_CARD_VIEW_ALL] });
  }, []);

  const linkToHandler = () => {
    callEvent('TestKitHistoryPressedFromHealthReport');

    newQuery({ queryKey: [BABY_CHECK_HISTORY_CARD_VIEW_ALL], payload: data });

    pageNavigationHandler({
      showProgressBar: true,
      id: BABY_CHECK_HISTORY_CARD_VIEW_ALL,
      linkTo: '/protected/babyCheckHistoryCardViewAll',
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

export default WidgetBabyCheckHistoryCardViewAll;
