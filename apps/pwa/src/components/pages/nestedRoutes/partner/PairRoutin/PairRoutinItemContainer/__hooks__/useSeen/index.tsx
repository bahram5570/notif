import { MODALS } from '@constants/modals.constants';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { IS_LAST_ROUTIN_ITEM, SHOW_ROUTIN_UNLOCK_TOST } from '../../../PairRoutinContainer/constant';

const useSeen = () => {
  const route = useCustomRouter();
  const { getQueryParams } = useQueryParamsHandler();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { refetchQuery } = useCustomReactQuery();
  const searchData = getQueryParams('searchData');
  const isLastItem = typeof localStorage === 'undefined' ? null : localStorage.getItem(IS_LAST_ROUTIN_ITEM);
  const checkIsLastItem = isLastItem && JSON.parse(isLastItem);

  const params = searchData ? new URLSearchParams(searchData) : null;
  const programId = params ? params.get('catId') : '';
  const itemId = params ? params.get('itemId') : '';

  const successHandler = () => {
    if (checkIsLastItem) {
      newQueryParamsHandler({ [MODALS.MODAL_FEEDBACK]: 'true' });
      refetchQuery({ queryKey: ['pairRoutinItem'] });
    } else {
      localStorage.setItem(SHOW_ROUTIN_UNLOCK_TOST, 'true');
      route.back();
    }

    localStorage.removeItem(IS_LAST_ROUTIN_ITEM);
  };

  const { callApi, isLoading } = usePwaApi({
    api: 'widgets/womanpairprogram/item/seen',
    method: 'POST',
    onSuccess: successHandler,
  });

  const onSeenHandler = () => {
    const payload = {
      programId: programId,
      itemId: itemId,
    };

    callApi(payload);
  };

  return { isLoading, onSeenHandler };
};

export default useSeen;
